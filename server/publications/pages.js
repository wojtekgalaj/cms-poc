import {Pages} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('page', function (title) {
  console.log('publishing page ', title);
  check(title, String);
  const selector = {title};
  console.log('publishing ' + Pages.find(selector).count() + ' pages');
  return Pages.find(selector);
});
