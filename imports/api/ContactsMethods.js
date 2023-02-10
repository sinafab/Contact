import { ContactsCollection } from './ContactsCollection';
import { redirect } from "react-router-dom";


/*
* Insert Contact 
* From form contact
*
*/
Meteor.methods({

    'contacts.insert' ({ firstname, name, email, phone, city, provence, zipcode, country }){
        
        return ContactsCollection.insert({ firstname, name, email, phone, city, provence, zipcode, country });
     },

     'contacts.remove' ({contactId}){
        return ContactsCollection.remove(contactId);
     },

     'contacts.update' ({contactId, firstname, name, email, phone, city, provence, zipcode, country}){
         return ContactsCollection.update(
            {_id: contactId}, 
            { $set: 
               { 
                  firstname:firstname , 
                  name : name, 
                  email : email, 
                  phone : phone, 
                  city : city, 
                  provence : provence, 
                  zipcode : zipcode, 
                  country : country
               } 
            }
         );
          
      }
});

