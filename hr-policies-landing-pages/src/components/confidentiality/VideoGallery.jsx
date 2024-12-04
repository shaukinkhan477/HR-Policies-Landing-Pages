import React from "react";

const videos = [
  {
    title: "The Importance of Confidentiality in the Workplace",
    thumbnail:
      "https://tse2.mm.bing.net/th?id=OIP.xBIP8fkWheyGX3bo1lzAbwHaE8&pid=Api&P=0&h=180", // Replace with actual thumbnail URL
    videoUrl: "https://www.youtube.com/watch?v=mALgOOA_Tk4", // Replace with actual video URL
  },
  {
    title: "Confidentiality Policy Explained: Your Role and Responsibilities",
    thumbnail:
      "https://tse3.mm.bing.net/th?id=OIP.aQzO1bRzFyrk_MGKkhjWRwHaFF&pid=Api&P=0&h=180", // Replace with actual thumbnail URL
    videoUrl: "https://www.youtube.com/watch?v=Y7QSdIKca88", // Replace with actual video URL
  },
  {
    title: "Protecting Confidential Information: Best Practice",
    thumbnail:
      "https://tse4.mm.bing.net/th?id=OIP.XZmHN0IYkhi1zIaoRI-j2AHaEK&pid=Api&P=0&h=180", // Replace with actual thumbnail URL
    videoUrl: "https://www.youtube.com/watch?v=-ygLXmFFtJY", // Replace with actual video URL
  },
  {
    title: "Confidentiality in Action: Practical Tips for Employees",
    thumbnail:
      "https://tse4.mm.bing.net/th?id=OIP.lJven-U2SekU7Z1pW4nTowHaEa&pid=Api&P=0&h=180", // Replace with actual thumbnail URL
    videoUrl: "https://www.youtube.com/watch?v=yLFTB3c5ino", // Replace with actual video URL
  },
];

const VideoGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl  font-sans font-bold text-center mb-10">
        Training and Awareness
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-lg border border-gray-200 "
          >
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm2-7.5l-4 2.5V8l4 2.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
            <p className="mt-4 text-center  text-gray-800 font-sans px-4 mb-2">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
