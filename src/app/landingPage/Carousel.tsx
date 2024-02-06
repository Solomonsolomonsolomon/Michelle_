"use client";
import imageSlide from "./data";
import styles from "./Carousel.module.css";

import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../component/Button";

interface caruosel {
  parentWidth: number;
}
const bgImageSlide = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const Carousel: React.FC<caruosel> = ({ parentWidth }) => {
  const timerRef: any = useRef(null);
  const [currentState, setCurrentState] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentState === 0;
    const newIndex = isFirstSlide ? imageSlide.length - 1 : currentState - 1;
    setCurrentState(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentState === imageSlide.length - 1;
    const newIndex = isLastSlide ? 0 : currentState + 1;
    setCurrentState(newIndex);
  }, [currentState, imageSlide]);

  const getSlideStylesWithBackground = (slideIndex: number) => ({
    ...bgImageSlide,
    backgroundImage: `url(${imageSlide[slideIndex].url}) `,
    backgroundColor:
      "linear-gradient(0deg, rgba(45, 100, 127, 0.733), rgba(45, 100, 127, 0.733))",
    width: `100%`,
    transform: `translateX(${-(currentState * parentWidth)}%)`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: `${parentWidth * imageSlide.length}%`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className={styles.container1}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={styles.rightArrowStyles}>
          ❱
        </div>
      </div>

      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {imageSlide.map((_, slideIndex) => (
            <div
              className={styles.carousel}
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              <div className={styles.contentWrapper}>
                <div className={styles.contentContainer}>
                  <h1 className={styles.title}>
                    {imageSlide[currentState].text}
                  </h1>
                  <div className={styles.button}>
                    <Button width={150}>Order Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
