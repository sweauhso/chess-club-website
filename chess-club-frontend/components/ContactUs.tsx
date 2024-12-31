import React from 'react'

const ContactUs = () => {
  // Samples for contacts
  const contacts = [
    {
      id: "64c999f9e4b0e49b1c2f5e0a",
      name: "John Doe",
      email: "johndoe@example.com",
      link: "https://johndoe.com"
    },
    {
      id: "64c999f9e4b0e49b1c2f5e0b",
      name: "Jane Smith",
      email: "janesmith@example.com",
      link: "https://janesmith.dev"
    }
  ];
  

  return (
    <div className='section mt-6'>
      <div className='banner mt-4 bg-grey text-green font-bold'>
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