import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../templates/table.html';
import '../templates/cardsview.html';
import '../templates/tagCloud.html';
import '../main.html';


Template.tagCloud.helpers({
 tags () {
   var tags = Food.findOne({tags : {"$exists":true}},{fields : {tags : 1}, sort : {tags : 1}}).tags;
   console.log(tags)
   return tags;
 }
 });
