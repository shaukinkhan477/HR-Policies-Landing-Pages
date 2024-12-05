import React from 'react';


import feedbackForm from "../assets/feedbackForm.svg";

const FeedbackForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden w-[90%] max-w-6xl">
        {/* Background Shape */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-green-100 rounded-full blur-2xl"></div>
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-20">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Let's Get in <span className="text-blue-600">Touch!</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Have a question or need assistance? Reach out to us via email,
              phone, or the contact form below. We're eager to assist you.
            </p>
            <p className="text-green-600 font-semibold text-lg">
              Nice hearing from you!
            </p>
            <div>
              <img
                src={feedbackForm}
                alt="People discussing"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-green-50 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
