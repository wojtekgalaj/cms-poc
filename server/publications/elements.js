import {Elements} from '/libs/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('elements', function () {
  return Elements.find({});
});

Meteor.publish('elements.page', function (title) {
  return Elements.find({pageTitle: title})
})
