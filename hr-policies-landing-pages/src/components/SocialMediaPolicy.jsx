import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UserCircleIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import PersonalAccountsImage from '../assets/personal_accounts.jpg';
import CompanyRepresentationImage from '../assets/company_representation.jpg';

const SocialMediaPolicy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="mb-12">
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-8 flex items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* <GlobeAltIcon className="h-8 w-8 text-indigo-600 mr-2" /> */}
        Social Media Policy
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Accounts */}
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
            {/* <UserCircleIcon className="h-10 w-10 text-indigo-600 mr-2" /> */}
            <h3 className="text-xl font-bold text-indigo-600">Personal Accounts</h3>
          </div>
          <img
            src={PersonalAccountsImage}
            alt="Personal Accounts"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Employees should represent themselves responsibly online. While sharing personal views, avoid disclosing confidential information or making statements that could harm the company's reputation. Use privacy settings to control who can view your content.
          </p>
        </motion.div>

        {/* Company Representation */}
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
            {/* <OfficeBuildingIcon className="h-10 w-10 text-indigo-600 mr-2" /> */}
            <h3 className="text-xl font-bold text-indigo-600">Company Representation</h3>
          </div>
          <img
            src={CompanyRepresentationImage}
            alt="Company Representation"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Only authorized personnel may post on behalf of the company. Ensure all content is accurate, professional, and aligns with our brand values. Obtain necessary approvals before sharing official statements or sensitive information.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaPolicy;
