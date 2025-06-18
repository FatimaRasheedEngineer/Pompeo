
import React, { useEffect, useRef, useState } from 'react';
import blackgold from "../Assests/blakgold.png";

function Featured() {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ minHeight: '1px' }}>
      {show && (
        <div className="featured1">
          <p className='vtr'>Hand Craft Pottery</p>
          <div className="photo">
            <div className="gbg1"></div>
            <div className="pic">
              <img src={blackgold} alt="vase" />
            </div>
          </div>
          <div className="details">
            <h1 className='sale-title'>Gold & Black Pottery</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
            </p>
            <button>
              <a href="link">View Details</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Featured;
