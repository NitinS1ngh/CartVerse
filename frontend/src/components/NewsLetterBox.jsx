import React, { useState } from 'react'

const NewsLetterBox = () => {

    const [result, setResult] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        formData.append("autoresponse", "Thank you for subscribing to CartVerse! We will keep you updated with our latest collections, exclusive deals, and style tips.");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Subscription successful! Thank you.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred. Please try again later.");
        }
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
          Join the CartVerse community! Get exclusive deals, early access to new arrivals, and style tips delivered straight to your inbox.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input name='email' className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
        {result && <p className='text-sm mt-2 text-gray-600'>{result}</p>}
      
    </div>
  )
}

export default NewsLetterBox
