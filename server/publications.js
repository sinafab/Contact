import { ContactsCollection } from "../imports/api/ContactsCollection";




Meteor.publish('contactList', function publishAllContacts(){
    return ContactsCollection.find();  // live query
});