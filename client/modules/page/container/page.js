import Page from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  var {Meteor, Collections, Tracker, LocalState} = context();
  const editMode = LocalState.get('editMode');
  Meteor.subscribe('page', title, () => {
    const page = Collections.Pages.findOne({title});
    onData(null, {page}, editMode);
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const pageFromCache = Tracker.nonreactive(() => {
    return Collections.Pages.findOne(title);
  });

  if (pageFromCache) {
    onData(null, {page: pageFromCache}, editMode);
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Page);


