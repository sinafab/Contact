import React, { useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';
import { useParams, Navigate } from "react-router-dom";


export const UpdateContact = () => {

    const { contactId } = useParams();

    const isLoading = useSubscribe('contactFindOne', contactId );
    
    
    const contacts = useTracker(() => {
        const result =  ContactsCollection.find().fetch();
        
        return result;
    });

    console.log("le contact"+contacts);


    const firstnameRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
    const provenceRef = useRef();
    const zipcodeRef  = useRef();
    const countryRef = useRef();

    const updateContact = (e)=>{
        e.preventDefault();
        let firstname = "";
        let name = "";
        let email = "";
        let phone = "";
        let city = "";
        let provence = "";
        let zipcode = "";
        let country = "";

        if (firstnameRef.current.value) {
            firstname = firstnameRef.current.value;
            console.log(firstname);
        }
        
        if (nameRef.current.value) {
            name = nameRef.current.value;
            console.log(name);
        }

        if (emailRef.current.value) {
            email = emailRef.current.value;
            console.log(email);
        }
        
        if (emailRef.current.value) {
            email = emailRef.current.value;
            console.log(email);
        }
        if (phoneRef.current.value) {
            phone = phoneRef.current.value;
            console.log(phone);
        }
        if (cityRef.current.value) {
            city = cityRef.current.value;
            console.log(city);
        }
        if (provenceRef.current.value) {
            provence = provenceRef.current.value;
            console.log(provence);
        }
        if (zipcodeRef.current.value) {
            zipcode = zipcodeRef.current.value;
            console.log(zipcode);
        }
        if (countryRef.current.value) {
            country = countryRef.current.value;
            console.log(country);
        }
        
        Meteor.call(
            'contacts.update', 
            {contactId, firstname, name, email, phone, city, provence, zipcode, country}, 
            function(error, result){

                if(!error){
                    
                    firstname = "";
                    name = "";
                    email = "";
                    phone = "";
                    city = "";
                    provence = "";
                    zipcode = "";
                    country = "";
                    return <Navigate to='/contact'/>

                   
                }
            }
        
        );

        

       
    };

    if(isLoading()){
        return <p>chargement...</p>
    }

    return (
        <div className="container">
            <div>
                <h1>Formulaire de modification</h1>
            </div>
            {contacts.map( contact => 
                <div key={contact._id}>
                    <form className="row g-3">
                        <div>
                                
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" ref={firstnameRef} name="firstname" id="firstname" defaultValue={contact?.firstname} placeholder=""/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Nom</label>
                                    <input type="text" className="form-control" ref={nameRef}  defaultValue={contact.name} name="name" id="name"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Courriel<sup>*</sup></label>
                                    <input type="email" className="form-control" ref={emailRef}  name="email" defaultValue={contact?.email} id="email" placeholder="" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Téléphone<sup>*</sup></label>
                                    <input type="text" className="form-control" ref={phoneRef} name="phone" defaultValue={contact?.phone} id="phone" placeholder="(000) 000-0000" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">Ville</label>
                                    <input type="text" className="form-control" ref={cityRef} name="city" defaultValue={contact?.city} id="city"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="provence" className="form-label">Province</label>
                                    <input type="text" className="form-control" ref={provenceRef} name="provence" defaultValue={contact?.provence} id="provence"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="zipcode" className="form-label">Code Postal<sup>*</sup></label>
                                    <input type="text" className="form-control" ref={zipcodeRef}  name="zipcode" defaultValue={contact?.zipcode} id="zipcode" required/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="country" className="form-label">Pays<sup>*</sup></label>
                                    <input type="text" className="form-control" ref={countryRef} name="country" defaultValue={contact?.country} id="country"/>
                                </div>
                                <div className="col-md-12">
                                    <button type="button" onClick={updateContact} className="btn btn-primary">Sauvegarder</button>
                                </div>
                        </div>
                    </form>
                </div>
             )}
        </div>
  );
};