import React from "react";
import VideoComponent from "./VideoComponent";
import "./Videos.css";

function Videos() {
  //add database fetching, then do video component mapping!

  const prototypeData = [
    {
      videoUrl: "https://abhiram11.github.io",
      previewUrl: "https://abhiram11.github.io/images/name-sketch-crop.gif",
      title: "My Portfolio Website",
      photoUrl:
        "https://avatars.githubusercontent.com/u/20269286?s=400&u=bce2509c4f3fd8766d14e52755dfbdf358705236&v=4",
      user: "Abhiram Satpute",
      description: "600K Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=HXC1u8Jvjc4",
      previewUrl: "https://img.youtube.com/vi/HXC1u8Jvjc4/sddefault.jpg",
      title: "Netflix Clone in React!",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "370K Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=jaBoEC1lNYQ",
      previewUrl: "https://img.youtube.com/vi/jaBoEC1lNYQ/sddefault.jpg",
      title: "Spotify Clone in React!",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "419K Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=BGfSsugl-_8",
      previewUrl: "https://img.youtube.com/vi/BGfSsugl-_8/sddefault.jpg",
      title:
        "TensorflowJS: Webcam Inputs, Training, and Prediction All in Browser",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "2.1B Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=nMyUF5lCZDs",
      previewUrl: "https://img.youtube.com/vi/nMyUF5lCZDs/sddefault.jpg",
      title: "SAR - A Car Racing Game using Python (PyGame)",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "124K Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=KOlgOGyCChg",
      previewUrl: "https://img.youtube.com/vi/KOlgOGyCChg/sddefault.jpg",
      title: "First Person Shooter Game on Unity3D and Blender",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "7.1M Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=yRy7Z8eWq2c",
      previewUrl: "https://img.youtube.com/vi/yRy7Z8eWq2c/sddefault.jpg",
      title: "TFLite Object Detection in Android Application",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "3.2T Views",
    },
    /////////////////////////////
    {
      videoUrl: "https://github.com/abhiram11",
      previewUrl:
        "https://1000logos.net/wp-content/uploads/2018/08/GitHub-cat-logo.jpg",
      title: "My GitHub Profile",
      photoUrl:
        "https://avatars.githubusercontent.com/u/20269286?s=400&u=bce2509c4f3fd8766d14e52755dfbdf358705236&v=4",
      user: "Abhiram Satpute",
      description: "3.2T Views",
    },
    {
      videoUrl: "https://in.linkedin.com/in/abhiram-satpute",
      previewUrl:
        "https://www.turnkeytec.com/wp-content/uploads/2018/01/CRM-and-Social-Selling-Connect-to-Opportunity-with-LinkedIn.jpg",
      title: "My LinkedIn Profile",
      photoUrl:
        "data:image/jpeg;base64,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",
      user: "Abhiram Satpute",
      description: "3.2T Views",
    },
  ];

  //   console.log(prototypeData[0].previewUrl);

  return (
    <div className="videos">
      {prototypeData.slice(0, 12).map((prototypeDatum) => {
        return (
          <VideoComponent
            videoUrl={prototypeDatum?.videoUrl}
            previewUrl={prototypeDatum?.previewUrl}
            title={
              prototypeDatum?.title.length <= 25
                ? `${prototypeDatum?.title}`
                : `${prototypeDatum?.title.substring(0, 25)}...`
            }
            photoUrl={prototypeDatum?.photoUrl}
            user={prototypeDatum?.user}
            description={prototypeDatum?.description}
          />
        );
      })}
      {/* 
      <VideoComponent
        previewUrl={prototypeData[0].previewUrl}
        title={prototypeData[0].title}
        photoUrl={prototypeData[0].photoUrl}
        user={prototypeData[0].user}
        description={prototypeData[0].description}
      /> */}
      {/* <VideoComponent
        previewUrl=""
        title=""
        photoUrl=""
        user=""
        description=""
      />{" "} */}
    </div>
  );
}

export default Videos;
