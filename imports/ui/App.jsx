import React from 'react';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout.jsx';
import { Navbar } from './Navbar.jsx';
import { UpdateContact } from './UpdateContact.jsx';


export const App = () => (
  <div className='container-fluid'>
    <Navbar/>
    <Routes>
        <Route path="/" element={<MainLayout/>}/>
        <Route path="/ajouter" element={<ContactForm/>}/>
        <Route path="/modifier/:id" element={<UpdateContact/>}/>
        <Route path="/contacts" element={<ContactList/>}/>
    </Routes>

  </div>
);
