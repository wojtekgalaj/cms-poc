import PageTitle from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context}, onData) => {
  var {Session} = context();
  onData(null, {Session})
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PageTitle);


