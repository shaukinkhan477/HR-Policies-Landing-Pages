import React from "react";

const FeedbackForm = () => {
  return (
    <div id="section292" className="bg-white shadow mt-16 rounded-lg">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 mb-18">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Feedback</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 block w-full border border-green-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 block w-full border border-green-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 p-2 block w-full border border-green-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Your feedback"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-900 hover:bg-indigo-800"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
