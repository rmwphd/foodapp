dataTableData = function () {
    return Meteor.users.find().fetch(); // or .map()
};

//Set up your datatable's options as per the jquery.dataTables API, e.g.:

var optionsObject = {
    paging : false,
    columns: [{
        title: 'Real Name',
        data: 'profile.realname', // note: access nested data like this
        className: 'nameColumn'
    }, {
        title: 'Photo',
        data: 'profile.picture',
        render: renderPhoto, // optional data transform, see below
        className: 'imageColumn'
    }],
    // ... see jquery.dataTables docs for more

    // NOTE! saveState: true, is ON by default, which can cause unexpected
    // issues during development. Set saveState: false here to disable this.

}

function renderPhoto(cellData, renderType, currentRow) {
    // You can return html strings, change sort order etc. here
    // Again, see jquery.dataTables docs
    var img = "<img src='" + cellData + "' title='" + currentRow.profile.realname + "'>"
    return img;
}


Template.containsTheDataTable.helpers({
    reactiveDataFunction: function () {
        return dataTableData;
    },

    // NOTE: The following line has to appear AFTER you define options (as we did above):
    optionsObject: optionsObject
});
