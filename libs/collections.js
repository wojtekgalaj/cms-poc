import {Mongo} from 'meteor/mongo'

export default {
  Pages: new Mongo.Collection('pages'),
  Elements: new Mongo.Collection('elements')
}
