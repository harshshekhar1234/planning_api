import React,{useEffect,useState} from 'react'
import { img_url } from '../../configuration';
import {contacts} from '../../contacts'

function ContactDetails() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

 
  return (
    <>
    <h2 className='tc b'>Contact Details</h2>
    <main className="flex flex-wrap justify-center">
    {contacts.map(contact => <article key = {contact.id} className="dt mw6 w-100 bb b--black-05 pb2 mt4 ml5" href="#0">
      <div className="dtc w2 w3-ns v-mid">
        <i className={`${contact.img} b--black-10 db br-100 w2 w3-ns h2 h3-ns`}></i>
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title measure-narrow black mv0">{contact.name}</h1>
        
        <a href={contact.website} target="_blank" className='f6 fw4 mt0 mb0 black-60'>{contact.website}</a>
      </div>
      <div className="dtc v-mid">
      <a href={contact.link} target="_blank" className='w-100 tr'>
          <button className="f6 button-reset bg-dark-green ba b--black-10 dim pointer pv1 white br4" type="submit">Contact</button>
        </a>
      </div>
    </article>)}
  </main>
</>
  )
}

export default ContactDetails