import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';


const ResourcesAndSupport = () => {
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
    <section ref={ref} className="my-16">
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Resources and Support
      </motion.h2>
      <motion.div
        className="space-y-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <a
            href="#"
            className="text-green-600 hover:underline"
          >
            Download Communication Guidelines PDF
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-green-600 hover:underline"
          >
            Access Online Training Modules
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-green-600 hover:underline"
          >
            Frequently Asked Questions
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ResourcesAndSupport;
