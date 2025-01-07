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
        setContacts(response.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError('Error fetching contacts');
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="section mt-6 mb-14">
      <div id="contact" className="banner bg-dark-bg text-green font-bold text-center tracking-widest py-4 mb-8 text-2xl sm:text-3xl">
        CONTACT US
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-medium-bg shadow-md rounded-lg p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center text-center"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-dark-sub-text">{contact.name}</h2>
              <p className="text-sm text-dark-text mt-2">Email: {contact.email}</p>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green text-black font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
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