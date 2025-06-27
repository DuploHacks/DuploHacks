import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Team.css';
import Navbar from './Navbar';

// Import images using the new path structure
const images = {
  Simrik: new URL('../assets/Simrik.webp', import.meta.url).href,
  Sehan: new URL('../assets/Sehan.webp', import.meta.url).href,
  Sarveshwar: new URL('../assets/sarv - Sarveshwar Senthil Kumar.webp', import.meta.url).href,
  OwenWu: new URL('../assets/Owenwu.jpg', import.meta.url).href,
  Muhammad: new URL('../assets/Muhammud.jpg', import.meta.url).href,
  Megh: new URL('../assets/Megh.webp', import.meta.url).href,
  John: new URL('../assets/John.webp', import.meta.url).href,
  JasonTran: new URL('../assets/Jason_Tran.webp', import.meta.url).href,
  Ella: new URL('../assets/Ella.webp', import.meta.url).href,
  Dasha: new URL('../assets/Dasha.webp', import.meta.url).href,
  Weijie: new URL('../assets/weijie.webp', import.meta.url).href,
  Will: new URL('../assets/will.webp', import.meta.url).href,
  Sathvik: new URL('../assets/sathvik (3).webp', import.meta.url).href,
  James: new URL('../assets/James.webp', import.meta.url).href,
  Maizah: new URL('../assets/Maizah.webp', import.meta.url).href,
  Gursaaz: new URL('../assets/gursaaz.webp', import.meta.url).href,
  Bowen: new URL('../assets/bowen.png', import.meta.url).href,
  BillBasnet: new URL('../assets/Bill Basnet.webp', import.meta.url).href,
};

