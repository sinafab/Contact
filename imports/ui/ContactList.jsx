import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find().fetch();
  });

  return (
    <div>
      <h2>La liste des contacts</h2>
      <ul>{contacts.map( contact => 
        <li key={contact._id}> 
            {contact.firstname} {contact.name}
        </li>
      )}</ul>
    </div>
  );
};