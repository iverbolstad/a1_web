const MapComponent = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.7808967171836!2d11.35621657718628!3d63.763939348509815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d650098ebc66d%3A0xa8c4c248999d9791!2sVinstua!5e0!3m2!1sno!2sno!4v1737302770784!5m2!1sno!2sno"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export { MapComponent };
