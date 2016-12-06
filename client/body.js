import { Food } from '../api/food.js';
import { Template } from 'meteor/templating';
  
import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});
