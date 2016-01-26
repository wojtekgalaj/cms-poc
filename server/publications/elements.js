import {Elements} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('elements', function () {
  return Elements.find({});
});
