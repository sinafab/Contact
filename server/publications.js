import { ContactsCollection } from "../imports/api/ContactsCollection";




Meteor.publish('contactList', function publishAllContacts(){
    return ContactsCollection.find();  // live query
});

Meteor.publish('contactFindOne', function publishOneContacts(contactId){
    return ContactsCollection.find({ _id: contactId });  // live query
});