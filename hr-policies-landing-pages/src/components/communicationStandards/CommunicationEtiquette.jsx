import { React, useEffect } from "react";
import {
  DocumentTextIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import ProfessionalLanguageImage from "../../assets/communicationStandardsImg/professional_lang.jpg";
import ResponseTimesImage from "../../assets/communicationStandardsImg/response_time.jpg";
import CulturalSensitivityImage from "../../assets/communicationStandardsImg/cultural_sensitivity.jpg";

const CommunicationEtiquette = () => {
  return (
    <div id="section24" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
        <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-green-600 mr-2" />
        Communication Etiquette
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Professional Language */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <DocumentTextIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              Professional Language
            </h3>
          </div>
          <img
            src={ProfessionalLanguageImage}
            alt="Professional Language"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Maintain a professional tone in all communications. Avoid slang and
            informal expressions.
          </p>
        </div>

        {/* Response Times */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <ClockIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              Response Times
            </h3>
          </div>
          <img
            src={ResponseTimesImage}
            alt="Response Times"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Aim to respond to messages within 24 hours during business days.
          </p>
        </div>

        {/* Cultural Sensitivity */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <GlobeAltIcon className="h-10 w-10 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-indigo-600">
              Cultural Sensitivity
            </h3>
          </div>
          <img
            src={CulturalSensitivityImage}
            alt="Cultural Sensitivity"
            className="w-full h-50 object-cover mb-4"
          />
          <p className="text-gray-600">
            Be respectful of cultural differences and promote inclusivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunicationEtiquette;
