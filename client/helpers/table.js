dataTableData = function () {
    return Meteor.users.find().fetch(); // or .map()
};

//Set up your datatable's options as per the jquery.dataTables API, e.g.:

var optionsObject = {
    paging : false,
    columns: [{
        title: 'Recipe Name',
        data: 'food.name', // note: access nested data like this
        className: 'nameColumn'
    }, {
        title: 'Book',
        data: 'food.book',
        className: 'bookColumn'
    }],
    // ... see jquery.dataTables docs for more

    // NOTE! saveState: true, is ON by default, which can cause unexpected
    // issues during development. Set saveState: false here to disable this.

}


Template.theDataTable.helpers({
    reactiveDataFunction: function () {
        return dataTableData;
    },

    // NOTE: The following line has to appear AFTER you define options (as we did above):
    optionsObject: optionsObject
});
