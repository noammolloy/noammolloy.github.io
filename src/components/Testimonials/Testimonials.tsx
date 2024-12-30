import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);


  function clickLeftArrow() {
  if (index > 0) {
    setIndex(index - 1);
  }
  }

  function clickRightArrow() {
    const track = trackRef.current;
    if (track && index < track.childElementCount - 1){
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Update the transform to match the current index
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (leftArrowRef.current){
      const leftArrow = leftArrowRef.current;
      if (index <= 0){
        leftArrow.classList.add('disabled');
      } else {
        leftArrow.classList.remove('disabled');
      }

    }
    
    if (rightArrowRef.current){
      const rightArrow = rightArrowRef.current;
      if (track && index >= track.childElementCount - 1) {
        rightArrow.classList.add('disabled');
      } else {
        rightArrow.classList.remove('disabled');
      }
    }

  }, [index]);


    return (
      <Container>
        <h2>Testimonials</h2>
        <h3>People I've worked with have said some nice things...</h3>
        
        <div className="testimonial-carousel">
          <button className="arrow left-arrow"ref={leftArrowRef} onClick={clickLeftArrow}>&lt;</button>
          <div className="carousel-track" ref={trackRef}>

            <div className="testimonial">
              <p>
                "Beyond his technical abilities, Noam possesses a remarkable talent and innate
                capabilities that set him apart. He consistently approached challenges, showcasing
                his ability to remain resourceful in various situations."
              </p>
              <h4>Tom Lavi</h4>
              <h5>CEO, SueApp LTD</h5>
            </div>
            <div className="testimonial">
              <p>
                "Noam has a solid, pragmatic approach to these projects that I respect, and I appreciate 
                the way his questions and thoughts help me focus - so I just wanted to acknowledge that 
                and make sure everyone understands the regard I have for his skills, abilities, and initiative."
              </p>
              <h4>Stephen van Ness</h4>
              <h5>Associate Director, Brandeis Office of Research Administration</h5>
            </div>
            {/* <div className="testimonial">
              <p>"Exceptional experience from start to finish."</p>
              <h4>- Client C</h4>
            </div> */}

          </div>
          <button className="arrow right-arrow" ref={rightArrowRef} onClick={clickRightArrow}>&gt;</button>
        </div>
        
      </Container>
    );
  }