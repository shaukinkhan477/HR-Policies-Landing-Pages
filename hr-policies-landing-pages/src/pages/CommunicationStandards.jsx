import { React } from "react";
import { motion } from "framer-motion";

import AccordionItem from "../components/communicationStandards/AccordionItem";
import SocialMediaPolicy from "../components/communicationStandards/SocialMediaPolicy";
import DigitalCommunication from "../components/communicationStandards/DigitalCommunication";
import ConflictResolution from "../components/communicationStandards/ConflictResolution";
import CommunicationEtiquette from "../components/communicationStandards/CommunicationEtiquette";
import MeetingsAndPresentations from "../components/communicationStandards/MeetingsAndPresentations";
import CommunicationChannels from "../components/communicationStandards/CommunicationChannels";
import ResourcesAndSupport from "../components/communicationStandards/ResourcesAndSupport";
import ContactInformation from "../components/communicationStandards/ContactInformation";
import FeedbackForm from "../components/communicationStandards/FeedbackForm";
import HeroSection from "../components/confidentiality/HeroSection";
import HRPolicy from "../components/confidentiality/HRPolicy";



function CommunicationStandards() {
  // Define the accordion data for Communication standards in bussiness operations
  const accordionData = [
    {
      title: "Benefits of communication standards",
      content:
        "Communication standards are the rules and best practices that define how, when, and what to communicate in different situations and channels. They help to align the expectations and goals of all the parties involved, to reduce ambiguity and noise, and to increase efficiency and quality. Communication standards can also enhance your brand image, customer satisfaction, and employee engagement by creating a professional and consistent tone and style across your business operations.",
    },
    {
      title: "How to create communication standards",
      content:
        "The first step to create communication standards is to analyze your current communication processes and identify the gaps and challenges. You can use tools like SWOT analysis, surveys, interviews, or audits to collect data and feedback from your stakeholders. Then, you need to define your communication objectives, audience, and message for each scenario and channel. You can use frameworks like SMART, RACI, or KISS to guide your decision-making. Finally, you need to document your communication standards in a clear and accessible way, using templates, checklists, or guidelines.",
    },
    {
      title: "How to implement communication standards",
      content:
        "Once you have your communication standards ready, you need to communicate them to your team and train them on how to use them. You can use methods like workshops, webinars, or e-learning to explain the rationale and benefits of the standards, and to provide examples and scenarios. You also need to provide the necessary tools and resources to support the implementation, such as software, platforms, or devices. Moreover, you need to establish a system of accountability and recognition to motivate and reward your team for following the standards",
    },
    {
      title: "How to monitor communication standards",
      content:
        "Implementing communication standards is not a one-time event, but an ongoing process that requires regular monitoring and evaluation. You need to collect and analyze data and feedback on the performance and impact of your communication standards, using metrics like response time, error rate, customer satisfaction, or employee engagement. You also need to solicit and listen to the suggestions and concerns of your team and stakeholders, using methods like surveys, interviews, or focus groups. Furthermore, you need to review and update your communication standards periodically, based on the results and feedback.",
    },
    {
      title: "How to improve communication standards",
      content:
        "Monitoring communication standards is not enough if you do not act on the findings and feedback. You need to identify the areas of improvement and implement the necessary changes and adjustments. You can use tools like PDCA, DMAIC, or AAR to structure your improvement process. You also need to communicate the changes and reasons to your team and stakeholders, and provide them with the updated tools and resources. Additionally, you need to celebrate and share the successes and lessons learned from your improvement efforts.",
    },
  ];

  // Accordion data for the "8 Golden Rules"
  const goldenRulesData = [
    {
      title: "Golden Rule #1: Avoid Communication Overload",
      content:
        "Send the right message to the right people at the right time. Less is more., no less. Less is more. Keep that concept in your head at all times. In this age of information overload, where inboxes are straining, phones are ringing, and direct messages are constantly pinging, your employees are already pushed to the limit. And our workloads are increasing with each passing year. You can’t expect employees to take time out to read a 10-page report on the latest business successes or a complex guide to the new file-sharing system.",
    },
    {
      title: "Golden Rule #2: Use the Right Tools",
      content:
        "Use internal communication tools that break down barriers, not ones that create them. The working landscape has changed beyond recognition over the last few years, and our approach to internal communications needs to adapt. With the rise in remote and hybrid working patterns, expecting staff to battle technology issues to access the latest company news is no longer acceptable. One of the key reasons the traditional employee intranet often fails is its propensity to create barriers rather than open doors.",
    },
    {
      title: "Golden Rule #3: Encourage Collaboration",
      content:
        "Teams and departments shouldn’t operate in isolation. Open up a social space. What is effective communication in the workplace? It’s getting people talking. Collaboration is hard enough to promote at the best of times. But when remote and hybrid working is added into the mix, it becomes an issue that needs addressing. The ability to collaborate with co-workers is becoming more difficult as colleagues lose the common ground of the shared office space. According to a report by The Economist Intelligence Unit, this can have a powerful effect on efficiency and loyalty.",
    },
    {
      title: "Golden Rule #4: Implement Two-Way Communication",
      content:
        "Give employees a channel to feedback on their opinions and share ideas What is two-way communication? Think of tennis. A great match is one where volleys are traded back and forth over the net. It’s not much of a game if it’s just won on serves alone. Similarly, effective communication in business happens when there is a dialogue that goes back and forth between the leadership team and employees. Why is effective communication important in the workplace? Because if there’s no dialogue, there’s no buy-in from your employees. What you’re doing is creating a democratic environment where people share their thoughts and ideas, regardless of the corporate hierarchy. This not only helps you to solve problems by raising awareness of issues on the shop floor, but it also raises engagement levels. Employees need to feel they have a voice. However, it is essential to remember to act on the feedback you gather. One common internal communication mistake is collecting feedback but failing to deliver measurable outcomes.",
    },
    {
      title: "Golden Rule #5: Focus on Mental Wellbeing",
      content:
        "Acknowledge the importance of mental well-being at work Since the pandemic, we have seen a sharp increase in mental health issues in the workplace and beyond. While this is definitely not a positive outcome, it has positively affected internal communication trends. We’re seeing more mental health initiatives woven into strategies that previously left this area unacknowledged. And it really highlights the importance of effective communication in the workplace.",
    },
    {
      title: "Golden Rule #6: Recognise Success",
      content:
        "Recognition is a powerful entity. Just the smallest amount of praise can make all the difference between employees feeling appreciated or undervalued. In fact, a survey by the APA revealed that employees who feel valued report “higher levels of engagement, satisfaction, and motivation”. If you want to explain the principles of effective communication in the workplace, just point your managers to the outstanding results of recognition programmes.",
    },
    {
      title: "Golden Rule #7: Inspire Action",
      content:
        "Communications should involve, motivate and inspire employees What is effective communication in the workplace? Simple. You need to make sure your messages really connect with your audience. Here, the difference between operational communication and internal communication is crucial. While it is essential to convey the key information, procedures, and rules required for an employee to operate effectively, you also need to talk to them in a way that resonates. This is key for hybrid workers, who often operate away from managements eyes.",
    },
    {
      title: "Golden Rule #8: Measure Your Impact",
      content:
        "Monitor the impact of your communications and adapt your strategy accordingly As the founder of GoDaddy once said, “Anything that is measured and watched, improves.” This is especially relevant in the case of internal communications. Unless you know who has read your communications and what action they have taken as a result, you are operating blind. In the current business climate, with so many employees working remotely, keeping track of internal communications metrics has never been more critical.",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="mt-24">
        <HeroSection />
      </div>

      <div className="flex">
        <div>
          <HRPolicy />
        </div>
        <div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <motion.h1
                className="text-3xl font-bold text-green-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Reecocefe Communication Standards Policies
              </motion.h1>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Effective communication is key to our success. This guide
                outlines our communication policies and expectations to ensure
                clarity and mutual understanding across the organization.
              </motion.p>
            </section>

            {/* Core Sections */}
            <section>
              {/* Accordion Section for Communication standards in bussiness operations */}
              <section id="section21" className="my-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  What's the best way to enforce communication standards in
                  business operations?
                </h2>
                <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
                  {accordionData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </section>

              {/* Communication Channels Section */}
              <CommunicationChannels />

              {/* Accordion Section 8 Golden Rules for Effective Communication  */}
              <section id="section23" className="my-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Effective Communication in the Workplace: 8 Golden Rules for
                  Success
                </h2>
                <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
                  {goldenRulesData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </section>

              {/* Communication Etiquette Section */}
              <CommunicationEtiquette />

              {/* Meetings and Presentations Section */}
              <MeetingsAndPresentations />

              {/* Digital Communication Section */}
              <DigitalCommunication />

              {/* Social Media Policy Section */}
              <SocialMediaPolicy />

              {/* Conflict Resolution Section */}
              <ConflictResolution />

              {/* Additional Sections */}
              {/* You can continue adding sections following the same pattern */}
            </section>

            {/* Resources and Support Section */}
            <ResourcesAndSupport />

            {/* Contact Section */}
            <ContactInformation />

            {/* Feedback Form */}
            <FeedbackForm />
            
          </main>
        </div>
      </div>
      {/* Main Content */}
    </div>
  );
}

export default CommunicationStandards;