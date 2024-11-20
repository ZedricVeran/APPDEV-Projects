import React from 'react';
import './index.css'; // Make sure to import your CSS file if not already imported

export default function Warranty() {
  return (
    <div className="warranty-container">
      <div className="map-container">
        <h3>Visit Us</h3>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.221548162173!2d-122.40100458467986!3d37.783252579757074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f9d08423d%3A0x22aaf41f928bd72e!2sGoogle%20HQ!5e0!3m2!1sen!2sus!4v1615939829042!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="google-map"
        ></iframe>
      </div>
      <h2>Warranty and Support</h2>
      <p>Warranty Period: 2 years from the date of purchase.</p>
      <p>Customer Support: For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.</p>
      <p>Manufacturer’s Website: 
        <a href="http://www.keyboardcompany.com" target="_blank" rel="noopener noreferrer">www.keyboardcompany.com</a>
      </p>
      <p>Customer Support Email: support@keyboardcompany.com</p>
      <p>Support Hotline: 1-800-555-1234</p>
    </div>
  );
}
