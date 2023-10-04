import React from 'react'
import StoryImage from '../assests/Story_Image.jpg'


const Share = () => {

    const handleShare = async () => {

        console.log("Share button clicked!")

        const title = "Web Share API"
        const text = "Web Share API in ReactJS Example in Github"
        const url = "https://github.com/ritwik-satpati/web-share-api-in-reactjs"

        // const textWithUrl = `${text}: ${url}`
        // console.log(textWithUrl)

        // Load the image and convert it to a Blob
        const response = await fetch(StoryImage);
        const blob = await response.blob();

        const files = [
            new File([blob], 'Story_Image.jpg', { type: 'image/jpeg' }),
        ]

        // Setting Share-Dataset with Files 
        const shareData = {
            title: title,
            text: text,
            url: url,
            files: files,
        }
        // Sharing the Share-Dataset with Files

        await navigator.share(shareData)
        console.log("Shared without Files!")
    }


    return (
        <div className='h-[100vh] w-full flex items-center justify-center'>
            <div className='h-[40px] min-w-[50px] flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 font-Roboto text-center cursor-pointer py-2 px-5 rounded-sm' onClick={handleShare}>
                Share
            </div>
        </div>
    )

}

export default Share