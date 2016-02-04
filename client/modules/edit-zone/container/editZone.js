import EditZone from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  Meteor.subscribe('elements', () => {
    const elements = Collections.Elements.find({}).fetch()
    onData(null, {elements});
  });

  onData();
};

export const depsMapper = (context, actions) => {
  return {
    addElement: actions.pages.addElement,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditZone);


