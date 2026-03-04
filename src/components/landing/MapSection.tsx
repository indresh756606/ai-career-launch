const MapSection = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="ISIT Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7!2d78.5718!3d25.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSipri+Bazar%2C+Jhansi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default MapSection;
