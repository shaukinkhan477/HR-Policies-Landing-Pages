import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AtSymbolIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import EmailProtocolsImage from "../../assets/communicationStandardsImg//email_protocols.jpg";
import InstantMessagingImage from "../../assets/communicationStandardsImg//instant_messaging.jpg";

const DigitalCommunication = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="section26" ref={ref} className="mb-12">
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-8 flex items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AtSymbolIcon className="h-8 w-8 text-green-600 mr-2" />
        Digital Communication
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Protocols */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <InboxArrowDownIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              Email Protocols
            </h3>
          </div>
          <img
            src={EmailProtocolsImage}
            alt="Email Protocols"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Use clear and concise subject lines that reflect the email content.
            Include a professional signature with your name, title, and contact
            information. Add confidentiality notices when appropriate to protect
            sensitive information.
          </p>
        </motion.div>

        {/* Instant Messaging */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              Instant Messaging
            </h3>
          </div>
          <img
            src={InstantMessagingImage}
            alt="Instant Messaging"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Use instant messaging for quick, informal communication during work
            hours. Maintain professionalism, and avoid sharing confidential
            information. Be mindful of availability statuses and respect
            colleagues' time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalCommunication;
