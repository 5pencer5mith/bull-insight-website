"use client";
// Hooks and utility
import React, { useCallback } from "react";

// Components
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Styles
import styles from "./slider.module.css";

export default function Slider({ imageData }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {imageData.map((image, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.slideImage}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </div>
              {image.caption && (
                <div className={styles.slideCaption}>
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.slideButtons}>
        <button className="embla__prev" onClick={scrollPrev}>
          Back
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
};
