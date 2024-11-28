import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" 
        src="/452786_Drone Landscape_Iceland_1920x1080.mp4"  
        autoPlay = {true} 
        loop 
        muted 
        playsInline
      ></video>

      {/* Content Overlay */}
      <div className="h-screen pt-8 flex justify-between flex-col w-full">
        <img 
          className="w-16 ml-8 relative" 
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" 
          alt="" 
        />
        <div className="bg-white pb-8 py-4 px-4 relative z-10">
          <h2 className="text-[30px] font-semibold">Get Started with Uber</h2>
          <Link 
            to="/login" 
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
