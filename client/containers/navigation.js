import Navigation from '../components/navigation/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

console.log('in the file');
const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  console.log('in composer');
  if (Meteor.subscribe('page.titles').ready()) {
    var pages = Collections.Pages.find().fetch();
    console.log('GOT ', pages);
    onData(null, {pages});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Navigation);


