import React, { useState } from 'react';
import '../styles/Faq.css';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqCategoriesType {
    General: FaqItem[];
    Application: FaqItem[];
    Event: FaqItem[];
}

const Faq = () => {
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
    const [activeTab, setActiveTab] = useState<'General' | 'Application' | 'Event'>('General'); // 'General', 'Application', 'Event'

    const faqCategories: FaqCategoriesType = {
        General: [
            {
                question: "What is a hackathon?",
                answer: "A hackathon is a time-limited event where individuals or teams collaborate intensively on software or hardware projects. Participants build apps, websites, or prototypes to solve problems or showcase creative ideas, often competing for prizes."
            },
            {
                question: "Who can participate in DuploHacks?",
                answer: "DuploHacks is open to all high school students from around the world. Whether you're a seasoned programmer or a complete beginner, you're welcome to join!"
            },
            {
                question: "Do I need to know how to code to participate?",
                answer: "Absolutely not! DuploHacks is for all skill levels. We'll have mentors, workshops, and resources available to help you learn and build your project from scratch."
            },
            {
                question: "How many people can be in a team?",
                answer: "Team sizes can be between 2 to 4 members. If you don't have a team, don't worry! We'll have team-matching activities at the event."
            },
            {
                question: "Is DuploHacks an in-person or virtual event?",
                answer: "DuploHacks will be an in-person event, bringing together hackers from across the region for a unique experience. Details about the venue will be announced soon."
            }
        ],
        Application: [
            {
                question: "When do applications open?",
                answer: "Applications for DuploHacks 2025 will open soon! Keep an eye on our website and social media for announcements."
            },
            {
                question: "What is the application process like?",
                answer: "Our application process is simple and designed to help us understand your interests and motivations. We'll ask a few questions about your experience (or lack thereof) and what you hope to gain from DuploHacks."
            },
            {
                question: "When will I know if I'm accepted?",
                answer: "Accepted applicants will be notified via email approximately two weeks after the application deadline. Please ensure your contact information is correct."
            },
            {
                question: "Is there an application fee?",
                answer: "No, applying to DuploHacks is completely free! We believe in providing accessible opportunities for all students."
            },
        ],
        Event: [
            {
                question: "What should I bring to the hackathon?",
                answer: "Bring your laptop, charger, any necessary peripherals, and a positive attitude! We'll provide food, drinks, and a comfortable environment for hacking."
            },
            {
                question: "Will there be mentors available?",
                answer: "Yes, experienced mentors from various tech backgrounds will be available throughout the event to provide guidance, answer questions, and help you overcome challenges."
            },
            {
                question: "What kind of workshops will be offered?",
                answer: "We'll offer a variety of workshops catering to different skill levels, from introductory programming to advanced topics in specific technologies. A detailed schedule will be released closer to the event date."
            },
            {
                question: "Will food be provided?",
                answer: "Absolutely! We'll provide meals, snacks, and beverages throughout the entire hackathon to keep you energized."
            },
            {
                question: "What are the judging criteria?",
                answer: "Projects will typically be judged on criteria such as originality, technical difficulty, usefulness, and presentation. More specific judging details will be provided at the kickoff."
            },
        ],
    };

    const toggleItem = (index: number) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="faq-container">
            <div className="centered-grey-heading">
                [frequently asked questions]
            </div>
            <div className="faq-heading">
                FAQ
            </div>

            <div className="faq-tabs">
                {Object.keys(faqCategories).map(category => (
                    <button 
                        key={category} 
                        className={`faq-tab-button ${activeTab === category ? 'active' : ''}`}
                        onClick={() => setActiveTab(category as 'General' | 'Application' | 'Event')}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <section className="faq-grid">
                {faqCategories[activeTab].map((item: FaqItem, index: number) => (
                    <div 
                        key={index} 
                        className="faq-item"
                    >
                        <button 
                            onClick={() => toggleItem(index)}
                            className={`faq-question ${expandedItems[index] ? 'expanded' : ''}`}
                            aria-expanded={expandedItems[index]}
                            aria-controls={`faq-answer-${index}`}
                        >
                            {item.question}
                        </button>
                        
                        {expandedItems[index] && (
                            <div 
                                id={`faq-answer-${index}`}
                                className="faq-answer"
                                role="region"
                                aria-label={`Answer to ${item.question}`}
                            >
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Faq;
