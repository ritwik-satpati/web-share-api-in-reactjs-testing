// npm install react react-dom
// npm install @capacitor/core
// npx cap sync                 ==> Not Installing

import React from 'react';
import { Share } from '@capacitor/share';

const Share2 = () => {
  
  const handleShare = async () => {
    await Share.share({
      
      title: 'Web Share API',
      text: 'Web Share API in ReactJS Example in Github',
      url: "https://github.com/ritwik-satpati/web-share-api-in-reactjs",
      dialogTitle: 'Share with friends'
    });
  };

  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
      <div className='h-[40px] min-w-[50px] flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 font-Roboto text-center cursor-pointer py-2 px-5 rounded-sm' onClick={handleShare}>
        Share
      </div>
    </div>
  );
};

export default Share2;
