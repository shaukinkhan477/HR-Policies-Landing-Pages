import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExclamationCircleIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import ProcedureImage from "../../assets/communicationStandardsImg/procedure.jpg";
import SupportResourcesImage from "../../assets/communicationStandardsImg/support_resources.jpg";

const ConflictResolution = () => {
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
    <div id="section28" ref={ref} className="mb-12">
      <motion.h2
        className="text-2xl font-semibold text-blue-700 mb-8 flex items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-2" />
        Conflict Resolution
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Procedure */}
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
            <ExclamationCircleIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-blue-700">Procedure</h3>
          </div>
          <img
            src={ProcedureImage}
            alt="Conflict Resolution Procedure"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Address misunderstandings promptly by communicating directly with
            the involved parties. Use active listening to understand different
            perspectives. If unresolved, escalate to a supervisor or HR for
            mediation.
          </p>
        </motion.div>

        {/* Support Resources */}
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
            <LifebuoyIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-blue-700">
              Support Resources
            </h3>
          </div>
          <img
            src={SupportResourcesImage}
            alt="Support Resources"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Our HR team is available to assist with conflict resolution. We also
            offer mediation services to facilitate discussions and find mutually
            agreeable solutions. Contact HR at{" "}
            <a
              href="mailto:hr@example.com"
              className="text-green-600 hover:underline"
            >
              hr@example.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+1234567890"
              className="text-green-600 hover:underline"
            >
              +1 (234) 567-890
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConflictResolution;
