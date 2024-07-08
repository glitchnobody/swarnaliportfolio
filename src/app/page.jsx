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

import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image8 from '../images/image8.jpg';
import Image9 from '../images/image9.jpg';
import Image10 from '../images/image10.jpg';
import Image11 from '../images/image11.jpg';
import Image12 from '../images/image12.jpg';
import Image13 from '../images/image13.jpg';
import Image14 from '../images/image14.jpg';
import Image15 from '../images/image15.jpg';
import Image16 from '../images/image16.jpg';
import Image17 from '../images/image17.jpg';
import Image18 from '../images/image18.jpg';
import Image19 from '../images/image19.jpg';
import Image20 from '../images/image20.jpg';
import Image21 from '../images/image21.jpg';
import Image22 from '../images/image22.jpg';
import Image23 from '../images/image23.jpg';
import Image24 from '../images/image24.jpg';
import Image25 from '../images/image25.jpg';
import Image26 from '../images/image26.jpg';
import Image27 from '../images/image27.jpg';
import Image28 from '../images/image28.jpg';
import Image29 from '../images/image29.jpg';
import Image30 from '../images/image30.jpg';
import Image31 from '../images/image31.jpg';

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

  const [currentImage, setCurrentImage] = useState('Image1');
  const [isOpen, setIsOpen] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const images = [Img0, Img1, Img2, Img3];

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(TextPlugin);
  }

  const galleryImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
  ];

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
        start: 'top 10% ',
        end: 'bottom 80%',
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
      {
        isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className='fixed  left-0 top-0 z-50 flex size-full items-center justify-center bg-black '
          >
            <button
              onClick={() => setIsOpen(false)}
              className='absolute right-20   top-20 p-4 text-white'
            >
              Close
            </button>
            <div className='relative h-[85dvh] w-[85vw] '>
              <Image
                src={currentImage}
                layout='fill'
                objectFit='contain'
                alt='Swarnali Nag'
              />
            </div>
          </div>
        ) // Display the modal if isOpen is true
      }
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
        <div className=' h-[25rem] w-full md:h-60'>
          <p
            className='  flex  size-full   text-left text-2xl text-white md:text-4xl'
            ref={textInPutIntro}
          ></p>
        </div>
      </div>

      <section id='about' ref={upcoming} className=' my-10 w-full px-3 '>
        <div className=' mx-auto w-full max-w-screen-2xl'>
          <div className=' relative flex flex-col gap-10 md:flex-row  '>
            <div className=' flex flex-col gap-4 md:sticky md:top-20 md:h-full'>
              <div className=' h-fit  '>
                <h2 className=' flex flex-col overflow-hidden text-4xl md:text-6xl'>
                  <span className='fadeFromBelow  '>Experience &</span>
                  <span className=' fadeFromBelow  pb-2 font-black'>
                    Achievements
                  </span>
                </h2>
              </div>
            </div>
            <div className=' flex w-full flex-col  border-l-black/20 text-sm   font-normal   text-neutral-800  md:border-l  md:pl-2  md:text-base'>
              <div className=' fadeIn   '>
                <span className=' text-2xl font-bold'>Competitions :</span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    First place in multiple national-level Kathak competitions
                    including RUHANIYAT’20, ADAA, TAAL-TARANG’21, and LASYA -
                    University of Delhi.
                  </li>
                  <li>
                    Second place at MOOD INDIGO - IIT Bombay Asia’s largest
                    student festival (2020) and at the District Branch of
                    Haryana State Council for Child Welfare sponsored Indian
                    Classical Solo Competition (2018).
                  </li>
                </ul>
              </div>

              <div className=' fadeIn mt-10  '>
                <span className=' text-2xl font-bold'>
                  International Performances :
                </span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    Performed in Romania and Bulgaria with a group led by her
                    teacher Smt. Leena Malakar Vij sponsored by the Indian
                    Council of Cultural Relations (ICCR) under the Ministry of
                    External Affairs in collaboration with the Embassy of India
                    to Romania and Bulgaria.
                  </li>
                  <li>
                    Participated in the 19th Global Female Folk Dance
                    Competition and Carnival (2018).
                  </li>
                  <li>
                    Worked in a Kathak Documentary in Alaap Studios in Sri
                    Lanka, Colombo (2017).
                  </li>
                </ul>
              </div>

              <div className=' fadeIn mt-10  '>
                <span className=' text-2xl font-bold'>
                  Cultural Festivals :
                </span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    G20 Spouse Programme at the National Gallery of Modern Art
                    (2023).
                  </li>
                  <li>Deepotsav, Ayodhya (2022).</li>
                  <li>Sanskrit Bharati Festival, Harinagar (2022)</li>
                </ul>
              </div>

              <div className=' fadeIn mt-10  '>
                <span className=' text-2xl font-bold'>Performances :</span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    National and international stages, including Rashtriya Ekta
                    Diwas and Bal Kala Utsav.
                  </li>
                  <li>
                    Collaborations with notable platforms like Artskalpataru at
                    The Ankur Festival and Spirit of Bharatham on Instagram and
                    Swar Laya Chhand on Facebook.
                  </li>
                  <li>
                    D.A.V United Festival - Indira Gandhi National Centre for
                    the Arts, Janpath, New Delhi.
                  </li>
                  <li>
                    Performed in a kathak Production &quot;BEEJ-Aahat Aur Anahat
                    Naad&quot; supported by the Ministry of Culture, curated by
                    Smt. Leena Malakar Vij.
                  </li>
                </ul>
              </div>

              <div className=' fadeIn mt-10  '>
                <span className=' text-2xl font-bold'>
                  Teaching and Judging :
                </span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    Judge at DPS, Sector-17, and DAV Public School, Sector-37,
                    in solo dance competitions (2021).
                  </li>
                  <li>
                    Assistant to Smt. Leena Malakar Vij in Spic Macay workshops.
                  </li>
                </ul>
              </div>

              <div className=' fadeIn mt-10  '>
                <span className=' text-2xl font-bold'>Memberships :</span>
                <ul className='ml-4 list-outside list-disc'>
                  <li>
                    NUPUR: Ex - Member of Indian Classical Dance Society at KNC,
                    DU.
                  </li>
                  <li>Kathik Cultural Society of India: Active member.</li>
                  <li>
                    Indian Dance Society - Advanced Team: University of
                    Manchester.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='gallery' className='  mx-auto w-full max-w-screen-2xl'>
        <div className=' h-fit  '>
          <h2 className=' flex flex-col overflow-hidden text-4xl md:text-6xl'>
            <span className=' fadeFromBelow  pb-2 font-black'>Gallery</span>
            <div className='masonry-grid mt-10 px-2'>
              {galleryImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  onClick={
                    () => {
                      setCurrentImage(image);
                      setIsOpen(true);
                    }
                    // Set the current image and open the modal
                  }
                  className='mb-4 object-contain'
                  alt='Swarnali Nag'
                />
              ))}
            </div>
          </h2>
        </div>
      </section>
    </main>
  );
}
