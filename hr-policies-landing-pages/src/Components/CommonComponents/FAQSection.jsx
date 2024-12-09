import React, { useState } from "react";
import './FAQSection.css';

function FeedbackItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="feedback-item">
            <div className="feedback-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9654;</span>
            </div>
            <div className={`feedback-answer ${isOpen ? 'show' : ''}`}>
                {answer}
            </div>
        </div>
    );
}

function FAQSection({ policy_name }) {
  console.log(policy_name)
    const hr_policy_feedback = [
        {
            policy_name: "Confidential_Policy",
            feedback_set: [
                { question: "How was your experience with our service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "How can we improve our service?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {
                  question: "How was your experience with our service?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            ]
        },
        {
            policy_name: "Communication_Standards",
            feedback_set: [
                { question: "How was your experience with our communication?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {
                  question: "How was your experience with our service?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            ]
        },
        {
            policy_name: "Exit_Policy",
            feedback_set: [
                { question: "How was your experience with the exit process?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ]
        },
        {
            policy_name: "Leave_Policy",
            feedback_set: [
                { question: "How was your experience with the leave policy?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ]
        },
        {
            policy_name: "Payroll_Policy",
            feedback_set: [
                { question: "How was your experience with payroll?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                {
                  question: "How was your experience with our service?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                  question: "Any suggestions for improvement?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            ]
        },
        {
            policy_name: "Performance_Expectations",
            feedback_set: [
                { question: "How was your experience with performance expectations?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { question: "Any suggestions for improvement?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ]
        }
    ];

    // Safely find the policy data corresponding to the selected policy_name
    const policyData = hr_policy_feedback.find(policy => policy.policy_name === policy_name);

    // Check if policyData and feedback_set exist
    const feedbacks = policyData ? policyData.feedback_set : [];

    const [visibleFeedbacks, setVisibleFeedbacks] = useState(4);

    const loadMoreFeedbacks = () => {
        setVisibleFeedbacks(prevCount => prevCount + 4);
    };

    return (
        <div className="feedback-section">
            <div className="feedback-title">{policy_name}</div>
            {feedbacks.length > 0 ? (
                feedbacks.slice(0, visibleFeedbacks).map((feedback, index) => (
                    <FeedbackItem key={index} question={feedback.question} answer={feedback.answer} />
                ))
            ) : (
                <p>No feedback available for this policy.</p>
            )}
            {visibleFeedbacks < feedbacks.length && (
                <button className="load-more-btn" onClick={loadMoreFeedbacks}>Load More</button>
            )}
        </div>
    );
}

export default FAQSection;
