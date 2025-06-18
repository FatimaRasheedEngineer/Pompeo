import React from 'react';
import heropic from '../Assests/heropic.png'

function Hero() {
  return (
    <div>
    <div className='bgr'>
        <div className='herosection '> 
            <div className='caption'>
              <p className='toptext'>Pompeo POttery</p>
              <h1 className='centertext'>Unique</h1> 
              <h1 className='centertext3'>Porcelain <span  id='deco'>& </span></h1>
              <h1 className='centertext2'>Stone Collection</h1>
               <p className='lowertext'>Unique & modern pottery made by our master in porcelain & stones
</p>
 <button className='herobtn'>SHOP COLLECTION</button>
            </div>
            <div className='heroimg'>
                <img src={heropic} alt='hero'/>
            </div>
        </div>
        </div>  









    </div>
  )
}

export default Hero
