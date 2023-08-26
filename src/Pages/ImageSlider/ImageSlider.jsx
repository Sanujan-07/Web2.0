import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import SliderData from "./Sliderdataa.json";
import "./Slider.css";

export default function ImageSlider({ title }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % SliderData.slides.length);
  };

  const prevSlide = () => {
    setSlide(
      (prevSlide) =>
        (prevSlide - 1 + SliderData.slides.length) % SliderData.slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section>
      <div className="carousel">
        <div id="intro">
          <div className="carousel-container">
            <div className="carousel-content">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {SliderData.slides.map((item, idx) => {
          if (item.type === "image") {
            return (
              <img
                src={process.env.PUBLIC_URL + item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          } else if (item.type === "video") {
            return (
              <video
                autoPlay
                muted
                loop
                src={process.env.PUBLIC_URL + item.src}
                poster={process.env.PUBLIC_URL + item.poster}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
                controls
              />
            );
          }
          return null; // Handle other types or unsupported types if needed
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {SliderData.slides.map((_, idx) => (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </section>
  );
}
