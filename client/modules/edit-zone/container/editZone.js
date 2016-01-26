import EditZone from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  Meteor.subscribe('elements', () => {
    const elements = Collections.Elements.findOne();
    var editMode = LocalState.get('editMode');
    onData(null, {elements, editMode});
  });

  onData();
};

export const depsMapper = (context) => {
  return {
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditZone);


