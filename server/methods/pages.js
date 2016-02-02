import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Pages} from '/libs/collections'

Meteor.methods({
  'page.save'(page) {
    check(page, Object)
    Pages.update({title: page.title}, page)
  }
})
