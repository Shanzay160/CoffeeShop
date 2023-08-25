import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-black">&copy; 2024 Travel Adventures. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-black hover:text-white mx-4">
            Terms of Use
          </a>
          <a href="#" className="text-black hover:text-white mx-4">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
