import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] object-cover' src={assets.about_img} alt="About CartVerse" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            CartVerse was founded with a simple belief: great fashion should be accessible to everyone. We curate hand-picked collections across Men, Women, Kids, and Accessories — sourced from trusted manufacturers who share our commitment to quality and craftsmanship.
          </p>
          <p>
            From everyday essentials to statement pieces, our catalog is refreshed each season so you always find something new. Every item goes through a strict quality review before it reaches your doorstep — because you deserve nothing less than the best.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to make stylish, high-quality clothing effortlessly available for every budget. We believe that the way you dress is an expression of who you are — and we are here to help you express yourself with confidence every single day.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every product on CartVerse is carefully vetted. We partner only with manufacturers who meet our rigorous quality standards, so you shop with full confidence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Browse, add to cart, and check out in minutes. With fast delivery, easy returns, and secure payments, shopping on CartVerse is designed to be effortless.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is available 24/7 to help with sizing queries, order tracking, or anything else you need. Your satisfaction is our priority.</p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
