import EditZone from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, title}, onData) => {
  const {Meteor, Collections, Session, FlowRouter} = context();
  let elements = Session.get('elements')

  Meteor.subscribe('elements', () => {
    elements = Collections.Elements.find({}).fetch()
    Session.set('elements', elements)
    onData(null, {elements, FlowRouter});
  });

  if (elements) {
    onData(null, {elements, FlowRouter});
  }
};

export const depsMapper = (context, actions) => {
  return {
    addElement: actions.pages.addElement,
    removeElement: actions.pages.removeElement,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditZone);
