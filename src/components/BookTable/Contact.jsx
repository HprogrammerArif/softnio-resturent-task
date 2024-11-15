import  { useState } from 'react';
// import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import bookTable from "../../assets/images/bookTable.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6ysiswq',  // Replace with your EmailJS Service ID
      'template_digk4x7', // Replace with your EmailJS Template ID
      formData,
      '2zg1zUGnnhNLoEz_z'      // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Successfully Msg Send!')
    }, (err) => {
      console.log('FAILED...', err);
    });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    
<div className=' p-6 bg-cover bg-center mb-12' style={{ backgroundImage: `url(${bookTable})` }}>
  
<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100 my-12">
       
        <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
        <h4 className='font-bold text-xl text-red-700'>Book Now</h4>
        <h2 className='font-bold text-2xl md:text-4xl uppercase'>Book Your Table</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam nulla beatae quasi. Debitis aliquam velit aliquid nisi reiciendis perferendis?</p>
          <div>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Name*"
              className="w-full p-3 rounded bg-transparent border "
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            
            <input
              id="email"
              type="email"
              placeholder='Your Email*'
              required
              className="w-full p-3 rounded border bg-transparent"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="name"
              type="date"
              required
              placeholder="Reservation Date"
              className="w-full p-3 rounded bg-transparent border "
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            
            <input
              id="email"
              type="number"
              placeholder='Total People'
              required
              className="w-full p-3 rounded border bg-transparent"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            
            <textarea
              id="message"
              rows="3"
              required
              placeholder='Message'
              className="w-full p-3 rounded border bg-transparent"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className=" px-3 py-2 text-sm font-bold tracking-wide uppercase bg-[#edd207] text-gray-900">Book Now</button>
        </form>
      </div>
</div>
    
  );
};

export default Contact;