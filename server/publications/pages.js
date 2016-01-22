import {Pages, Elements} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('page', function (title) {
  check(title, String);
  const selector = {title};
  return Pages.find(selector);
});

Meteor.publish('elements', function () {
  return Elements.find();
});
