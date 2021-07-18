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
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
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
      title: "TensorflowJS", //: Webcam Inputs, Training, and Prediction All in Browser",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "2.1B Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=nMyUF5lCZDs",
      previewUrl: "https://img.youtube.com/vi/nMyUF5lCZDs/sddefault.jpg",
      title: "SAR Game", // - A Car Racing Game using Python (PyGame)",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "124K Views",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=KOlgOGyCChg",
      previewUrl: "https://img.youtube.com/vi/KOlgOGyCChg/sddefault.jpg",
      title: "First Person Shooter (FPS) Game", // on Unity3D and Blender",
      photoUrl:
        "https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo",
      user: "Abhiram Satpute",
      description: "7.1M Views",
    },
    /////////////////////////////
  ];

  //   console.log(prototypeData[0].previewUrl);

  return (
    <div className="videos">
      {prototypeData.slice(0, 12).map((prototypeDatum) => {
        return (
          <VideoComponent
            videoUrl={prototypeDatum?.videoUrl}
            previewUrl={prototypeDatum?.previewUrl}
            title={prototypeDatum?.title}
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
