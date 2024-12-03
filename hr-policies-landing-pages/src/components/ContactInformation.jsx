import React from 'react';


const ContactInformation = () => {

  return (

    <section className="my-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Contact Information
      </h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-4">
          If you have any questions or need further assistance, please contact our HR department.
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:hr@example.com" className="text-green-600 hover:underline">hr@example.com</a>
        </p>
        <p className="text-gray-700">
          Phone: <a href="tel:+1234567890" className="text-green-600 hover:underline">+00000000000</a>
        </p>
      </div>
    </section>
  );
  
};
  
export default ContactInformation;