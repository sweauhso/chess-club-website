"use client";

import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col items-center bg-white w-full">
      <div className='banner bg-grey text-green font-bold mb-16'>
            Admin Page
        </div>
        <Link href="/">
      <button className="bg-green mb-16 text-white font-bold py-2 px-4 rounded-md">
        Back to Home
      </button>
    </Link>
      <div className='section mb-16'>
        <div className='text-xl text-green font-bold mb-4'>
          Create Announcements
        </div>
        <div className="flex flex-col justify-center items-centre bg-light-grey gap-8 ">
          <div>
          <h1>Title</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <div>
          <h1>Description</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <div>
          <h1>Date</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <div>
          <h1>Link</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <button className="bg-green text-white font-bold py-2 px-4 rounded-md">
            Submit
          </button>
        </div>
      </div>
      <div className='section mb-16'>
        <div className='text-xl text-green font-bold'>
          Delete Announcements
        </div>
        <div className="flex flex-col justify-center bg-light-grey p-6 rounded-lg gap-4">
            <h1 className="font-medium mb-2">Select Announcement</h1>
            <select className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500">
              <option value="">Announcement 1</option>
              <option value="">Announcement 2</option>
              <option value="">Announcement 3</option>
            </select>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md">
              Delete
            </button>
          </div>
      </div>
      <div className='section mb-16'>
        <div className='text-xl text-green font-bold mb-4'>
            Create New Contact
        </div>
        <div className="flex flex-col justify-center items-centre bg-light-grey gap-8 ">
        <div>
          <h1>Full Name</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <div>
          <h1>Email</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <div>
          <h1>Link</h1>
          <input
            type="text"
            placeholder="Enter text here..."
            className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          </div>
          <button className="bg-green text-white font-bold py-2 px-4 rounded-md">
            Submit
          </button>
          </div>
      </div>
      <div className='section mb-16'>
        <div className='text-xl text-green font-bold'>
          Delete Contact
        </div>
        <div className="flex flex-col justify-center bg-light-grey p-6 rounded-lg gap-4">
            <h1 className="font-medium mb-2">Select Contact</h1>
            <select className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500">
              <option value="">Contact 1</option>
              <option value="">Contact 2</option>
              <option value="">Contact 3</option>
            </select>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md">
              Delete
            </button>
          </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full mb-8'>
        <h1>Please contact if there are any issues</h1>
        <h1>Joshua Geng</h1>
        <h1>swegengjoshua@gmail.com</h1>
        <h1>403-990-1077</h1>
      </div>
    </main>
  )
}

export default page