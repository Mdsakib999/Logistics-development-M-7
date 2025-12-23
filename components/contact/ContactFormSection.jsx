
const ContactFormSection = () => {
  return (
    <div className="bg-secondary mx-4 sm:mx-8 md:mx-16 lg:mx-0 p-6 md:p-8 rounded-[20px]">
      {/* Form Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Send Message To Us
      </h2>

      {/* Contact Form */}
      <form className="space-y-8 lg:space-y-4">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Row 2: Phone and Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message Textarea */}
        <textarea
          placeholder="Message Here..."
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-secondary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;
