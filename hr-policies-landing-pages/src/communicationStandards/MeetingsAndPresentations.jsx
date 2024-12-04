import React from 'react';
import {
  PresentationChartBarIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

import MeetingPreparationImage from '../assets/meeting_preparation.jpg';
import MeetingConductImage from '../assets/meeting_conduct.jpg';

const MeetingsAndPresentations = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
        <PresentationChartBarIcon className="h-8 w-8 text-green-600 mr-2" />
        Meetings and Presentations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Preparation */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <CalendarDaysIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">Preparation</h3>
          </div>
          <img
            src={MeetingPreparationImage}
            alt="Meeting Preparation"
            className="w-full h-44 object-cover mb-4"
          />
          <p className="text-gray-600">
            Effective meetings start with thorough preparation. Set clear objectives, create an agenda, and distribute it in advance. Ensure all necessary materials are ready and participants are informed about their roles.
          </p>
        </div>

        {/* Conduct */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <HandRaisedIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">Conduct</h3>
          </div>
          <img
            src={MeetingConductImage}
            alt="Meeting Conduct"
            className="w-full h-44 object-cover mb-4"
          />
          <p className="text-gray-600">
            During meetings, engage respectfully and stay focused on the agenda. Encourage open dialogue, listen actively, and avoid interruptions. Summarize key points and define action items before concluding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingsAndPresentations;
