import React, { useEffect, useRef, useState } from 'react';
// import './App.css';
import vasesSVG from '../Assests/vasesSVG.png'
import bowlSVG from '../Assests/bowlSVG.png'
import platesSVG from '../Assests/platesSVG.png'
import '../App.css'; // Make sure ye import ho
function Product() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [visible, setVisible] = useState({
    c1: false,
    c2: false,
    c3: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Observed:', entry);
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible((prev) => {
              if (!prev[id]) {
                return { ...prev, [id]: true };
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const refs = [ref1, ref2, ref3];
    refs.forEach((ref, i) => {
      const key = `c${i + 1}`;
      if (ref.current) {
        ref.current.dataset.id = key;
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {

        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [visible]);

  return (
    <div>
      <div className='catgry'>
        <p className='vt'>
          Hand Craft Pottery

        </p>
        <p className='pct'>
          Product Categories
        </p>
        <div className='txt'>
          <h1 className='pro'>
            Porcelain
          </h1>
          <span className='dec'>
            &
          </span>
          <h1 className='pot'>
            Pottery
          </h1>
        </div>
        <div className="container">

          <div ref={ref1} className={`circle circle1 ${visible.c1 ? 'animate' : ''}`}>
            <img src={vasesSVG} alt='vs' />
            <p className='ct'>Vases</p>
          </div>
          <div ref={ref2} className={`circle circle2 ${visible.c2 ? 'animate' : ''}`}>
            <img src={bowlSVG} alt='bl' />
            <p className='ct'>Mugs</p>
          </div>

          <div ref={ref3} className={`circle circle3 ${visible.c3 ? 'animate' : ''}`}>
            <img src={platesSVG} alt='bl' />
            <p className='ct'>Plates</p>
          </div>
        </div>
        <div className='handcraft'>

          <div className='hgp'>
            <h1 className='history-title1'>
              Hand Grafted
              Pottery since 1990
            </h1>
            <p className='history-caption1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>
          <div className='wpp'>
            <h1 className='history-title2'>
              We Provide Premium
              Pottery Produts
            </h1>
            <p className='history-caption2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
