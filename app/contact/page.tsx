export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}

      <section className="bg-slate-900 text-white py-32">
        <div className="container-custom">
          <p className="uppercase tracking-[4px] text-green-400">Contact Us</p>

          <h1 className="text-6xl font-bold mt-4 max-w-4xl">
            Let's Discuss Your Next Project
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl">
            Whether you're exploring renewable energy opportunities,
            infrastructure initiatives or market-entry strategies, our team is
            ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side */}

            <div>
              <p className="text-green-700 font-semibold">GET IN TOUCH</p>

              <h2 className="text-5xl font-bold mt-3">Contact Information</h2>

              <p className="mt-6 text-slate-600">
                Reach out to discuss project opportunities, partnerships or
                business collaboration.
              </p>

              {/* Address */}

              <div className="mt-12 bg-white border rounded-3xl p-8">
                <h3 className="text-2xl font-semibold">Office Address</h3>

                <p className="mt-4 text-slate-600">Uttara Tower Office</p>

                <p className="text-slate-600">Uttara, Dhaka, Bangladesh</p>
              </div>

              {/* Email */}

              <div className="mt-6 bg-white border rounded-3xl p-8">
                <h3 className="text-2xl font-semibold">Email</h3>

                <p className="mt-4 text-slate-600">info@greenbridge.com</p>
              </div>

              {/* Business Hours */}

              <div className="mt-6 bg-white border rounded-3xl p-8">
                <h3 className="text-2xl font-semibold">Business Hours</h3>

                <p className="mt-4 text-slate-600">Sunday – Thursday</p>

                <p className="text-slate-600">9:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <div className="bg-white border rounded-3xl p-10">
                <h3 className="text-3xl font-bold">Send An Inquiry</h3>

                <p className="mt-4 text-slate-600">
                  Complete the form below and our team will get back to you.
                </p>

                <form className="mt-8 space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    className="
                      w-full
                      border
                      rounded-xl
                      px-5
                      py-4
                      outline-none
                    "
                  />

                  <button
                    type="submit"
                    className="
                      w-full
                      bg-green-700
                      text-white
                      py-4
                      rounded-xl
                      hover:bg-green-800
                      transition
                    "
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}

      <section className="pb-28">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-green-700 font-semibold">LOCATION</p>

            <h2 className="text-5xl font-bold mt-3">Visit Our Office</h2>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-white">
            <iframe
              title="Google Map"
              // src="https://www.google.com/maps?q=Uttara,Dhaka,Bangladesh&output=embed"
              src="https://www.google.com/maps?q=23.861125203452882,90.3995985806729&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="bg-slate-900 text-white py-28">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-bold">
            Ready To Explore Opportunities?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300">
            Let's discuss renewable energy, infrastructure development and
            strategic partnership opportunities in Bangladesh.
          </p>

          <button
            className="
              mt-10
              bg-green-700
              px-8
              py-4
              rounded-xl
              hover:bg-green-800
              transition
            "
          >
            Start A Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
