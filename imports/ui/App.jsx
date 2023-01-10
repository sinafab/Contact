import React from 'react';
import { Contact } from './Contact.jsx';
import { ContactList } from './ContactList.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div className="container">
    <h1>Bienvenue dans l'application contact</h1>
    
    <Contact/>
    <ContactList/>
  </div>
);
