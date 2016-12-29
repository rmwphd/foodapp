import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../templates/table.html';
import '../templates/cardsview.html';
import '../templates/tagCloud.html';
import '../main.html';


Template.tagCloud.helpers({
 tags () {
   //var tag = Food.findOne({tags : {"$exists":true}},{fields : {tags : 1}, sort : {tags : 1}}).tags;
   var tag = Food.find({tags : {"$exists":true}},{fields : {tags : 1}, sort : {tags : 1}}).fetch();
   var alltags = [];
   for (t in tag){
     for (ag in tag[t].tags)
     alltags.push(tag[t].tags[ag]);
   }
   alltags = [...new Set(alltags)];
   console.log(alltags);
   return alltags;
 }
 });
