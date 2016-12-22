Meteor.methods({


  'SERVER.addNewFood'(newFoodObj) {
    Food.update("food", newFoodObj, {upsert: true});
    },


  });
