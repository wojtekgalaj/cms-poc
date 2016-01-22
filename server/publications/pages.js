import {Pages} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('page', function (title) {
  check(title, String);
  console.log('publishing page ', title);
  const selector = {title};
  return Pages.find(selector);
});

Meteor.publish('page.titles', function () {
  console.log('PUBLISHING PAGE TITLES');
  const selector = {};
  const options = {
    fields: {elements: 0},
    sort: {createdAt: -1},
    limit: 10
  };
  return Pages.find(selector, options);
});
