import PageTitle from '../component/index.jsx'
import {useDeps} from 'react-simple-di'
import {composeWithTracker, composeAll} from 'react-komposer'

export const composer = ({context, pageName}, onData) => {
  const {Meteor, Collections} = context();

  Meteor.subscribe('Elements', {
    pageName,
    element: 'pageTitle'
  }, () => {
    const pageTitle = Collections.elements.findOne({pageName});
    onData(null, {pageTitle});
  });

  onData();
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PageTitle);


