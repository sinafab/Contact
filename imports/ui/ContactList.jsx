import React from 'react';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';
import { Link } from "react-router-dom";





export const ContactList = () => {

    const isLoading = useSubscribe('contactList');
    
    const contacts = useTracker(() => {
        const result =  ContactsCollection.find().fetch();
        return result;
    });

   
    const removeContact = (_id) =>{
        Meteor.call('contacts.remove', {contactId: _id});            
    };

    
    if(isLoading()){
        return <p>chargement...</p>
    }

    return (
    <div className="container">
      <h1>La liste des contacts</h1>
    
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
                    <Link className="btn btn-outline-primary mr-2"  to="/modifier/${contact._id}">Modifier</Link> 
                    <button onClick={()=> removeContact(contact._id)} type="button" className="btn btn-outline-danger">Supprimer</button> 
                </div>
            </div>
        </div>

       
      )}
      
    </div>
  );
};