import React from 'react';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div className="container">
    <h1>Bienvenue dans l'application contact</h1>
    
    <ContactForm/>
    <ContactList/>
  </div>
);
