import Head from 'next/head';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import mouse  from '../assets/mouse.png';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/Navbar'
import {AiOutlineArrowRight } from 'react-icons/ai';
import { FiDribbble } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsBehance } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function Project () {
  useEffect (() => {
    AOS.init({duration: 1000});
  },[])

  // const refA = useRef(null);
  // const refB = useRef(null);
  // const refC = useRef(null);

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.75,
    rootMargin: "200px 0px 0px -250px",
  });

  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.7,
    rootMargin: "200px 0px 0px -250px",
  });

  const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px -150px 0px",
  });

  const { ref:ref, inView:visible } = useInView({
    /* Optional options */
    threshold: 0.1,
    rootMargin: '500px 0px -350px 0px',
    // triggerOnce: true
  });
  return (
    <div className={`section ${!visible ? 'black':'br_parallex'} ${visible3 ? 'bg_parallex' : 'black'} `}  >
      <Navbar />
      <div 
  
      className='w-full h-full flex flex-col justify-center'>
        <div className='text-[#8CB9B4] '>
          <h1 data-aos="fade-right" className='pl-[150px]'>User</h1>
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='text-center'>Centered</h1>
          <h1 data-aos="fade-left" className='text-right pr-[150px]'>Design</h1>
        </div>
            <div className=' relative top-[-150px] left-[50px] w-[140px] h-[140px] view__more'>
            <Image src={mouse} alt="scroll down" />
          </div>
      </div><br /><br />
      <div ref={ref}
        className={`text-black w-full h-[100vh] flex flex-col justify-center  `}>
          <div ref={ref1} className=' h-[80vh] flex flex-col justify-center' >
          <h1 className={`ml-[150px] ${visible1 ? 'text-pop-up-right' : ''}`}>
              {visible1 ? 'Ux' : 'UI'}
            </h1>
            <h1 className={`text-center ${visible1 ? 'text-pop-up-right' : ''}`}>
              Designer
            </h1>
          </div>
      </div>
      <div  data-aos="fade-right" className='h-[50vh] flex flex-col justify-center text-[green] w-full px-[150px] text-center bg-[black]'>
        <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='text-[16px] text-white'>I am a UX designer with a background in human- computer interaction. 
          I love creating intuitive and user-friendly designs that solve real problems for users. 
          With my expertise in user research, wireframing and prototyping, 
          I am able to quickly iterate on ideas and create high fidelity mockups.
        </p><br/>
        <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='text-[16px] text-white'>I also have experience conducting usability testing to validate my designs and ensure 
          that they meet the needs of the users. With a strong eye for visual designs,
          I’m able to create visually appealing interfaces that are both functional and aesthetically pleasing. 
        </p>
        <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='text-[#8CB9B4] text-[24px] text-center mt-[24px] text-[24px]' >
        Rosemary Nwosu-Ihueze</p>
      </div>
      <div ref={ref3} className={` flex flex-col justify-center h-[100vh] bg_parralex text-black `}>
        <div ref={ref2} className={` flex flex-col justify-center h-[40vh]`}>
          <h1 className={`pl-[150px] ${visible2 ? 'text-pop-up-right' : ''}`}>Selected</h1>
          <h1 className={`${visible2 ? 'text-pop-up-right' : ''} text-center`}>Projects</h1>
        </div>
       
      </div>
      <div className='flex items-center justify-between  h-[100vh]'>

      
      <div  className=' text-black ml-[150px] w-[556px]'>
        <h3 data-aos="fade-right" className='text-[#8CB9B4] text-[56px]  '>UX DESIGN</h3>
        <span data-aos="fade-right" className='border-t '>
          <p>CHOWAI</p>
          <AiOutlineArrowRight />
        </span>
        <span data-aos="fade-right">
          <p>TUTORBOOST</p>
          <AiOutlineArrowRight />
        </span>
          <span data-aos="fade-right">
          <p>MEDICCI</p>
          <AiOutlineArrowRight />
        </span>
          <span data-aos="fade-right">
          <p>NFTLOAN</p>
          <AiOutlineArrowRight />
        </span>
          <span data-aos="fade-right">
            <p>JAZZHUT</p>
            <AiOutlineArrowRight />
          </span>
        </div>
        <div data-aos="fade-up-left"

        className='bg-black mr-[150px] float-right'>
          <div className='  w-[140px] h-[140px] view__more'>
            <p >View</p>
            <p >All</p>
          </div>
        </div>
      </div>
        <div className=' w-full  text-black float-right mr-[150px] w-[556px]'>
          <div>
            
          </div>
          <h3 data-aos="fade-left" className='text-[#8CB9B4] text-[56px] text-right '>UI DESIGN</h3>
          <span data-aos="fade-left" className='border-t'>
            <p>DASHBOARD</p>
            <AiOutlineArrowRight />
          </span>
          <span data-aos="fade-left">
            <p>INTERIOR</p>
            <AiOutlineArrowRight />
          </span>
            <span data-aos="fade-left">
            <p>CRAIGSLIST</p>
            <AiOutlineArrowRight />
          </span>
            <span data-aos="fade-left">
            <p>BAAS</p>
            <AiOutlineArrowRight />
          </span>
            <span data-aos="fade-left">
              <p className=' whitespace-nowrap'>THE AWAKENED WOMAN</p>
              <AiOutlineArrowRight />
            </span>
          </div>

          <div className='w-full h-[100vh] flex justify-center social__media'>
            <div>
              <span  data-aos="fade-right">
                <h3>Linkedin</h3>
                <div className='text-white bg-[blue] text-[50px] rounded-full p-[10px]'><FaLinkedinIn /></div>
              </span>
              <span  data-aos="fade-left">
                <h3>Dribble</h3>
                <FiDribbble className='text-[#E84C88]'/>
              </span>
              <span  data-aos="fade-right" className='border-b-[0px]'>
                <h3>Behance</h3>

                <div className='text-white bg-[blue] text-[50px] rounded-full p-[10px]'><BsBehance  /></div>
              </span>
            </div>
          </div>
          <div className='flex flex-col w-full h-[100vh] justify-center items-center'>
            <div className='flex gap-[40px] item-center'>
              <h1 data-aos="fade-right" className='blab mb-[117px]'>Let's</h1>
              <h1 data-aos="fade-left" className='blab' >Talk</h1>
            </div>
            <p  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"className='border-white border py-[12px] px-[24px] text-white'>Contact Me</p>
          </div>
    </div>
  )
}