import Collections from '/libs/collections'
import {Meteor} from 'meteor/meteor'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {ReactiveDict} from 'meteor/reactive-dict'
import {Tracker} from 'meteor/tracker'
import {Session} from 'meteor/session'
import {createStore} from 'redux'
import cms from '/client/reducers/mainReducer'


export function initContext() {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Store: createStore(cms),
    Session,
    Tracker
  }
}
