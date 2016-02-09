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

};

export const depsMapper = (context, actions) => ({
  savePage: actions.pages.savePage,
  deletePage: actions.pages.deletePage,
  addPage: actions.pages.addPage,
  reset: actions.pages.reset,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Page);


