import TextBlock from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context}, onData) => {
  var {Session} = context();
  console.log('text block ', Session.get('currentPage'));
  onData(null, {Session})
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TextBlock);

