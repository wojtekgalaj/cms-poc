import Page from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title, edit}, onData) => {
  const {Meteor, Collections, Session} = context();
  let page = Session.get('currentPage')
  Meteor.subscribe('page', title, () => {
    page = Collections.Pages.findOne({title});
    onData(null, {page, Session});
  });


  if (page && page.saved) {
    page.saved = false
    Session.set('currentPage', page)
    onData(null, {page, Session});
  }

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  // const pageFromCache = Tracker.nonreactive(() => {
  //   return Collections.Pages.findOne({title});
  // });
  //
  // if (pageFromCache) {
  //   console.log('Page from cache found ', pageFromCache);
  //   onData(null, {page: pageFromCache, Session});
  // } else {
  //   console.log('calling empty onData');
  //   onData();
  // }
};

export const depsMapper = (context, actions) => ({
  savePage: actions.pages.savePage,
  deletePage: actions.pages.deletePage,
  addPage: actions.pages.addPage,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Page);


