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

Template.tagCloud.events({
  'click .rtag' : function (event) {
    //console.log("You clicked a tag!");
    console.log(this.toString());
    if ((event.target.getAttribute("class")).includes("clickedtag")){
      $(event.target).removeClass('clickedtag');
      var atags = Session.get("ActiveTags").slice();
      var i = atags.indexOf(this.toString());
      atags.splice(i,1);
      Session.set("ActiveTags", atags);
    }
    else{
      $(event.target).addClass('clickedtag');
      var atags = Session.get("ActiveTags").slice();
      atags.push(this.toString());
      Session.set("ActiveTags", atags);
    }
    console.log(event.target.getAttribute("class"));
  }
});


Template.tagCloud.rendered = function(){
  Session.set("ActiveTags",[])
};
