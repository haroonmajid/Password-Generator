import React, { useState } from 'react';

export default function VideoUploader() {
  const [videoFile, setVideoFile] = useState('');
  const [videoPreview, setVideoPreview] = useState('');

  function handleVideoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      const videoUrl = URL.createObjectURL(file);
      setVideoPreview(videoUrl);
    }
  };

  return (
    <div>
      <h2 className='text-[50px]'>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      {videoPreview && (
        <video width="400" controls>
          <source src={videoPreview} type="video/mp4" />
        </video>
      )}
     </div>
  );
};


