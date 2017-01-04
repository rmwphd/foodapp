import { Template } from 'meteor/templating';
import '../templates/cardsview.html';
import { ReactiveVar } from 'meteor/reactive-var';
import '../templates/table.html';
import '../main.html';

Template.cardsview.helpers({
    foods () {
        var out = Food.find({}, { sort: { order: 1 } }).fetch()
        console.log(out)
        return out;
    },

    howmanyfoods(){
        return Food.find().count();
    }
});

//Once the Template is rendered, run this function which
//  sets up JQuery UI's sortable functionality
Template.cardsview.rendered = function() {
    this.$('#recipe').sortable({
        stop: function(e, ui) {
            // get the dragged html element and the one before
            //   and after it
            el = ui.item.get(0)
            before = ui.item.prev().get(0)
            after = ui.item.next().get(0)

            // Here is the part that blew my mind!
            //  Blaze.getData takes as a parameter an html element
            //    and will return the data context that was bound when
            //    that html element was rendered!
            if(!before) {
                //if it was dragged into the first position grab the
                // next element's data context and subtract one from the rank
                newOrder = Blaze.getData(after).order - 1
            } else if(!after) {
                //if it was dragged into the last position grab the
                //  previous element's data context and add one to the rank
                newOrder = Blaze.getData(before).order + 1
            }
            else
            //else take the average of the two ranks of the previous
            // and next elements
            newOrder = (Blaze.getData(after).order +
            Blaze.getData(before).order)/2

            //update the dragged Item's rank
            Items.update({_id: Blaze.getData(el)._id}, {$set: {order: newOrder}})
        }
    })
}


Template.RecipeCard.helpers({

    lmao(thing){
        console.log(thing)
    }

});

AutoForm.setDefaultTemplate('plain');


Template.NewRecipe.helpers({
    copyContent () {
        event.preventDefault();
        document.getElementById("new_name_form").value = document.getElementById("new_name").innerHTML;
        document.getElementById("new_book_form").value = document.getElementById("new_book").innerHTML;
        document.getElementById("new_page_form").value = document.getElementById("new_page").innerHTML;
        document.getElementById("new_calories_form").value = document.getElementById("new_calories").innerHTML;
        document.getElementById("new_serves_form").value = document.getElementById("new_serves").innerHTML;
        document.getElementById("new_fat_form").value = document.getElementById("new_fat").innerHTML;
        document.getElementById("new_carbs_form").value = document.getElementById("new_carbs").innerHTML;
        document.getElementById("new_protein_form").value = document.getElementById("new_protein").innerHTML;
        document.getElementById("new_desc_form").value = document.getElementById("new_desc").innerHTML;
        document.getElementById("new_ingred_form").value = document.getElementById("new_ingred").innerHTML;
        document.getElementById("new_tags_form").value = document.getElementById("new_tags").innerHTML;
        //console.log(document.getElementById("new_name").innerHTML);
        //console.log(document.getElementById("new_name_form").value);
        return true;
    }
});


Template.NewRecipe.events({

    'mousedown button' : function(){
        Template.NewRecipe.__helpers[" copyContent"]();
    },

    'submit' : function(event, templ) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log(event);
        console.log(event.target.new_ingred_form.value.split('\n'));
        console.log(event.target.new_name_form.value);
        //console.log(event.target.new_tags_form.value.split(';'));

        // Insert a task into the collection
        var ord = Template.cardsview.__helpers[" howmanyfoods"]() +1;
        //Food.insert(
        var newFood = {
            name : event.target.new_name_form.value,
            book : event.target.new_book_form.value,
            page : event.target.new_page_form.value,
            macros :{
                calories : event.target.new_calories_form.value,
                serves : event.target.new_serves_form.value,
                fat : event.target.new_fat_form.value,
                carbs : event.target.new_carbs_form.value,
                protein : event.target.new_protein_form.value
            },
            description : event.target.new_desc_form.value,
            //ingredients : event.target.new_ingred_form.value.split('<div>'),
            tags : event.target.new_tags_form.value.split(';'),
            order: ord
            }
            //);
            Meteor.call('SERVER.addNewFood', {food: newFood});


        }
    });
