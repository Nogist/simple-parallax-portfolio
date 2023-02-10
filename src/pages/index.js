import Head from 'next/head';
import { useRef } from 'react';
import Image from 'next/image';
import mouse  from '../assets/mouse.png';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/Navbar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {AiOutlineArrowRight } from 'react-icons/ai';
import { FiDribbble } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsBehance } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

export default function Projects () {
  // const ref = useRef();


  return (
    <div>
       <Parallax pages={7}  id='bobo'>
        <ParallaxLayer offset={0}
            style={{
              backgroundColor: 'black',
            }}
          />
          <ParallaxLayer
            sticky={{ start: 0, end: 4.0 }}
            style={{ textAlign: 'center' }}
          >
            <Navbar />
          </ParallaxLayer>
          <ParallaxLayer offset={1}
            factor={2}
            style={{
              background: 'linear-gradient(180deg, #98B2C0 50%, #E9D7DC 100%)',
            }}
          />
           <ParallaxLayer offset={3}
            factor={0.5}
            style={{
              backgroundColor: 'black',
            }}
          />
           <ParallaxLayer offset={3.5}
            style={{
              background: 'linear-gradient(180deg, #CFBDE7 50.08%, #E5D5DB 100%)',
            }}
          />
           <ParallaxLayer offset={4.5}
            factor={2.5}
            style={{
              backgroundColor: 'black',
            }}
          />

          <ParallaxLayer
            offset={0.15}
            speed={0.45}
           
          >
            <div className='w-full h-full flex flex-col justify-center'>
              <div className='text-[#8CB9B4] '>
                <h1 className='pl-[150px]'>User</h1>
                <h1 className='text-center'>Centered</h1>
                <h1 className='text-right pr-[150px]'>Design</h1>
              </div>
                 <div className=' relative top-[-150px] left-[50px] w-[140px] h-[140px] view__more'>
                 <Image src={mouse} alt="scroll down" />
                </div>
            </div>
            
          </ParallaxLayer>
          <ParallaxLayer
              // sticky={{ start: 1.2, end: 1.9 }}
              offset={1.0}
              speed={1.4} 
              // onClick={() => ref.current.scrollTo(3)}
            >
              <div className='text-black '>
              {/* <h1 className='pl-[150px]'>{! visible ? 'UI' : 'UX'}</h1> */}
                <h1 className='text-center'>Designer</h1>
              </div>
          </ParallaxLayer>
          <ParallaxLayer
              // sticky={{ start: 1.2, end: 1.9 }}
              offset={2}
              speed={1} 
              // onClick={() => ref.current.scrollTo(3)}
            >
              <div className='text-black '>
                <h1 className='pl-[150px]'>Ux</h1>
                <h1 className='text-center'>Designer</h1>
              </div>
          </ParallaxLayer>
          <ParallaxLayer
                sticky={{ start: 3.15, end: 3.15   }}
              // onClick={() => ref.current.scrollTo(3)}
            >
              <div className='text-[green] w-full px-[150px] text-center bg-[black]'>
                <p className='text-[16px] text-white'>I am a UX designer with a background in human- computer interaction. 
                  I love creating intuitive and user-friendly designs that solve real problems for users. 
                  With my expertise in user research, wireframing and prototyping, 
                  I am able to quickly iterate on ideas and create high fidelity mockups.
                </p><br/>
                <p className='text-[16px] text-white'>I also have experience conducting usability testing to validate my designs and ensure 
                  that they meet the needs of the users. With a strong eye for visual designs,
                  I’m able to create visually appealing interfaces that are both functional and aesthetically pleasing. 
                </p>
              <p className='text-[#8CB9B4] text-[24px] text-center mt-[24px] text-[24px]' >
                Rosemary Nwosu-Ihueze</p>
              </div>
        </ParallaxLayer>
        <ParallaxLayer
              offset={3.95}
              speed={0.75}
              // onClick={() => ref.current.scrollTo(1)}
            >
              <div className='text-black'>
                <h1 className='pl-[150px]'>Selected</h1>
                <h1 className='text-center'>Projects</h1>
              </div>
        </ParallaxLayer>
        <ParallaxLayer
              offset={4.9}
              speed={1.5}
              // onClick={() => ref.current.scrollTo(1)}
            >
              <div className='mt-[150px] text-black ml-[150px] w-[556px]'>
                <h3 className='text-[#8CB9B4] text-[56px] '>UX DESIGN</h3>
                <span className='border-t'>
                  <p>CHOWAI</p>
                  <AiOutlineArrowRight />
                </span>
                <span>
                  <p>TUTORBOOST</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                  <p>MEDICCI</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                  <p>NFTLOAN</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                    <p>JAZZHUT</p>
                    <AiOutlineArrowRight />
                  </span>
                </div>
        </ParallaxLayer>
        <ParallaxLayer
              // offset={4.99}
              // sticky={{ start: 4.5, end: 5.1 }}
              offset={4.9}
              speed={0.5}
            >
              <div className='mt-[100px] mr-[150px] float-right'>
                <div className='  w-[140px] h-[140px] view__more'>
                  <p >View</p>
                  <p >All</p>
                </div>
              </div>
              
        </ParallaxLayer>
        <ParallaxLayer
              offset={4.9}
              speed={0.75}
              // onClick={() => ref.current.scrollTo(1)}
            >
              <div className='mt-[500px] text-black float-right mr-[150px] w-[556px]'>
                <h3 className='text-[#8CB9B4] text-[56px] text-right '>UI DESIGN</h3>
                <span className='border-t'>
                  <p>DASHBOARD</p>
                  <AiOutlineArrowRight />
                </span>
                <span>
                  <p>INTERIOR</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                  <p>CRAIGSLIST</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                  <p>BAAS</p>
                  <AiOutlineArrowRight />
                </span>
                 <span>
                    <p className=' whitespace-nowrap'>THE AWAKENED WOMAN</p>
                    <AiOutlineArrowRight />
                  </span>
                </div>
        </ParallaxLayer>
        <ParallaxLayer
        offset={5.9}
        speed={1}
        >
          <div className='social__media'>
            <div>
              <span>
                <h3>Linkedin</h3>
                <div className='text-white bg-[blue] text-[50px] rounded-full p-[10px]'><FaLinkedinIn /></div>
              </span>
              <span>
                <h3>Dribble</h3>
                <FiDribbble className='text-[#E84C88]'/>
              </span>
              <span className='border-b-[0px]'>
                <h3>Behance</h3>

                <div className='text-white bg-[blue] text-[50px] rounded-full p-[10px]'><BsBehance  /></div>
              </span>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.0}
          speed={2.7}
        >
          <div className='flex flex-col items-center'>
            <h1 className='blab mb-[117px]'>Let's Talk</h1>
            <p className='border-white border py-[12px] px-[24px] text-white'>Contact Me</p>
          </div>
        </ParallaxLayer>
       </Parallax>
    </div>
  )
}