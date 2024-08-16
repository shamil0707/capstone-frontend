import React from 'react'

import { Link } from 'react-router-dom';
import footer from '../components/footer';




const Home = (props) => {

  
  return (
    <>
      <div>
        <div>
            <div>
                <div>
                    <div></div>
                    <ul>
                    <div></div>
                </ul>
                </div>
                <div className='flex flex-row items-center gap-2 border-gray-400 px-5 py-5 object-contain'>
                <div className='w-full md:9/12 mt-8 md:mt-0 h-96 relative'>
                    <img className='h-full w-full rounded-md border shadow-xl ' src="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_00/men/ms40tna/north-star/MS40TNA-summer-city-dressing-16x9-NS-1.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]" alt="" />
                    <div className='absolute top-16 left-10 mt-10 py-5 px-10 '>
                        <p className='text-white font-bold text-xl mb-4'>New Arrivals</p>
                        <h2 className='text-3xl mt-3 font-bold text-amber-500'>MENS Collection</h2>
                        <button className='bg-black px-8 py-1.5 text-white rounded mt-5 font-bold hover:bg-blue-400 transform transition-transform duration-300 hover:scale-105'><Link to={'/products'}>View</Link></button>
                        <span className=' flex flex-row items-center justify-between mt-5 font-style: italic text-white'>Men’s Bestsellers you'll love</span>
                    </div>

                </div>
                <div className='w-full md:9/12 mt-8 md:mt-0 h-96 relative'>
                    <img className='h-full w-full rounded-md border shadow-xl' src="https://media.glamourmagazine.co.uk/photos/64072a6b67cb8875a09bb7f0/3:2/w_1920,h_1280,c_limit/H&M%20Isla%20Hennes%20070323%201017-Innovation-A4-PR-Landscape-Image-300ppi_4_L.jpg" alt="" />
                    <div className='absolute top-16 left-10 mt-10 py-5 px-10 '>
                        <p className='text-white font-bold text-xl mb-4'>Best collection</p>
                        <h2 className='text-3xl mt-3 font-style: italic text-blue-500 '>Latest women clothing</h2>
                        <button  className='bg-white rounded px-8 py-1.5 text-gray-600 mt-5 font-bold hover:bg-blue-200 transform transition-transform duration-300 hover:scale-105'> <Link to={'/products'}>View</Link></button>
                    </div>
                    <div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
  <section>
  <h2 className='text-xl mt-5 font-bold px-10 flex flex-row items-center justify-center border shadow-md'>Featured products</h2>
  </section>

   </>
  )
}

export default Home;