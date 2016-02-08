import Page from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  var {Meteor, Collections, Session} = context();

  Meteor.subscribe('page', title, () => {
    const page = Collections.Pages.findOne({title});
    onData(null, {page, Session});
  });

  onData();
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


