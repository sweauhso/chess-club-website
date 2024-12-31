
interface AnnouncementTileProps {
    title: string;
    description: string;
    date: string;
    link: string;
  }
  
  const AnnouncementTile = ({ title, description, date, link }: AnnouncementTileProps) => {
    return (
      <div className="bg-grey ml:py-24 shadow-md mb-2 p-12 w-full rounded-2xl flex flex-col ms:flex-row items-center">
        <div className="mt-6 ms:mt-0 w-full ml:pr-10">
          <h1 className="font-black text-2xl ms:text-3xl">{title}</h1>
          <p className="mt-4 text-left">{description}</p>
          <p className="mt-2 italic"><span className="font-bold">Date:</span> {date}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className=" bg-green mt-10 border border-black-ish font-black hover:scale-105 transition-transform duration-500 ms:text-xl rounded-full px-4 py-1 flex items-center">
              Check it out
            </button>
          </a>
        </div>
      </div>
    );
  };
  

export default AnnouncementTile;