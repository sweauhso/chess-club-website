import React from 'react'
import Carousel from "./ui/Carousel";


const Announcements = () => {
    // Sample data for carousel items
  const carouselData = [
    {
      id: 1,
      imageUrl: null,
      title: 'Chess Tournament',
      description: 'Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels! Join the chess tournament this summer. A challenge for all levels!',
      date: 'July 1, 2024',
      link: 'https://example.com',
    },
    {
      id: 2,
      imageUrl: null,
      title: 'Chess Workshop',
      description: 'Attend our chess workshop for beginners and experts alike!',
      date: 'August 15, 2024',
      link: 'https://example.com',
    },
    {
      id: 3,
      imageUrl: null,
      title: 'Chess Club Meetup',
      description: 'Meet with fellow chess enthusiasts for casual games and learning.',
      date: 'September 10, 2024',
      link: 'https://example.com',
    },
  ];

  return (
    <div className='section mt-6 mb-14'>
        <div className='banner bg-grey text-green font-bold m-10 mb-16'>
            Announcements
        </div>
        <Carousel data={carouselData} duration={5000} />
    </div>
  )
}

export default Announcements