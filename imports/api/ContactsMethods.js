import { ContactsCollection } from './ContactsCollection';



/*
* Insert Contact 
* From form contact
*
*/
Meteor.methods({
    'contacts.insert' ({ firstname, name, email, phone, city, provence, zipcode, country }){
        
        return ContactsCollection.insert({ firstname, name, email, phone, city, provence, zipcode, country });
     }
});

