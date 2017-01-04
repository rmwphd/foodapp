import { Template } from 'meteor/templating';
import '../templates/cardsview.html';
import { ReactiveVar } from 'meteor/reactive-var';
import '../templates/table.html';
import '../main.html';

dataTableData = function () {
    return Food.find().fetch(); // or .map()
};

//Set up your datatable's options as per the jquery.dataTables API, e.g.:

var optionsObject = {
    paging : false,
    tableClasses: 'display',
    columns: [{
        title: 'Recipe Name',
        data: 'name', // note: access nested data like this
        className: 'nameColumn'
    }, {
        title: 'Book',
        data: 'book',
        className: 'bookColumn'
    }, {
        title: 'Page',
        data: 'page',
        className: 'pageColumn'
    }, {
        title: 'Calories',
        data: 'macros.servingcals',
        className: 'calsColumn'
    }, {
        title: 'Serves',
        data: 'macros.serves',
        className: 'pageColumn'
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
