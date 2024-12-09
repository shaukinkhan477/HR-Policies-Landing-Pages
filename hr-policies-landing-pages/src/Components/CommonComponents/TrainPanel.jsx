import React, { useState, useEffect } from 'react';
import './TrainPanel.css';

const data_training = [
  {
    policy_name: "Communication_Standards",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://www.investopedia.com/thmb/rGOF-QKE0eYuw246KZxYS2u7wAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/payroll-4191484-3x2-final-1-008077377d4a4d36bec1424f414b0d9d.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://www.indiafilings.com/learn/wp-content/uploads/2023/10/TDS.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqbYL6JlNQPJt1aQ13g7vSOSMBsbhyP0LyQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Payroll_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://www.investopedia.com/thmb/rGOF-QKE0eYuw246KZxYS2u7wAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/payroll-4191484-3x2-final-1-008077377d4a4d36bec1424f414b0d9d.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://www.indiafilings.com/learn/wp-content/uploads/2023/10/TDS.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqbYL6JlNQPJt1aQ13g7vSOSMBsbhyP0LyQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Performance_Expectations",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Leave_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Exit_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Payroll_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Anti-Harassment_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  },
  {
    policy_name: "Confidential_Policy",
    train_data: [
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://mybillbook.in/s/wp-content//uploads/2022/11/payment-voucher-format.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG5clhTjo1uL5NMJDQxFGX6V8Ij0nn5-azQ&s",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://a.storyblok.com/f/169992/1159x348/7b6014b2bd/hp-logo.png",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      },
      {
        title: "Finance Operate Service",
        description: "How to experience the best finance service without glitches",
        image_content: "https://i.ytimg.com/vi/E2NWi0WDf6Y/maxresdefault.jpg",
        url_redirect: "https://www.youtube.com/watch?v=7Iux49bD6ZM"
      }
    ]
  }
];

const TrainPanel = ({ policy_name }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Initially no card is active
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]); // To track 3 visible cards at a time
  const [filteredData, setFilteredData] = useState([]);

  // Use useEffect to filter the data based on the passed policy_name prop
  useEffect(() => {
    const policyData = data_training.find((data) => data.policy_name === policy_name);
    if (policyData) {
      setFilteredData(policyData.train_data);
    } else {
      setFilteredData([]); // If no matching policy found, clear the data
    }
  }, [policy_name]);

  // Function to update the visible cards based on activeIndex
  const updateVisibleCards = (direction) => {
    let newIndex = visibleCards[1]; // The middle card in the current visible set will be used as the reference point
    if (direction === 'next') {
      newIndex = (newIndex + 1) % filteredData.length;
    } else if (direction === 'prev') {
      newIndex = (newIndex - 1 + filteredData.length) % filteredData.length;
    }
    const newVisibleCards = [
      (newIndex - 1 + filteredData.length) % filteredData.length,
      newIndex,
      (newIndex + 1) % filteredData.length,
    ];
    setVisibleCards(newVisibleCards);
    setActiveIndex(newIndex); // Set the middle card as active
  };

  // Handle hover event to highlight a card
  const handleCardHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="wrapper1">
      <div className="item-bg" />
      <div className="news-slider">
        <div className="heading_tab">CORPORATE TRAINING</div>
        <div className="news-slider__wrp">
          {filteredData.length > 0 ? (
            visibleCards.map((index) => (
              <div
                key={index}
                className={`news-slider__item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => handleCardHover(index)} // Handle hover
              >
                <a href={filteredData[index].url_redirect} className={`news__item ${activeIndex === index ? 'highlighted' : ''}`}>
                  <div className="news-date">
                    <span className="news-date__title">{24 + index}</span>
                    <span className="news-date__txt">May</span>
                  </div>
                  <div className="news__title">{filteredData[index].title}</div>
                  <p className="news__txt">{filteredData[index].description}</p>
                  <div className="news__img">
                    <img
                      className="img_card"
                      src={filteredData[index].image_content}
                      alt={filteredData[index].title}
                    />
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No data available for this policy.</p>
          )}
        </div>

        <div className="news-slider__ctr">
          <div className="news-slider__arrows">
            <button className="news-slider__arrow news-slider-prev" onClick={() => updateVisibleCards('prev')}>
              <svg className="icon icon-arrow-left">
                <use xlinkHref="#icon-arrow-left" />
              </svg>
            </button>
            <button className="news-slider__arrow news-slider-next" onClick={() => updateVisibleCards('next')}>
              <svg className="icon icon-arrow-right">
                <use xlinkHref="#icon-arrow-right" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <svg hidden="hidden">
        <defs>
          <symbol id="icon-arrow-left" viewBox="0 0 32 32">
            <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" />
          </symbol>
          <symbol id="icon-arrow-right" viewBox="0 0 32 32">
            <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" />
          </symbol>
        </defs>
      </svg>
    </div>
  );
};

export default TrainPanel;
