interface AnnouncementTileProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

const AnnouncementTile = ({ title, description, date, link }: AnnouncementTileProps) => {
  return (
    <div className="bg-medium-bg shadow-md mb-2 p-12 w-full rounded-2xl flex flex-col items-center text-center">
      <div className="mt-6 w-full">
        <h1 className="font-semibold text-dark-sub-text tracking-wide text-lg sm:text-xl md:text-2xl">{title}</h1>
        <p className="mt-4 text-dark-text">{description}</p>
        <p className="mt-2 italic text-dark-text"><span className="font-bold">Date:</span> {date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-green mt-10 border border-black-ish font-black hover:scale-105 transition-transform duration-500 sm:text-xl rounded-full px-4 py-1">
            Check it out
          </button>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementTile;