import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'collapsed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-2"
      >
        <div className="pb-4 py-4 px-4 text-gray-700 bg-gray-200 rounded-xl mb-4">{content}</div>
      </motion.div>
    </div>
  );
}

export default AccordionItem;
