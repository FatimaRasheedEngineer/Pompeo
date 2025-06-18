
import React, { useEffect, useRef, useState } from 'react';
import orange from "../Assests/orange.png";

function Featured2() {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target); // Sirf ek baar trigger
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
    <div ref={wrapperRef} style={{ minHeight: '1px', marginTop: '100px' }}>
      {show && (
        <div className="featured2">
          <div className="details2">
            <h1 className='sale-title'>Orange Pottery</h1>
            <p>
             Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.
            </p>
            <button>
              <a href="link">View Details</a>
            </button>
          </div>

          <div className="photo2">
            <div className="gbg2"></div>
            <div className="pic2">
              <img src={orange} alt="vase" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Featured2;
