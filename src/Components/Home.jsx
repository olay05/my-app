import React from 'react'
import Logo from '../Assets/logo-5866753e.svg'
import Arrow from '../Assets/arrow.svg'
import Rolly from '../Assets/rolly.svg'
import Hero from '../Assets/hero-0e1d81b6.svg'
import Zoom from '../Assets/zoom.svg'
import Stripe from '../Assets/stripe.svg'
import Monday from '../Assets/monday.svg'
import Dropbox from '../Assets/dropbox.svg'
import Slack from '../Assets/slack.svg'
import Users from '../Assets/users.svg'
import Herro from '../Assets/heroImg.svg';
import Audio from '../Assets/audio.svg';
import Live from '../Assets/live.svg';
import Recorded from '../Assets/recorded.svg';
import Doc from '../Assets/doc.svg';
import Boy from '../Assets/boy.svg';
import Wifi from '../Assets/wifi.svg';
import Clock from '../Assets/clock.svg';
import Meet from '../Assets/meet.svg';
import Dollar from '../Assets/dollar.svg';
import Firstbox from '../Assets/box1.svg';
import Secondbox from '../Assets/box2.svg';
import Thirdbox from '../Assets/box 3.svg';
import Fourth from '../Assets/box4.svg';
import Fifth from '../Assets/fifth.svg';
import Sixth from '../Assets/sith.svg';
import Card1 from '../Assets/card1.svg';
import Card2 from '../Assets/card2.svg';
import Card3 from '../Assets/card3.svg';
import Card4 from '../Assets/card4.svg';
import Card5 from '../Assets/card5.svg';
import Card6 from '../Assets/card6.svg';
import Community from '../Assets/community.svg';
import Plus from '../Assets/plus.svg';
import Facebook from '../Assets/fb.svg';
import Twiter from '../Assets/twitter.svg';
import Youtube from '../Assets/youtube.svg';
import Mask from '../Assets/recorded.svg';
import Golo from '../Assets/logo2.svg';

