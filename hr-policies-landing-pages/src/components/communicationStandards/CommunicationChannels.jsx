import React from "react";
import {
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const CommunicationChannels = () => {
  return (
    <div id="section22" className="mb-12">
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Communication Channels
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <EnvelopeIcon className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600">
            Use for formal communications and when detailed information is
            required.
          </p>
        </div>
        {/* Intranet */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Company Intranet</h3>
          <p className="text-gray-600">
            Access company resources, updates, and collaborate with teams.
          </p>
        </div>
        {/* Messaging Apps */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <PhoneIcon className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Messaging Apps</h3>
          <p className="text-gray-600">
            For quick, informal communications during work hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunicationChannels;