const teamData = [
  {
    group: 'Co-Leads & Founders',
    members: [
      { 
        name: 'Jason<br/>Tran', 
        img: images.JasonTran,
        facts: [
          '• Co-Founder of DuploHacks',
          '• Passionate about AI and Machine Learning',
          '• Loves solving complex problems'
        ],
        linkedin: 'https://www.linkedin.com/in/jason-tran-placeholder'
      },
      { 
        name: 'Sathvik<br/>Haridasu', 
        img: images.Sathvik,
        facts: [
          '• Co-Founder of DuploHacks',
          '• Expert in Web Development',
          '• Enjoys building innovative solutions'
        ],
        linkedin: 'https://www.linkedin.com/in/sathvik-haridasu/'
      },
      { 
        name: 'Simrik<br/>Shivas', 
        img: images.Simrik,
        facts: [
          '• Co-Founder of DuploHacks',
          '• Skilled in UI/UX Design',
          '• Creative problem solver'
        ],
        linkedin: 'https://www.linkedin.com/in/simrik-shivas'
      },
    ],
  },
  {
    group: 'Web-Tech',
    members: [
      { 
        name: 'Haoshi (Owen)<br/>Wu', 
        img: images.OwenWu,
        facts: [
          '• Back End Developer',
          '• Expert in modern web technologies',
          '• Loves creating responsive designs'
        ],
        linkedin: 'https://www.linkedin.com/in/haoshi-wu-weewoo14/'
      },
      { 
        name: 'Sehan<br/>Munir', 
        img: images.Sehan,
        facts: [
          '• Front End Developer',
          '• Specializes in API development',
          '• Enjoys system architecture'
        ],
        linkedin: 'https://www.linkedin.com/in/sehanmunir/'
      },
      { 
        name: 'Bowen<br/>Shao', 
        img: images.Bowen,
        facts: [
          '• Back End Developer',
          '• Passionate about web security',
          '• Loves learning new technologies'
        ],
        linkedin: 'https://www.linkedin.com/in/bowen-shao-placeholder'
      },
    ],
  },
  {
    group: 'Finance',
    members: [
      { 
        name: 'Megh<br/>Patel', 
        img: images.Megh,
        facts: [
          '• Finance Team Member',
          '• Expert in budget management',
          '• Strategic financial planning'
        ],
        linkedin: 'https://www.linkedin.com/in/megh-patel-placeholder'
      },
      { 
        name: 'John<br/>Fu', 
        img: images.John,
        facts: [
          '• Finance Team Member',
          '• Specializes in financial analysis',
          '• Detail-oriented professional'
        ],
        linkedin: 'https://www.linkedin.com/in/john-fu-placeholder'
      },
      { 
        name: 'Muhammad<br/>Ahmed', 
        img: images.Muhammad,
        facts: [
          '• Finance Team Member',
          '• Expert in financial modeling',
          '• Strong analytical skills'
        ],
        linkedin: 'https://www.linkedin.com/in/muhammad-ahmed-placeholder'
      },
      { 
        name: 'James<br/>Yang', 
        img: images.James,
        facts: [
          '• Finance Team Member',
          '• Specializes in investment strategies',
          '• Passionate about financial technology'
        ],
        linkedin: 'https://www.linkedin.com/in/james-yang-placeholder'
      },
    ],
  },
  {
    group: 'Marketing/Design',
    members: [
      { 
        name: 'Maizah<br/>Tanveer', 
        img: images.Maizah,
        facts: [
          '• Marketing Lead',
          '• Creative strategist',
          '• Expert in brand development'
        ],
        linkedin: 'https://www.linkedin.com/in/maizah-tanveer-placeholder'
      },
      { 
        name: 'Bill<br/>Basnet', 
        img: images.BillBasnet,
        facts: [
          '• Design Team Member',
          '• UI/UX specialist',
          '• Creative problem solver'
        ],
        linkedin: 'https://www.linkedin.com/in/bill-basnet-044252310/'
      },
      { 
        name: 'Gursaaz<br/>Gund', 
        img: images.Gursaaz,
        facts: [
          '• Marketing Team Member',
          '• Social media expert',
          '• Content creation specialist'
        ],
        linkedin: 'https://www.linkedin.com/in/gursaaz-gund-placeholder'
      },
      { 
        name: 'William<br/>Lovegrove', 
        img: images.Will,
        facts: [
          '• Design Team Member',
          '• Graphic design expert',
          '• Visual communication specialist'
        ],
        linkedin: 'https://www.linkedin.com/in/william-lovegrove-572919310/'
      },
    ],
  },
  {
    group: 'Logistics',
    members: [
      { 
        name: 'Dasha<br/>Turetska', 
        img: images.Dasha,
        facts: [
          '• Logistics Team Member',
          '• Event planning expert',
          '• Detail-oriented organizer'
        ],
        linkedin: 'https://www.linkedin.com/in/dasha-turetska-507895317/'
      },
      { 
        name: 'Ella<br/>Li', 
        img: images.Ella,
        facts: [
          '• Logistics Team Member',
          '• Operations specialist',
          '• Efficient problem solver'
        ],
        linkedin: 'https://ca.linkedin.com/in/ella-li-421646325'
      },
      { 
        name: 'Sarveshwar<br/>Senthil Kumar', 
        img: images.Sarveshwar,
        facts: [
          '• Logistics Team Member',
          '• Resource management expert',
          '• Strategic planner'
        ],
        linkedin: 'https://www.linkedin.com/in/sarveshwarsenthilkumar/'
      },
      { 
        name: 'Weijie<br/>Wang', 
        img: images.Weijie,
        facts: [
          '• Logistics Team Member',
          '• Event coordination specialist',
          '• Team collaboration expert'
        ],
        linkedin: 'https://www.linkedin.com/in/weijie-wang-a90a2a342/'
      },
    ],
  },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [activeMember, setActiveMember] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to detect mobile
  const isMobile = () => window.innerWidth <= 600;

  const handleMemberClick = (name: string) => {
    if (isMobile()) {
      setActiveMember(activeMember === name ? null : name);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const expandedContentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 }
  };

  return (
    <motion.div 
      className="team-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.div className="team-header-group" variants={itemVariants}>
        <div className="about-title-label">[TEAM]</div>
        <div className="team-title">OUR TEAM</div>
      </motion.div>
      <div className="team-groups">
        {teamData.map((group) => (
          <motion.div 
            className="team-group" 
            key={group.group}
            variants={itemVariants}
          >
            <div className="about-title-label">[{group.group}]</div>
            <div className="team-members">
              {group.members.map((member) => {
                const isActive = activeMember === member.name;
                const showExpanded = (hoveredMember === member.name && !isMobile()) || isActive;
                return (
                  <motion.div 
                    className={`team-member${isActive ? ' active' : ''}`}
                    key={member.name}
                    onHoverStart={() => !isMobile() && setHoveredMember(member.name)}
                    onHoverEnd={() => !isMobile() && setHoveredMember(null)}
                    onClick={() => handleMemberClick(member.name)}
                    variants={{
                      initial: { boxShadow: "none" },
                      hover: { boxShadow: "0 8px 32px rgba(141, 54, 233, 0.3)" }
                    }}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="team-member-img-wrapper">
                      <img 
                        className="team-member-img" 
                        src={member.img} 
                        alt={`${member.name} - DuploHacks Team Member`}
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                      />
                    </div>
                    {isMobile() ? (
                      showExpanded && (
                        <div className="team-member-expanded-content">
                          <div 
                            className="team-member-name expanded"
                            dangerouslySetInnerHTML={{ __html: member.name }}
                          />
                          <div className="team-member-facts">
                            {member.facts.map((fact, index) => (
                              <p key={index} className="expanded-fact">{fact}</p>
                            ))}
                          </div>
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="linkedin-button"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      )
                    ) : (
                      <AnimatePresence>
                        {showExpanded && (
                          <motion.div 
                            className="team-member-expanded-content"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={expandedContentVariants}
                          >
                            <div 
                              className="team-member-name expanded"
                              dangerouslySetInnerHTML={{ __html: member.name }}
                            />
                            <div className="team-member-facts">
                              {member.facts.map((fact, index) => (
                                <p key={index} className="expanded-fact">{fact}</p>
                              ))}
                            </div>
                            {member.linkedin && (
                              <a 
                                href={member.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="linkedin-button"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                                </svg>
                              </a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                    {!showExpanded && (
                      <div 
                        className="team-member-name"
                        dangerouslySetInnerHTML={{ __html: member.name }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;