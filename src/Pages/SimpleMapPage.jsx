
const SimpleMapPage = () => {
  return (
    <div className="relative h-0 pb-[56.25%] mx-5 overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.064829186845!2d90.36965547451736!3d23.745067488982635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c7f464287%3A0xda3fcc74193d728!2s9a%20Satmasjid%20Road%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1699384906333!5m2!1sen!2sbd" 
      width="1200" 
      height="450" 
      className="absolute left-0 bottom-5 h-full w-full" 
      // allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default SimpleMapPage;