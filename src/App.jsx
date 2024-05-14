import React from 'react';
import "./App.css";
import Porfile from "./assets/myphoto.jpeg";
import Project1 from "./assets/P-2.png";
import Project2 from "./assets/P-3.png";
import Project3 from "./assets/P-4.png";
import Project4 from "./assets/P-1.png";
import { Carousel } from 'react-bootstrap';
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState ,useRef} from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram,FaTelegram } from 'react-icons/fa';
import Chart from 'chart.js/auto';
 


function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])


  const milestones = [
    { year: '2018', description: 'Pursued SSC from Shri. Balwantrao Yadav Highschool Peth Vadgoan in 2018 with 90.00%. ✅' },
    { year: '2021', description: 'Completed Diploma from Ashokrao Mane Polytechnic College, Vathar in 2021 with 88.23%. ✅' },
    { year: 'Present', description: 'Currently pursuing BTech in CSE at Ashkorao Mane Group Of Institution, Vathar.' }
  ];

  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestoneIndex(prevIndex => (prevIndex + 1) % milestones.length);
    }, 2000); // Change delay as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [milestones.length]);


  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { nsame, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      message: ''
    });
  };


  const canvasRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const technologiesData = [
    { label: 'HTML', value: 95 },
    { label: 'CSS, Sass & Bootstrap', value: 90 },
    { label: 'JavaScript', value: 85 },
    { label: 'React', value: 90 },
   
    { label: 'Python', value: 95 },
    { label: 'C & CPP', value: 95 },
    { label: 'UI design in Figma', value: 85 },
    { label: 'Angular', value: 50 },
    { label: 'React Native', value: 45 },
    { label: 'Android', value: 40 },
    { label: 'OS', value: 40 }
  ];

  useEffect(() => {
    const generatePieChart = (canvasRef, data) => {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
  
      if (canvasRef.current.chart) {
        canvasRef.current.chart.destroy();
      }
  
      const animationDuration = (data.value / 100) * 8000; // Calculate animation duration dynamically
  
      canvasRef.current.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [],
          datasets: [{
            data: [data.value, 100 - data.value],
            backgroundColor: ['rgba(0, 150, 255)', '#E0E0E0'],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: animationDuration, // Set animation duration dynamically
            easing: 'linear', // Use linear easing for continuous animation
            loop: true // Enable looping for continuous animation
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  return technologiesData[context.dataIndex].value + '%'; // Return the value of the chart
                }
              }
            }
          }
        }
      });
    };
  
    technologiesData.forEach((data, index) => {
      generatePieChart(canvasRefs[index], data);
    });
  }, []);
  
  
  return (
    <div className="max-w-10xl mx-auto relative">
    <header className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20`} id="home">
  <div className="container mx-auto px-4 py-6 max-w-9xl bg-black">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <h1 className="font-bold text-4xl">PORTFOLIO</h1>
      </div>
      <div className="sm:ml-auto">
        <ul className="flex flex-wrap gap-4">
          <li>
            <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
              Technologies
            </a>
          </li>
          <li>
            <a href="#additional-skills" className="text-gray-400 hover:text-white cursor-pointer">
              Additional Skills
            </a>
          </li>
          <li>
            <a href="#academic-journey" className="text-gray-400 hover:text-white cursor-pointer">
              Academic Journey
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-400 hover:text-white cursor-pointer">
              Experience
            </a>
          </li>
          <li>
            <a href="#contactme" className="text-gray-400 hover:text-white cursor-pointer">
              Contact Me 
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
  
  
      <main className="relative mt-28">
      <section>
  <div className="container m-auto max-w-4xl px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
    <div className="animate-left">
      <h2 className="fonts font-bold text-6xl mt-10">Hello, I'm Samruddhi Patil,</h2><br /><br />
      <div>
        <h2 className="font-bold text-4xl mt-1 gradiant-text">Frontend Developer..</h2><br /> <br />
      </div>
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/PatilSamruddhi02?tab=repositories" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaGithub size={44} /></a>
        <a href="https://www.linkedin.com/in/samruddhi-patil-844757266?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUA57GG3cRUyj3kVtaNCbIQ%3D%3D" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaLinkedin size={44} /></a>
        <a href="https://t.me/samruddhipatil16" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaTelegram size={44} /></a>
        <a href="https://www.facebook.com/samruddhi.patil.7165331?mibextid=ZbWKwL" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaFacebook size={44} /></a>
        <a href="https://www.instagram.com/samruddhi_patil__02/" className="icon-link mr-4 " style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaInstagram size={44} /></a>
      </div>
    </div>
    <div className="relative ml-30 mt-10 flex items-center animate-right">
      <img src={Porfile} className="relatives" style={{ borderRadius: '30%', boxShadow: '0 0 15px 20px rgba(0, 150, 255)' }} />
    </div>
  </div>
</section>



<section id="aboutme" className="py-12 mt-20 max-w-8xl relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 animate-zoom-out">
    <h2 className="text-4xl font-semibold mb-6 gradiant-text" style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>About Me</h2>
    <p className="text-lg mb-4 text-justify">
      My name is <span className="font-semibold text-blue-400">Samruddhi Rajendra Patil</span>. I was born on <span className="font-semibold text-blue-400">16th Oct 2002</span> in a small village called Bhadole, located in Hatkanangle Taluka of Kolhapur District. I am belonging from the <span className="font-semibold text-blue-400">Maratha</span> community and carry the Indian nationality. I am focused on my personal and professional growth. I am fluent in <span className="font-semibold text-blue-400">English</span>, <span className="font-semibold text-blue-400">Hindi</span>, and <span className="font-semibold text-blue-400">Marathi</span>, which enables me to communicate effectively with diverse groups of people.
      <br /><br />
      Apart from academics and work, I have a passion for <span className="font-semibold text-blue-400">helping people</span> and believe in giving back to society. I find joy in <span className="font-semibold text-blue-400">spending quality time with my family</span> and cherish the moments spent together. When I'm not working, you can often find me engaged in activities that nurture my personal interests and hobbies.<br/><br/> My address is <span className="font-semibold text-blue-400">A/p – Bhadole, Tal: Hatkanangle, Dist: Kolhapur (416112)</span>. This serene village is not just my home but also a source of inspiration that keeps me grounded and connected to my roots.
    </p>
  </div>
</section>






        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12 py-12 mt-20 max-w-5xl ">
            <h2 className="text-4xl font-semibold  gradiant-text mb-10" style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>Some Latest Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-15 ">
              <div className="border border-gray-500 mr-10 rounded-md p-5 bg-white text-black hover: transform: scale(1.05) flex-1 project-card" style={{ boxShadow: '0 0 10px 10px rgba(0, 150, 255)' }}>
              <img src={Project1} className="w-full h-auto" alt="Project 1" />
          <h3 className="text-black text-2xl font-semibold mt-8">Parellel Wireless Website (Clone)</h3>
          <p className="text-black text-sm mt-2">Responsive HTML/CSS/JS. HTML5, CSS3 (SCSS)</p>
          <div className="flex mt-12 gap-2">
            <a href="https://samruddhipatil-tribute-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Live preview</a>
            <a href="https://github.com/PatilSamruddhi02/Parallel-Wireless" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Checkout GitHub</a>
          
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1 bg-white text-black project-card " style={{ boxShadow: '0 0 10px 10px rgba(0, 150, 255)' }}>
              <img src={Project2} className="w-full h-auto" alt="Project 2" />
          <h3 className="text-black text-2xl font-semibold mt-8">Tribute Page Of Mohandas Karamchand Gandhi</h3>
          <p className="text-black text-sm mt-2">Responsive Using React-JS.</p>
          <div className="flex mt-12 gap-2">
            <a href="https://samruddhipatil-tribute-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Live preview</a>
            <a href="https://github.com/PatilSamruddhi02/Tribute-Page" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Checkout GitHub</a>
          
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11 ">
              <div className="border border-gray-500 rounded-md p-5 mr-10 flex-1 bg-white text-black project-card"style={{ boxShadow: '0 0 10px 10px rgba(0, 150, 255)' }}>
              <img src={Project3} className="w-full h-auto" />
                                <h3 className="text-black text-2xl font-semibold mt-8">
                                API-Fetching Ecommerce Web 
                </h3>
                <p className="text-black text-sm mt-2">
                  Responsive HTML/CSS JS. HTML5, CSS3 (SCSS)
                </p>

                                <div className="flex mt-12 gap-2">
                                <a href="https://samruddhipatil-api-fetching.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm  text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                </a>

                <a href="https://github.com/PatilSamruddhi02/API-Fetching" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm  text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Checkout GitHub
                </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1  bg-white text-black project-card"style={{ boxShadow: '0 0 10px 10px rgba(0, 150, 255)' }}>
              <img src={Project4} className="w-full h-auto" />
                                <h3 className="text-black text-2xl font-semibold mt-8">
                                React-Resume-Builder
                </h3>
                <p className="text-black text-sm mt-2">
                  Responsive Webpage of React-Resume-Builder.
                </p>

                                <div className="flex mt-12 gap-2">
                                <a href="https://samruddhipatil-react-resume-builder.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm  text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                      Live preview
                </a>

                <a href="https://github.com/PatilSamruddhi02/React-Resume-Builder" target="_blank" rel="noopener noreferrer" className="flex-1 text-sm  text-center py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Checkout GitHub
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      

           {/* Technoglies section */}
           <section className="py-10" id="technologies">
  <div className="container m-auto px-4">
    <h2 className="text-2xl font-semibold">Technologies</h2>
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
      {canvasRefs.map((canvasRef, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div style={{ width: '100px', height: '100px' }}>
            <canvas ref={canvasRef}></canvas>
          </div>
          <h2 className="font-semibold">{technologiesData[index].label}</h2>
          <p>{technologiesData[index].value}%</p> {/* Display the percentage value */}
        </div>
      ))}
    </div>
  </div>
</section>



        {/* Additional skills section */}
        <section  className=" py-12 mt-15 max-w-7xl flex justify-center items-center mx-auto" id="additional-skills">
          <div className="container m-auto px-4 py-4 ">
            <h2 className="text-4xl font-semibold mb-6 gradiant-text" style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>
              Additional skills
            </h2>
            <div className="bounce-effect">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[70%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Creativity
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Adaptability
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Leadership Skills
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-44 mt-4 sm:mt-6 w-[80%]">
             
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Time Management
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Problem Solving
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Quick Learning
                </p>
              </div>
             
              </div>
            </div>
          </div>
        </section>
        
        
        <section className="py-8" id="academic-journey">
  <div className="container m-auto px-4 mr-20 max-w-5xl">
    <h2 className="text-4xl font-semibold mb-6 gradiant-text gradiant-text" style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>Academic Journey</h2>
    <div className="mt-12 relative">
      <div className="progress-bar-structure" id="progress-bar">
        {milestones.map((milestone, index) => {
          return (
            <div key={index} className={`progress-step ${index <= currentMilestoneIndex ? 'completed' : ''}`}>
              <div className="step-content mb-16">
                <div className="year-indicator">
                  <h3 className="text-lg font-semibold ">{milestone.year}</h3>
                </div>
                <div className={`step-indicator mt-5 ${index === 0 ? 'first-indicator' : ''}`}></div>
               
                <p className='des ml-10 mt-4'>{milestone.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>











<section className="py-10" id="experience">
  <div className="container mx-auto px-4 py-12 mt-20 max-w-5xl">
    {/* Experience Title */}
    <h2 className="text-4xl font-semibold mb-6 gradiant-text" style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>Experience</h2>

    {/* Table Container */}
    <div className="overflow-x-auto" style={{ boxShadow: '0px 12px 25px rgba(0, 150, 255)' }}>
      <table className="min-w-full divide-y divide-gray-200 " >
        {/* Table Head */}
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Link</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* First Row */}
          <tr>
            <td className="px-6 py-4" style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>1</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>Software Development - Android Internship(Online Mode)</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>Learned the Application Software Language for the development of applications. Gained knowledge about making applications using Android.</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>6 weeks</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}><a href="https://drive.google.com/file/d/1vYoFl3rUChcoxR6kZkowiYMeEA5dtm62/view?usp=sharing">Certificate Link</a></td>
          </tr>

          {/* Second Row */}
          <tr>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>2</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>Oasis Infobyte Internship(Online Mode)</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>Oasis Infobyte Provide the Online Platform for Web Developing and Designing. Where I Learn the Most of The Concepts of Web Development ( HTML, CSS, JS).</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>1 month</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}><a href="https://drive.google.com/file/d/14YixjO9Hi5nl31reZ3P18403YEM_Ia57/view?usp=sharing">Certificate Link</a></td>
          </tr>

          {/* Third Row */}
          <tr>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>3</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>TechnoHack EduTech Internship(Online Mode)</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>They Provide the Intensive training in Java development. Where I Learn Basic Concept's of Java.</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>6 weeks</td>
            <td className="px-6 py-4"style={{ transition: 'box-shadow 0.3s', boxShadow: 'none' }} onMouseEnter={(e) => e.target.style.boxShadow = '0px 0px 20px 0px rgba(0, 150, 255, 0.8)' } onMouseLeave={(e) => e.target.style.boxShadow = 'none'}><a href="https://drive.google.com/file/d/1vYoFl3rUChcoxR6kZkowiYMeEA5dtm62/view?usp=sharing">Certificate Link</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section id="contactme" className="py-20 bg-black text-white">
  <div className="container m-auto px-4 max-w-5xl">
    <h2 className="text-4xl font-semibold mb-6 gradiant-text"style={{ textShadow: '0px 12px 25px rgba(0, 150, 255)' }}>Let's Connect</h2>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto" action="mailto:samruddhip746@gmail.com" method="post" encType="plain/Text">
      <div className="mb-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full px-4 py-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded text-white font-semibold"
      >
        Send Message
      </button>
    </form>
  </div>
</section>


      </main>
      <footer className="container m-auto flex justify-between items-center px-4 py-6 font-20">
  <div>
    <p >Copyright @ 2024</p>
  </div>
  <div className="flex gap-8 ">
        <a href="https://github.com/PatilSamruddhi02?tab=repositories" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaGithub size={44} /></a>
        <a href="https://www.linkedin.com/in/samruddhi-patil-844757266?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUA57GG3cRUyj3kVtaNCbIQ%3D%3D" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaLinkedin size={44} /></a>
        <a href="https://t.me/samruddhipatil16" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaTelegram size={44} /></a>
        <a href="https://www.facebook.com/samruddhi.patil.7165331?mibextid=ZbWKwL" className="icon-link mr-4" style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaFacebook size={44} /></a>
        <a href="https://www.instagram.com/samruddhi_patil__02/" className="icon-link mr-4 " style={{ boxShadow: '0px 8px 12px rgb(0, 150, 255)' }}><FaInstagram size={44} /></a>
      </div>
  <div>
    <p>Created With Love By Samruddhi Patil..❤️</p>
  </div>
</footer>

      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>

    
  );
}

export default App;
