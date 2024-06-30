import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slideshow.css";

export default function Slideshow({ media }) {
  // Ensure media is an array
  if (!Array.isArray(media)) {
    media = [media];
  }

  const hasVideo = media.some((item) => item.type === "video");

  return (
    <div className="img__slideshow">
      <Carousel controls={false} indicators={hasVideo} slide={true}>
        {media.map((item, index) => (
          <Carousel.Item
            interval={item.type === "video" ? 8000 : 3000}
            key={index}
          >
            {item.type === "image" && (
              <img className="slide__img" src={item.src} alt={`img-${index}`} />
            )}

            {item.type === "video" && (
              <video className="slide__img slide__video" autoPlay loop muted>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
