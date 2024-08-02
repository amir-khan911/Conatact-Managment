import React, { useState } from 'react'

const AddContact = ({addContact}) => {
  const [contactData,setContactData] = useState({name:"",email:""});
  const handleChange = (event)=>{
        if(event.target.name === "name"){
            setContactData({...contactData,name: event.target.value});
        }else{
          setContactData({...contactData,email: event.target.value});
        }
  }

  const handleAdd = ()=>{
     if (contactData.name === '' || contactData.email === '') {
       alert("Plz fill  All Details");
     }
    addContact(contactData);
    setContactData({name:"",email:""})
  }
  return (
    <>
    <center>
    <h2 id='head2'>Add Contact</h2>
 
      <form action="">
         <div>
            <label>Name : </label>
            <input type="text" placeholder='Enter Name' name='name'  value={contactData.name} onChange={handleChange}/>
         </div>
         <div>
            <label>Email : </label>
            <input type="email" placeholder='Enter Email' email='email'  value={contactData.email} onChange={handleChange} required/>
         </div>
      </form>
      <button id='btn' onClick={handleAdd}>Add Contact</button>
    </center>
    
    </>
  )
}

export default AddContact;
