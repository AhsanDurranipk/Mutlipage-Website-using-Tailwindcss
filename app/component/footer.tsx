import React from 'react';

export default function Footer() {
  return (
    <div className="bg-cover bg-center bg-no-repeat text-black py-5 text-center font-sans"style={{ backgroundImage: "url('/img/nav.jpg')" }}>
      <div className="footer-content">
        <span className="block mb-2 text-[20px]">© All copyrights belong to Ahsan Durrani and powered by GIAIC</span>

        <div className="social-links mt-2">
          <a href="https://github.com/AhsanDurranipk/" target="_blank" rel="noopener noreferrer" className="social-icon text-black mx-2 text-[20px] no-underline hover:text-[#1abc9c]">
            <i className="fab fa-github"></i> 
          </a>
          <a href="https://www.linkedin.com/in/ahsan-durrani/" target="_blank" rel="noopener noreferrer" className="social-icon text-black mx-2 text-[20px] no-underline hover:text-[#1abc9c]">
            <i className="fab fa-linkedin"></i> 
          </a>
        </div>
      </div>
    </div>
  );
}
