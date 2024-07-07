'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import GlobalButton from './GlobalButton';
import Image from 'next/image';
import Img0 from '../images/0.jpg';
import Img1 from '../images/1.jpg';
import Img2 from '../images/2.jpg';
import Img3 from '../images/3.jpg';

export default function Home() {
  const { contextSafe } = useGSAP();
  const heroHeadingLine1 = useRef();
  const homeRef = useRef();
  const heroHeadingLine2 = useRef();
  const heroHeadingLine = useRef();
  const introContainer = useRef();
  const heroSection = useRef();
  const professionalServices = useRef();
  const textInPutIntro = useRef();
  const FourPointsSection = useRef();
  const topLine = useRef();
  const leftLine = useRef();
  const rightLine = useRef();
  const bottomLine = useRef();
  const selectionGallery = useRef();
  const textInPutIntro2 = useRef();
  const upcoming = useRef();
  const tl = useRef();

  const [imageIndex, setImageIndex] = useState(0);

  const images = [Img0, Img1, Img2, Img3];

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(TextPlugin);
  }

  useGSAP(
    () => {
      const headings = gsap.utils.toArray('.fadeFromBelow');
      const fadeIn = gsap.utils.toArray('.fadeIn');
      fadeIn.forEach((fade) => {
        gsap.from(fade, {
          opacity: 40,
          y: 200,
          scrollTrigger: {
            trigger: fade,
            start: 'top bottom',
            end: 'bottom 95%',
            scrub: true,
          },
        });
      });

      headings.forEach((heading) => {
        gsap.from(heading, {
          y: 80,

          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true,
          },
        });
      });
    },
    { scope: homeRef.current }
  );

  useGSAP(() => {
    gsap.set(topLine.current, {
      height: '0%',
    });
    gsap.set(leftLine.current, {
      width: '0%',
    });
    gsap.set(rightLine.current, {
      width: '0%',
    });
    gsap.set(bottomLine.current, {
      height: '0%',
    });

    gsap.to(topLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(leftLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(rightLine.current, {
      width: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });

    gsap.to(bottomLine.current, {
      height: '100%',
      scrollTrigger: {
        trigger: FourPointsSection.current,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    tl.current = gsap.timeline();
    gsap.to(heroHeadingLine.current, {
      y: -200,
      scrollTrigger: {
        trigger: heroSection.current,
        start: 'top',
        end: 'bottom 200px',
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.to(textInPutIntro.current, {
      text: 'As a Kathak dancer, I aim to perpetuate and innovate within this classical form, bridging traditional aesthetics with contemporary interpretations. My journey is not only about personal achievement but also about contributing to the global appreciation and understanding of Indian classical dance.',
      scrollTrigger: {
        trigger: introContainer.current,
        start: 'top 20% ',
        end: 'bottom 70%',
        scrub: true,
      },
    });
  });

  //change image index every 0.3s on hover

  const intervalRef = useRef(null); // Ref to hold the interval ID

  const changeImage = () => {
    intervalRef.current = setInterval(() => {
      // Logic to change the image, for example, updating state to change the image index
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300); // Adjust the interval as needed
  };

  const stopImageChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the ref
    }
  };
  return (
    <main ref={homeRef}>
      <section
        ref={heroSection}
        className='flex h-dvh w-full items-end justify-center overflow-hidden bg-[#dbd5c9]  '
      >
        <div className=' pointer-events-none  absolute z-10 flex size-full items-center overflow-hidden px-4 md:px-24'>
          <div className=' aspect-square h-4/5  rounded-full border border-black/20'></div>
          <hr className=' absolute left-0 w-full border-black/20' />
          <div className=' absolute left-0 flex size-full items-center justify-center'>
            {' '}
            <div className='  m-auto h-full w-px bg-black/20'></div>
          </div>
        </div>
        <div className=' relative -z-0 flex size-full items-center justify-center'>
          <div className=' relative mb-[10%] aspect-[3/4] h-[70%] max-w-[95%] bg-white'>
            <Image
              onMouseEnter={changeImage}
              onMouseLeave={stopImageChange}
              src={images[imageIndex]}
              layout='fill'
              objectFit='cover'
              alt='Swarnali Nag'
            />
          </div>
        </div>
        <h1
          ref={heroHeadingLine}
          className=' absolute z-20 m-0 mb-6  flex flex-col items-center overflow-hidden  text-center text-clamp font-medium    text-black md:mb-2'
        >
          <span className=' font-serif italic' ref={heroHeadingLine1}>
            Swarnali Nag
          </span>{' '}
        </h1>
      </section>
      <section ref={professionalServices} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 '>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl md:text-6xl'>
                <span className='fadeFromBelow  '>About</span>
                <span className=' fadeFromBelow  font-black'>Me</span>
              </h2>
            </div>
            <p className=' fadeIn flex w-full flex-col items-start justify-start gap-10  overflow-hidden text-xl font-normal  text-neutral-800  md:flex-row   '>
              <span className=' w-full'>
                Swarnali Nag, a dedicated and passionate Kathak dancer whose
                journey in the enchanting world of Indian classical dance spans
                over a decade. Swarnali&apos;s deep connection with Kathak began
                under the tutelage of the esteemed Kathak Dancer Smt. Leena
                Malakar Vij, a relationship that has not only shaped her as a
                performer but also as an ambassador of this traditional art
                form.
                <br />A graduate with a Visharad in Kathak from the Prayag
                Sangeet Samiti, Allahabad, Swarnali excelled in her studies,
                consistently showcasing her talent and commitment to the
                discipline. Her educational journey continued at Kamala Nehru
                College, University of Delhi, where she pursued a BA in
                Sociology, and at the University of Manchester, where she is
                currently advancing her skills in Arts Management, Policy, and
                Practice.
              </span>
              <span className=' w-full'>
                Swarnali&apos;s performances resonate with the spirit of Kathak,
                characterized by intricate footwork, swift spins, and expressive
                gestures. She has graced numerous prestigious platforms,
                including performances in Romania and Bulgaria sponsored by
                Indian Council of Cultural Relations (ICCR) under the troupe led
                by her teacher Smt. Leena Malakar Vij, the Rashtriya Ekta Diwas
                celebration by the Eastern Zonal Cultural Center, and the G20
                Spouse Programme at the National Gallery of Modern Art. Her
                excellence in solo and group performances has been recognized
                with multiple awards across various national competitions.
                <br />
                Beyond the stage, Swarnali is an advocate for Kathak,
                participating in workshops, and cultural gatherings, and even
                serving as a judge in dance competitions. She is an active
                member of the Kathik Cultural Society of India and the Indian
                Dance Society at The University of Manchester, United Kingdom,
                contributing to the preservation and innovation within this
                beautiful dance form.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div
        ref={introContainer}
        className=' flex h-screen w-full items-center justify-center overflow-hidden bg-black px-20'
      >
        <p
          className='  flex  size-full items-center justify-center  text-left text-4xl text-white'
          ref={textInPutIntro}
        ></p>
      </div>

      <section
        ref={selectionGallery}
        className=' my-14 h-[calc(100dvh-80px)]   w-full'
      ></section>
      <section ref={upcoming} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' flex flex-col gap-10 md:flex-row md:items-center md:justify-between'>
            <div className=' flex flex-col gap-4'>
              <h2 className=' flex flex-col overflow-hidden text-4xl md:text-6xl'>
                <span className='fadeFromBelow  '>Upcoming</span>
                <span className=' fadeFromBelow  pb-2 font-black'>
                  Projects
                </span>
              </h2>
            </div>
            <div className=' flex w-full max-w-xl flex-col   overflow-hidden text-sm  font-normal  text-neutral-800  md:text-base'>
              <p className=' fadeIn  '>
                SR Group specializes in residential and commercial projects and
                maintains our on-time delivery commitment. Our layouts, crafted
                in compliance with Good Vastu and Feng Shui principles, ensure
                harmony and prosperity for your family. Lastly, along with good
                transparency with our clients, we uphold high compliance with
                all real estate laws, maintaining our longstanding reputation
                for integrity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='  mx-auto w-full max-w-screen-2xl'></section>
    </main>
  );
}
