import {Pages} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('page', function (title) {
  check(title, String);
  const selector = {title};
  return Pages.find(selector);
}, {
  url: '/page/:0',
  method: 'get'
});

Meteor.publish('page.titles', function () {
  const selector = {};
  const options = {
    fields: {elements: 0},
    sort: {createdAt: -1},
    limit: 10
  };
  return Pages.find(selector, options);
});
