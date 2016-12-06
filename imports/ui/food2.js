import { Template } from 'meteor/templating';

import { Food } from '../food.js';

import './food.html';

Template.food.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    food.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Food.remove(this._id);
  },
});
