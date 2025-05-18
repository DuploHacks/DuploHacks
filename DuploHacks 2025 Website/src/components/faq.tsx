import React, { useState } from 'react';
import '../styles/Faq.css';

const Faq = () => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

    const faqItems = [
        {
            question: "What is a hackathon?",
            answer: "A hackathon is a time-limited event where individuals or teams collaborate intensively on software or hardware projects. Participants build apps, websites, or prototypes to solve problems or showcase creative ideas, often competing for prizes."
        },
        {
            question: "What if I've never been to a hackathon before?",
            answer: "That's totally fine! Hackathons welcome participants of all experience levels. Beginners can attend workshops, work with mentors, and join teams to learn while building. It's a great way to get hands-on experience."
        },
        {
            question: "Who can participate?",
            answer: "Hackathons are typically open to students, professionals, and enthusiasts who are interested in coding, design, or tech. Some events may have age or student status restrictions, so check the specific rules for the event."
        },
        {
            question: "How much does it cost?",
            answer: "Most student-focused hackathons are completely free to attend, with meals, swag, and sometimes travel reimbursement included. Always check the event page for details."
        },
        {
            question: "How many people can be in a team?",
            answer: "Team sizes vary by event, but most hackathons allow teams of 2 to 4 people. Some also permit solo participation or larger teams with approval."
        },
        {
            question: "Okay you've convinced me, how do I sign up?",
            answer: "You can sign up by visiting the official DuploHacks website and filling out the registration form. Be sure to register before the deadline to secure your spot."
        }
    ];

    const toggleItem = (index: number) => {
        const rowIndex = Math.floor(index / 2);

        if (expandedRow === rowIndex) {
            setExpandedItems(prev => ({
                ...prev,
                [index]: !prev[index]
            }));
        } else {
            setExpandedRow(rowIndex);
            setExpandedItems({
                [index]: true
            });
        }
    };

    return (
        <div className="faq-container">
            <div className="centered-grey-heading">
                [ FREQUENTLY ASKED QUESTIONS ]
            </div>
            
            <div className="faq-heading">
                FAQ
            </div>

            <section className="faq-grid">
                {faqItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="faq-item"
                    >
                        <h2 
                            onClick={() => toggleItem(index)}
                            className={`faq-question ${expandedItems[index] ? 'expanded' : ''}`}
                        >
                            {item.question}
                        </h2>
                        
                        {expandedItems[index] && (
                            <div className="faq-answer">
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
