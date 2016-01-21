import {Pages} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('page', function (title) {
  check(title, String);
  const selector = {title};
  return Pages.find(selector);
});
