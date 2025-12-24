const ContactMap = () => {
    return (
      <section className="h-[400px] w-full bg-zinc-900 border-t border-zinc-800 relative grayscale invert-[.9] contrast-125">
          {/* Placeholder for Map - In a real app this would be a Google Maps iframe or component */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1654578965487!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="w-full h-full opacity-60"
          ></iframe>
          
          {/* Custom Marker Overlay (Visual only due to iframe) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-20 h-20 bg-primary/30 rounded-full animate-ping absolute top-0 left-0"></div>
              <div className="w-20 h-20 bg-primary/20 rounded-full absolute top-0 left-0"></div>
          </div>
      </section>
    );
  };
  
  export default ContactMap;
