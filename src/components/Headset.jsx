import React from 'react';
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

const Headset = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2 className='text-3xl font-bold mb-6' data-aos="fade-down" data-aos-offset="300">Mixed Reality Headsets</h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div className='relative' data-aos="zoom-in" data-aos-offset="300" data-aos-delay='1000'>
            <img src={Headset1} alt=''/>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>Introducing the MetaVision Pro, the most advanced metaverse headset that will redefine the way you perceive and interact with digital realms.</p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos="zoom-in" data-aos-offset="300" data-aos-delay='1300'>
            <img src={Headset2} alt=''/>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p>Welcome to the future of connected living with the AIoT-Link Pro, the cutting-edge AIoT headset that enhances your daily life in ways you've never imagined.</p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos="zoom-in" data-aos-offset="300" data-aos-delay='1600'>
            <img src={Headset3} alt=''/>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>Step into a world where reality and imagination converge seamlessly with the HoloLens Infinity, Microsoft's latest innovation in mixed reality technology.</p>
            </div>
          </div>
          {/* item */}
          <div className='relative' data-aos="zoom-in" data-aos-offset="300" data-aos-delay='1900'>
            <img src={Headset4} alt=''/>
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>TpCast</h4>
              <p>Experience VR like never before with the TpCast Pro, the ultimate solution to cut the cord and liberate your virtual reality adventures. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headset