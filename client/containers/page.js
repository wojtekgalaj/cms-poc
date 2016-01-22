import Page from '../components/page/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  console.log('composer for page');
  Meteor.subscribe('page', title, () => {
    const page = Collections.Pages.findOne({title});
    onData(null, {page});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const pageFromCache = Tracker.nonreactive(() => {
    return Collections.Pages.findOne(title);
  });

  if (pageFromCache) {
    onData(null, {page: pageFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Page);


