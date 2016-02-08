import EditButton from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeAll} from 'react-komposer'

export const depsMapper = (context, actions) => {
  return {
    editMode: actions.pages.editMode,
    context: () => context
  }
};

export default composeAll(
  useDeps(depsMapper)
)(EditButton);


