export default function GoogleMap() {
  return (
    <section className="w-full h-[400px] bg-slate-100 relative overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.070277399518!2d75.83900488715817!3d22.699694900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd61e0be9ac9%3A0xa8bfc2b4c847c05d!2sSmile%20N%20Shine%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1775069886447!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Smile N Shine Dental Clinic Location"
      ></iframe>
    </section>
  );
}
