'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

// Define the type for an announcement
interface Announcement {
  _id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

// Define the type for a contact
interface Contact {
  _id: string;
  name: string;
  email: string;
  link: string;
}

const Page = () => {
  // State for Create Announcements form
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementDescription, setAnnouncementDescription] = useState("");
  const [announcementDate, setAnnouncementDate] = useState("");
  const [announcementLink, setAnnouncementLink] = useState("");

  // State for Create Contact form
  const [contactFullName, setContactFullName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactLink, setContactLink] = useState("");

  // State for Delete Announcements and Delete Contact
  const [selectedAnnouncement, setSelectedAnnouncement] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Fetch announcements and contacts for deletion
  useEffect(() => {
    // Fetch announcements
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements");
        console.log('Fetched Anns: ', response.data); // for debugging
        setAnnouncements(response.data); // assuming response.data is an array
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    // Fetch contacts
    const fetchContacts = async () => {
      try {
        const response = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/contact");
        setContacts(response.data); // assuming response.data is an array
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchAnnouncements();
    fetchContacts();
  }, []);

  // Handler for Create Announcement
  const handleCreateAnnouncement = async () => {
    try {
      const response = await axios.post("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements", {
        title: announcementTitle,
        description: announcementDescription,
        date: announcementDate,
        link: announcementLink,
      });
      alert("Announcement created successfully!");

      // Update the announcements list after successful submission
      const updatedAnnouncements = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements");
      setAnnouncements(updatedAnnouncements.data);

      // Clear the form fields after successful submission
      setAnnouncementTitle("");
      setAnnouncementDescription("");
      setAnnouncementDate("");
      setAnnouncementLink("");
    } catch (error) {
      console.error("Error creating announcement:", error);
      alert("Error creating announcement.");
    }
  };

  // Handler for Create Contact
  const handleCreateContact = async () => {
    try {
      const response = await axios.post("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/contact", {
        name: contactFullName,
        email: contactEmail,
        link: contactLink,
      });
      alert("Contact created successfully!");

      // Update the contacts list after successful submission
      const updatedContacts = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/contact");
      setContacts(updatedContacts.data);

      // Clear the form fields after successful submission
      setContactFullName("");
      setContactEmail("");
      setContactLink("");
    } catch (error) {
      console.error("Error creating contact:", error);
      alert("Error creating contact.");
    }
  };

  // Handler for Delete Announcement
  const handleDeleteAnnouncement = async () => {
    try {
      const response = await axios.delete(
        `https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements/${selectedAnnouncement}`
      );
      alert("Announcement deleted successfully!");
      // Optionally, re-fetch announcements after deletion to update the list
      const updatedAnnouncements = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/announcements");
      setAnnouncements(updatedAnnouncements.data);
    } catch (error) {
      console.error("Error deleting announcement:", error);
      alert("Error deleting announcement.");
    }
  };

  // Handler for Delete Contact
  const handleDeleteContact = async () => {
    try {
      const response = await axios.delete(`https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/contact/${selectedContact}`);
      alert("Contact deleted successfully!");
      // Optionally, re-fetch contacts after deletion to update the list
      const updatedContacts = await axios.get("https://chess-club-backend-bd6f865484d6.herokuapp.com/api/v1/contact");
      setContacts(updatedContacts.data);
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Error deleting contact.");
    }
  };

  return (
    <main className="flex flex-col items-center bg-dark-bg w-full">
      <div className="banner bg-medium-bg text-green font-bold mb-16">
        Admin Page
      </div>
      <Link href="/">
        <button className="bg-green mb-16 text-black font-bold py-2 px-4 rounded-md hover:bg-green-700">
          Back to Home
        </button>
      </Link>

      {/* Create Announcement Section */}
      <div className="section mb-16">
        <div className="text-xl text-green font-bold mb-4">
          Create Announcements
        </div>
        <div className="flex flex-col justify-center items-center bg-light-grey gap-8 text-dark-sub-text">
          <div>
            <h1>Title</h1>
            <input
              type="text"
              placeholder="Enter title here..."
              value={announcementTitle}
              onChange={(e) => setAnnouncementTitle(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <div>
            <h1>Description</h1>
            <input
              type="text"
              placeholder="Enter description here..."
              value={announcementDescription}
              onChange={(e) => setAnnouncementDescription(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <div>
            <h1>Date</h1>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={announcementDate}
              onChange={(e) => setAnnouncementDate(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <div>
            <h1>Link</h1>
            <input
              type="text"
              placeholder="Enter link here..."
              value={announcementLink}
              onChange={(e) => setAnnouncementLink(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <button
            onClick={handleCreateAnnouncement}
            className="bg-green text-black font-bold py-2 px-4 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Delete Announcement Section */}
      <div className="section mb-16">
        <div className="text-xl text-green font-bold">Delete Announcements</div>
        <div className="flex flex-col justify-center bg-light-grey p-6 rounded-lg gap-4">
          <h1 className="font-medium mb-2 text-dark-sub-text">Select Announcement</h1>
          <select
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={selectedAnnouncement}
            onChange={(e) => setSelectedAnnouncement(e.target.value)}
          >
            <option value="">Select an announcement</option>
            {announcements.map((announcement) => (
              <option key={announcement._id} value={announcement._id}>
                {announcement.title}
              </option>
            ))}
          </select>
          <button
            onClick={handleDeleteAnnouncement}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Create Contact Section */}
      <div className="section mb-16">
        <div className="text-xl text-green font-bold mb-4">
          Create New Contact
        </div>
        <div className="flex flex-col justify-center items-center bg-light-grey gap-8 text-dark-sub-text">
          <div>
            <h1>Full Name</h1>
            <input
              type="text"
              placeholder="Enter name here..."
              value={contactFullName}
              onChange={(e) => setContactFullName(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <div>
            <h1>Email</h1>
            <input
              type="text"
              placeholder="Enter email here..."
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <div>
            <h1>Link</h1>
            <input
              type="text"
              placeholder="Enter link here..."
              value={contactLink}
              onChange={(e) => setContactLink(e.target.value)}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>
          <button
            onClick={handleCreateContact}
            className="bg-green text-black font-bold py-2 px-4 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Delete Contact Section */}
      <div className="section mb-16">
        <div className="text-xl text-green font-bold">Delete Contact</div>
        <div className="flex flex-col justify-center bg-light-grey p-6 rounded-lg gap-4">
          <h1 className="font-medium mb-2 text-dark-sub-text">Select Contact</h1>
          <select
            className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={selectedContact}
            onChange={(e) => setSelectedContact(e.target.value)}
          >
            <option value="">Select a contact</option>
            {contacts.map((contact) => (
              <option key={contact._id} value={contact._id}>
                {contact.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleDeleteContact}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}

export default Page;