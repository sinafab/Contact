import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactList = () => {

    const contacts = useTracker(() => {
        return ContactsCollection.find().fetch();
    });

    const removeContact = (_id) =>{
        Meteor.call('contacts.remove', {contactId: _id});            
    };


    return (
    <div>
      <h2>La liste des contacts</h2>
    
      {contacts.map( contact => 
        <div className="card mb-3" key={contact._id}>
            <div className="row ">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.firstname} {contact.name}</h5>
                        <p className="card-text">{contact.email} {contact.phone}</p>
                    </div>
                </div>   
                <div className="col-md-4 d-flex align-items-center justify-content-end pe-5">
                    <button onClick={()=> removeContact(contact._id)} type="button" className="btn btn-outline-danger">Supprimer</button> 
                </div>
            </div>
        </div>

        /* { <li key={contact._id}> 
            {contact.firstname} {contact.name}
        </li> } */
      )}
      
    </div>
  );
};