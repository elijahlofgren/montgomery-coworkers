// this is image_share.js
Status = new Mongo.Collection("status");

if (Meteor.isClient) {

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });

    Template.body.helpers({username:function(){
            if (Meteor.user()){
              return Meteor.user().username;
            }
            else {
              return "anonymous internet user";
            }
        }
    });
    
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
