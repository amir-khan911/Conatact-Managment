import React from 'react'

const ContactList = ({contact}) => {
    console.log(contact,"contact from contact list");
    const contactList = contact.map((val)=>{
        return(
            <div className='contact'>
                <div>{val.name}</div>
                <div>{val.email}</div>
               
            </div>
        )
    })
  return (
    <>
    <h2 className='contactsHeader'>Contact List</h2>
    <div>{contactList}</div>

    </>
  )
}

export default ContactList
