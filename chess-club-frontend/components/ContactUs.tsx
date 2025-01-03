'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface Contact {
  id: number;
  name: string;
  email: string;
  link: string;
}

const ContactUs = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/contact");
        // console.log('Fetched Contacts: ', response.data); for debugging
        setContacts(response.data);
      } catch (err) {
        console.error('HAWKError fetching contacts:', err);
        setError('Error fetching contacts');
      }
    };

    fetchContacts();
  }, []);
  

  return (
    <div className='section mt-6'>
      <div id="contact" className='banner mt-4 bg-grey text-green font-bold'>
            Contact Us
        </div>
        <div className='w-full flex items-center justify-center bg-grey'>
            <div className="w-[80%] gap-4 flex items-center justify-center">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="w-[20%] bg-gray-300 shadow-md rounded-lg p-4 mb-4 flex flex-col items-start"
              >
                <h2 className="text-xl font-semibold">{contact.name}</h2>
                <p className="text-sm text-gray-700">Email: {contact.email}</p>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ContactUs