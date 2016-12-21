import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/table.html';
import './main.html';

if (Meteor.isClient) {

  Template.card2.helpers({
    counter() {
      return Template.instance().counter.get();
    },

    lol(){
      var lolz = [1,2,3];
      console.log(lolz);
      return lolz
    },
  });

  Template.card2.events({
    'click button'(event, instance) {
      // increment the counter when button is clicked
      instance.counter.set(instance.counter.get() + 1);
    },
  });

};
