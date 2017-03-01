Meteor.methods({

    'SERVER.addNewFood' (newFoodObj) {
        Food.update("food", newFoodObj, {
            upsert: true
        });
        return true;
    },

    /**
     * Import Database
     */
    'SERVER.importDatabase' (foods) {
        Food.update("food", foods, {
            upsert: true
        });
        return true;
    },
});