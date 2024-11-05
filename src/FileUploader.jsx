import React, { useState } from 'react'

export default function FileUploader() {
    const [fileVideo, setFileVideo] = useState('');
    const [previewVideo, setPreviewVideo] = useState('');

    function videoHandler(e) {
        const file = e.target.files[0];
        if (file) {
            setFileVideo(file);
            const videoUrl = URL.createObjectURL(file);
            setPreviewVideo(videoUrl);
        }
    };
return (
    <div>
        <h1>UPLOAD VIDEO</h1>
        <input type="file" accept="video/*" onChange={videoHandler} />
        {previewVideo &&(
            <video width="500" controls>
                <source src={previewVideo} type='video/mp4' />
            </video>
       ) }
    </div>
  )
}
