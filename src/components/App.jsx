import s from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import contacts from '../data/contacts.json'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useState } from 'react'

const App = () => {
  
  return (
    <div className={s.container}>

    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList contacts={contacts} />

    
    </div>
  )
}

export default App