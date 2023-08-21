import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Silderdata from "./Sliderdataa.json";
import "./Slider.css";
export default function ImageSlider() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === Silderdata.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? Silderdata.slides.length - 1 : slide - 1);
  };

  return (
    <section>
      <div className="carousel">
        <div id="intro">
          <div className="carousel-container">
            <div className="carousel-content">
              <h1>IYKONS</h1>
            </div>
          </div>
        </div>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {Silderdata.slides.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}

        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {Silderdata.slides.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
}
