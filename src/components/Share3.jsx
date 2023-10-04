import React from 'react'
import StoryImage from '../assests/Story_Image.jpg'


const Share3 = () => {

    const handleShare = async () => {


        // Load the image and convert it to a Blob
        const response = await fetch(StoryImage);
        const blob = await response.blob();

        const filesArray = [
            new File([blob], 'Story_Image.jpg', { type: 'image/jpeg' }),
        ]

        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
            navigator.share({
                files: filesArray,
                title: 'Web Share API',
                text: 'Web Share API in ReactJS Example in Github',
                url: "https://github.com/ritwik-satpati/web-share-api-in-reactjs",
            })
                .then(() => console.log('Share was successful.'))
                .catch((error) => console.log('Sharing failed', error));
        } else {
            console.log(`Your system doesn't support sharing files.`);
            if (navigator.share) {
                navigator.share({
                    title: 'Web Share API',
                    text: 'Web Share API in ReactJS Example in Github',
                    url: "https://github.com/ritwik-satpati/web-share-api-in-reactjs",
                })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            }
        }

    }

    return (
        <div className='h-[100vh] w-full flex items-center justify-center'>
            <div className='h-[40px] min-w-[50px] flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 font-Roboto text-center cursor-pointer py-2 px-5 rounded-sm' onClick={handleShare}>
                Share
            </div>
        </div>
    )
}

export default Share3