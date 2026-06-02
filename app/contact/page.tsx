import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-green-400">Contact Us</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 max-w-3xl leading-tight">
            Let&apos;s Discuss Your Next Project
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl">
            Whether you&apos;re exploring renewable energy opportunities,
            infrastructure initiatives or market-entry strategies, our team is
            ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Side */}
            <div>
              <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Get In Touch</p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
                Contact Information
              </h2>

              <p className="mt-5 text-slate-600 text-sm sm:text-base">
                Reach out to discuss project opportunities, partnerships or
                business collaboration.
              </p>

              <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
                <div className="bg-white border rounded-3xl p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Office Address</h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base">Uttara Tower Office</p>
                  <p className="text-slate-600 text-sm sm:text-base">Uttara, Dhaka, Bangladesh</p>
                </div>

                <div className="bg-white border rounded-3xl p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Email</h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base">info@greenbridge.com</p>
                </div>

                <div className="bg-white border rounded-3xl p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Business Hours</h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base">Sunday – Thursday</p>
                  <p className="text-slate-600 text-sm sm:text-base">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right Side — Inquiry Form */}
            <div>
              <div className="bg-white border rounded-3xl p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Send An Inquiry</h3>

                <p className="mt-3 md:mt-4 text-slate-600 text-sm sm:text-base">
                  Complete the form below and our team will get back to you.
                </p>

                <form className="mt-6 md:mt-8 space-y-4 md:space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base"
                  />
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-green-600 transition-colors text-sm sm:text-base resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-3.5 sm:py-4 rounded-xl hover:bg-green-800 transition-colors font-semibold text-sm sm:text-base"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-16 md:pb-28">
        <div className="container-custom">
          <div className="mb-8 md:mb-10">
            <p className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider">Location</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Visit Our Office</h2>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-white">
            {/* <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=23.861125203452882,90.3995985806729&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0"
            /> */}
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=23.861125203452882,90.3995985806729&z=16&output=embed"
              className="w-full h-[300px] md:h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 lg:py-28">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Ready To Explore Opportunities?
          </h2>

          <p className="mt-5 md:mt-6 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg">
            Let&apos;s discuss renewable energy, infrastructure development and
            strategic partnership opportunities in Bangladesh.
          </p>

          <Link
            href="/contact"
            className="mt-8 md:mt-10 inline-flex items-center justify-center bg-green-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors text-sm sm:text-base"
          >
            Start A Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
