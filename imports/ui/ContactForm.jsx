import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const ContactForm = () => {
  
    const [firstname, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [provence, setCProvence] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");

    const saveContact = ()=>{
        
        
        
        Meteor.call(
            'contacts.insert', 
            {firstname, name, email, phone, city, provence, zipcode, country},
            function(error, result){
                if(!error){
                    setFirstName("");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCity("");
                    setCProvence("");
                    setZipcode("");
                    setCountry("");
                }
            });
        

       
    };

    return (
        <div className="container">
            <div>
                <h1> Formulaire d'ajout de contact</h1>
            </div>
            <div>
                <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label">Prénom</label>
                    <input type="text" className="form-control" onChange={(e)=> setFirstName(e.target.value)} name="firstname" id="firstname" value={firstname} placeholder=""/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)} value={name} name="name" id="name"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Courriel<sup>*</sup></label>
                    <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} name="email" value={email} id="email" placeholder="" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Téléphone<sup>*</sup></label>
                    <input type="text" className="form-control" onChange={(e)=> setPhone(e.target.value)} name="phone" value={phone} id="phone" placeholder="(000) 000-0000" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">Ville</label>
                    <input type="text" className="form-control" onChange={(e)=> setCity(e.target.value)} name="city" value={city} id="city"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="provence" className="form-label">Province</label>
                    <input type="text" className="form-control" onChange={(e)=> setCProvence(e.target.value)} name="provence" value={provence} id="provence"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="zipcode" className="form-label">Code Postal<sup>*</sup></label>
                    <input type="text" className="form-control" onChange={(e)=> setZipcode(e.target.value)} name="zipcode" value={zipcode} id="zipcode" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="country" className="form-label">Pays<sup>*</sup></label>
                    <input type="text" className="form-control" onChange={(e)=> setCountry(e.target.value)} name="country" value={country} id="country"/>
                </div>
                <div className="col-md-12">
                    <button type="button" onClick={saveContact} className="btn btn-primary">Envoyer</button>
                </div>
            </form>
            </div>
        </div>
  );
};