import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">About Us</h1>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white leading-relaxed mb-6">
            At GetMyChai, our mission is to empower individuals and communities by providing a platform for crowdfunding. We believe that every idea deserves a chance to flourish, and we are dedicated to helping you turn your dreams into reality through the power of community support.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-white leading-relaxed mb-6">
            GetMyChai is a dedicated team of passionate individuals committed to fostering creativity and innovation. Our platform is designed to be user-friendly, secure, and effective in connecting you with the resources you need to succeed.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-white leading-relaxed mb-6">
            Founded in [Year], GetMyChai was born out of a desire to make a difference in the world by enabling people to fund their dreams. Whether it's a personal project, a community initiative, or a groundbreaking business idea, we provide the tools and support to help you reach your goals.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-white leading-relaxed mb-6">
            At GetMyChai, we offer a unique combination of features to maximize your crowdfunding success:
          </p>
          <ul className="list-disc list-inside text-white leading-relaxed mb-6">
            <li>Easy-to-use platform for creating and managing campaigns</li>
            <li>Secure payment processing to protect your funds</li>
            <li>Comprehensive support and resources for campaigners</li>
            <li>Vibrant community of backers eager to support innovative ideas</li>
          </ul>
          <p className="text-white leading-relaxed">
            Join us at GetMyChai and be a part of a community that believes in the power of collaboration and support. Together, we can make amazing things happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
    title: 'About - GetMyChai'
}
