import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
const App = () => {
  const[contact,setContact] = useState([]);
  const addContact = (data)=>{
      setContact([...contact,data]);
  }
  return (
   <>
    <Header/>
    <AddContact addContact = {addContact}/>
    <ContactList contact={contact}/>
   </>


  )
}

export default App