export default function Home() {

    let links = [
        {name:'Home', link: '/'},
        {name:'About us', link: '/'},
        {name:'Courses', link: '/'},
        {name:'Testimonial', link: '/'},
        {name:'Community', link: '/'},
    ]
  return (
    <div className='bg-[#004DB3]'>

        <div className='md:px-4 py-4 px-4 flex justify-between items-centerm sticky top-0 bg-[#004DB3] z-50'>
            <img src={Logo} alt="" className='mx-4'/>

            <nav className='sticky top-0 py-2 z-50'>

                <ul className='md:flex pl-9 md:pl-0 flex gap-6'>
                    {links.map(
                        link =>

                        <li className='font-semibold hover:text-blue-800 text-white md:my-0 md:ml-0'>
                            <a href="/">{link.name}</a>
                        </li>

                    )}

                    <button className='btn bg-white my-0 py-2 px-3 md:ml-8 rounded mx-3 text-[#004DB3]'>Enroll Now</button>
                </ul>

            </nav>

        </div>


        <main className='bg-[#004DB3]'>

            <div className='flex lg:flex-row flex-col container px-6 mx-auto lg:pt-20 pt-4 justify-between'>

            <div className='lg:w-1/2 w-full lg:p-0 flex flex-col justify-center lg:text-left text-center'>
                <p className='lg:text-[80px] text-[64] text-white lg:leading-[82px] leading-[45.78] lg:mt-0 mt-2 pt-10 pl-10'>Grow your skills to advance your career path</p>

                <p className='text-[#E7E7E7] font-medium pt-4 lg: text-base text-[19px] mt-4 pl-10'>Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>

                <span className='flex items-center gap-4 mt-8 mb-6 capitalize lg:justify-start justify-center pl-10'>

                    <button className=' rounded-md text-white border border-white capitalize bg-transparent lg:px-6 lg:py-4 py-4 flex items-center lg:text-sm text-[8px] justify-center leading-snug'> get started now <img src={Arrow} alt="" /> </button>

                    <button className='bg-white text-[#004DB3] rounded lg:px-6 lg:py-6 px-4 py-3 lg:text-base text-[8px]'>Enroll Now</button>

                </span>



                <div className='flex items-center gap-2 lg:mx-0 mx-auto'>

                    <img src={Rolly} alt="" />

                <p className='font-bold text-white flex flex-col lg:text-2xl text-[3.4px]'>255K</p> <span className='font-medium text-white lg:text-base text-[8px]'>Previews</span>

                </div>

                </div>      

                    <div>
                        <img src={Hero} alt="" />
                    </div>  
                
            </div>

        </main>


        <div className='flex gap-20 place-content-center lg:flex h-[9.88rem] bg-[#CCDBF0] items-center justify-center pl-6'>

            <img src={Zoom} alt="" />
            <img src={Stripe} alt="" />
            <img src={Monday} alt="" />
            <img src={Dropbox} alt="" />
            <img src={Slack} alt="" />

        </div>


        <main className='bg-[#f8f9fc]'>

            <section>

                <div className='flex items-center lg:flex justify-between px-6 container mx-auto pb-12 pt-24'>

                    <div className='lg:w-1/2 lg:block flex flex-col items-center'>

                        <h1 className='text-[#000f24] font-bold lg:leading-[1] lg:text-[56px] text-2xl mb-4 lg:text-left text-center '>High quality video, audio & live classes</h1>

                        <p className='text-[#A1A1A1] capitalize font-medium mb-8 lg:w-[37.75rem] lg:text-base text-[8px]'>High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>


                        <button className='text-white bg-[#004DB3] capitalize rounded-[4px] px-8 py-4 mb-6 font-bold '>View courses</button>


                        <div className='flex lg:w-3/4 gap-6 capitalize'>

                      <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                        <img src={Audio} alt="" />
                        <p className='font-bold text-[#000F24]'>audio classes</p>

                      </span>

                         <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                          <img src={Live} alt="" />
                          <p className='font-bold text-[#000F24]'>audio classes</p>

                         </span>

                    </div>

                  <div className='flex lg:w-3/4 gap-6 mt-6 mb-6 capitalize'>

                  <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                    <img src={Recorded} alt="" />
                    <p className='font-bold text-[#000F24]'>audio classes</p>

                   </span>

                       <span className='bg-white gap-3 flex items-center h-[4.5rem] px-6 pr-14'>
                          <img src={Doc} alt="" />
                              <p className='font-bold text-[#000F24]'>audio classes</p>

                       </span>

               </div>

                    </div>

                    <div className='lg:w-1/2 flex justify-end relative'>

                        <img src={Users} alt="" className=''/>
                        <img src={Herro} alt="" />

                    </div>

                    </div>

            </section>



            <section className='container px-6 mx-auto pb-16 lg:flex items-center justify-between gap-16'>

                <div className='lg:w-1/2 lg:mb-0 mb-8'>
                    <h1 className='text-[#000F24] font-bold lg:leading-[60px] mb-4 capitalize lg:text-left text-center text-[60px] '>This Is Why We Are Best From Others</h1>

                    <p className='text-[#A1A1A1A1] font-medium lg:w-[38rem] lg:leading-[26px] mb-8 capitalize lg:text-base lg:text-left text-[8px] text-center'>High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>

                    <img src={Boy} alt="" />

                </div>

                <div className='lg:w-1/2 grid grid-cols-2 gap-6 capitalize' >

                    <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>
                        <img src={Wifi} alt="" />
                        <h1 className='text-black capitalize mt-6 font-bold lg:text-base text-xs'>experienced mentors</h1>

                        <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>

                    </div>

                    <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>
                        <img src={Clock} alt="" />
                        <h1 className='text-black capitalize mt-6 font-bold lg:text-base text-xs'>experienced mentors</h1>

                        <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>

                    </div>

                    <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>
                        <img src={Meet} alt="" />
                        <h1 className='text-black capitalize mt-6 font-bold lg:text-base text-xs'>experienced mentors</h1>

                        <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>

                    </div>

                    <div className='bg-white lg:py-8 py-4 lg:px-6 px-2'>
                        <img src={Dollar} alt="" />
                        <h1 className='text-black capitalize mt-6 font-bold lg:text-base text-xs'>experienced mentors</h1>

                        <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] leading-[26px]'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>

                    </div>

                </div>

            </section>

            <section className='container px-6 mx-auto pb-16'>

                <div className='flex flex-col items-center capitalize'>

                    <h1 className='text-black font-bold lg:text-[56px] lg:leading-[70px] text-2xl capitalize mb-4'>Browse Our Popular Courses</h1>

                    <p className='text-[#A1A1A1] font-medium lg:leading-[26px] text-[12px] text-center lg:w-2/5 w-3/4 mb-16' >High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>

                    <div>
                        <ul className='flex sticky top-40 h-12 items-center z-40 capitalize lg:gap-6'>

                            <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0'>All categories</li>

                            <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0'>Design</li>

                            <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0'>Development</li>

                            <li className='lg:text-xs text-[8px] cursor-pointer text-[#A1A1A1] px-4 py-3 font-bold flex items-center h-full border-0'>Marketing</li>

                        </ul>

                    </div>

                </div>

                <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-2 mt-16'>

                    <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Firstbox} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1'>

                                <img src={Card2} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>

                    <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Secondbox} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1'>

                                <img src={Card2} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>


                   <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Thirdbox} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center  gap-1'>

                                <img src={Card3} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>

                    <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Fourth} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1'>

                                <img src={Card4} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>

                    <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Fifth} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1'>

                                <img src={Card5} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>

                    <div className='lg:p-5 p-3 rounded-[16] bg-white'>

                        <img src={Sixth} alt="" />

                        <span className='flex items-center justify-between mt-2'>

                            <button className='bg-[#1E5DCE33] text-[#1E5DCE] capitalize font-bold lg:text-xs text-[4px] lg:px-3 px-2 py-1 rounded-full'>Design</button>
                            <p className='font-bold text-[#A1A1A1] lg:text-2xl text-[4px] flex items-center '>4.7k (32.7)</p>

                        </span>

                        <h1 className='capitalize text-[#000F24] font-bold lg:text text-[16px] my-2'>Introduction To User Research In Ux Design</h1>

                        <span className='flex items-center justify-between'>
                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>23hrs 50mins</p>

                            <p className='text-[#A1A1A1] font-medium flex items-center gap-1 lg:text-base text-[4]'>lessons</p>

                        </span>

                        <span className='flex items-center justify-between mt-8'>

                            <span className='flex items-center gap-1'>

                                <img src={Card6} alt="" />

                                <p className='text-black font-bold lg:text-base text-[6px]'>Leonard Victor</p>
                                <p className='text-[#004BD3] font-semibold lg:text-xl text-[8px]'>$15.00</p>

                            </span>

                        </span>

                    </div>

                    <button className='text-white ml-60 bg-[#004DB3] rounded-[4px]  px-6 lg:text-base text-[4px] mt-4 lg:mb-24 mb-12 font-bold capitalize' >explore all courses </button>

                </div>

            </section>

            <section className=' pb-6'>

                      
                        <div class="flex flex-col items-center capitalize">
                          
                          <h1 class="text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4">what our clients are saying</h1>
                          
                          <p class="text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-2/5 mb-16">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                        
                        </div>

                             <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-2 mt-12'>

                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                        <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src="" alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>
                            </span>
                          </span>

                        </div>


                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>

                        <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src="" alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>
                            </span>
                          </span>

                        </div>


                        <div className='lg:p-5 p-3 rounded-[16px] bg-white'>


                               <p className='text-[#A1A1A1] lg:text-sm text-[10px] font-medium'>
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                                </p>

                          <span className='flex items-center justify-between mt-8'>

                            <span className='class="flex items-center gap-1"'>

                              <img src="" alt="" className='class="lg:w-auto w-[40%]' />

                              <p className='text-black font-bold  lg:text-base text-[6px]'>Leonard Victor</p>
                              <p>Product Designer</p>

                              
                            </span>
                          </span>

                        </div>

                        </div>

                        <section className='bg-[#004DB3]'>
                          
                          <div className='container mx-auto px-6 capitalize lg:w-3/4 text-center lg:pt-[88px] pt-8'>
                            <p className='font-medium text-white lg:text-base text-[8px]'>Join Our Community</p>

                            <h1 className='text-white font-bold lg:text-[56px] text-2xl lg:leading-[68.8px]'>are you ready to connect with the future talent of the tech world
                            </h1>

                            <p className='text-white font-medium mt-4 lg:text-base text-[8px]'>meet up with other techstars and grow together</p>

                            <img src={Community} alt="" />


                            <button className='bg-white text-[#004DB3] rounded-[4px] lg:px-8 px-6 lg:py-4 py-3 lg:text-base text-[8px] mt-4 lg:mb-24 mb-12 font-bold capitalize'>join our community</button>
                          </div>

                        </section>


                        <section>

                        <div className='lg:w-3/4 lg:mt-32 my-12 lg:mb-40 lg:px-6 px-4 container mx-auto'> 

                        <div className='flex flex-col items-center capitalize'>

                      <h1 className='text-[#000F24] font-bold lg:text-[56px] text-2xl lg:leading-[70px] capitalize mb-4 lg:text-left text-center'>frequently asked questions</h1>

                      <p className='text-[#A1A1A1] font-medium lg:text-xs text-[8px] lg:leading-[26px] text-center lg:w-1/2 w-3/4 mb-16'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                        </div>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                          <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                            <span className='items-center capitalize lg:text-2xl text-[14px]  false'>is there a free trial available?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                          </p>

                        </article>

                         <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                          <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                            <span className='items-center capitalize lg:text-2xl text-[14px]  false'>is there a free trial available?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                          </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Can I Change My Plan Later?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Are The Courses Lifetime?</span> <img src={Plus} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Do I Get Certified After Taking Courses?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>How Do I Reach Out To Mentors?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                                  </p>

                        </article>

                        <article className='border-b border-[#EAEAEA] h-full flex-wrap basis-0 rounded-sm flex mb-6'>

                                   <p className='flex justify-between relative font-black text-[#000F24] items-center m-auto lg:h-[100px] h-12 w-full lg:px-6'>

                                    <span className='items-center capitalize lg:text-2xl text-[14px]  false'>Do We Get Job Ready After Taking Courses?</span> <img className='lg:w-auto w-4' src={Plus} alt="" />

                                  </p>

                        </article>
                        
                        </div>
                        
                        </section>

                        <section className='bg-[#000F24]'>
                          <div className='container mx-auto px-6 lg:flex items-start justify-between lg:pt-40 pt-16 lg:pb-80 pb-24'>
                            <div className='lg:w-1/4'>
                              <img src={Logo} alt="" />
                              <p className='text-white capitalize lg:w-72 my-6'>reach out to us on any of our social media networks</p>

                              <span className='flex items-center gap-7'>
                                <img src={Facebook} alt="" />
                                <img src={Twiter} alt="" />
                                <img src={Youtube} alt="" />
                                <img src={Mask} alt="" />
                                <img src="" alt="" />
                              </span>

                            </div>

                            <div className='capitalize text-white lg:w-1/4 lg:mt-0 mt-20'>
                            <h1 className="font-semibold text-[32px] mb-8 lg:mt-0 mt-20">useful links</h1>
                              <ul>
                                <li className='cursor-pointer'>home</li>
                                <li className='cursor-pointer'>about us</li>
                                <li className='cursor-pointer'>our courses</li>
                                <li className='cursor-pointer'>testimonial</li>
                                <li className='cursor-pointer'>our community</li>
                              </ul>
                            </div>

                            <div className='class="capitalize text-white w-1/4"'>

                              <h1 className='font-semibold text-[32px] mb-8 lg:mt-0 mt-10'>community</h1>
                              <ul>
                                <li className='cursor-pointer'>help centers</li>
                                <li className='cursor-pointer'>partners</li>
                                <li className='cursor-pointer'>suggestion</li>
                                <li className='cursor-pointer'>blog</li>
                                <li className='cursor-pointer'>newsletter</li>
                              </ul>

                            </div>

                            <div className='capitalize text-white lg:w-1/4 lg:mt-0 mt-10'>

                            <h1 className="font-semibold text-[32px] mb-8">subscribe us</h1>

                            <span className="flex items-center"><input type="text" placeholder="nft123@gmail.com" class="h-12 px-4 bg-[#2A2A2B] outline-none lg:w-auto w-[60%]"/>

                            <button class="bg-[#054FB3] text-white text-sm font-medium h-12 whitespace-pre px-4 capitalize">send message</button>
                            </span>

                            </div>

                          </div>
                        </section>
                      

                    </section>



        </main>

        
 
    </div>
  )
}
