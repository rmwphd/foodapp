import { Food } from '../imports/food.js';
import { Template } from 'meteor/templating';

import '../imports/ui/body.html';

Template.body.helpers({
  tasks() {
    return Food.find({});
  },
});
