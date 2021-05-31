import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";

const Gallery = ({ resumeUrl }) => {
  const [imageIds, setImageIds] = useState();
  const [resume, setResume] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
    axios
      .post("/api/resume", { email: localStorage.getItem("userEmail") })
      .then((data) => {
        console.log(data);
        if (data && data.data) {
          setResume(data.data.resumeUrl);
        }
      });
  }, []);
  return (
    <div>
      <h1 className="title">Cloudinary Gallery</h1>
      <div className="gallery">
        <img src={resumeUrl ? resumeUrl : resume} />
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={imageId}
              width="100"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
