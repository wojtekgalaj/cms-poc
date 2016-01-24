import Navigation from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('page.titles').ready()) {
    var pages = Collections.Pages.find().fetch();
    onData(null, {pages});
  }
};

export const depsMapper = (context, actions) => {
  return {
    editMode: actions.pages.editMode,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Navigation);


