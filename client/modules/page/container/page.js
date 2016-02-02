import Page from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  var {Meteor, Collections, Tracker, Session} = context();

  Meteor.subscribe('page', title, () => {
    const page = Collections.Pages.findOne({title});
    onData(null, {page, Session});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const pageFromCache = Tracker.nonreactive(() => {
    return Collections.Pages.findOne(title);
  });

  if (pageFromCache) {
    onData(null, {page: pageFromCache, Session});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  savePage: actions.pages.savePage,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Page);


