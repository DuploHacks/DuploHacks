import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Team.css';
import Navbar from './Navbar';

// Import images using the new path structure
const images = {
  Simrik: new URL('../assets/Simrik.webp', import.meta.url).href,
  Sehan: new URL('../assets/Sehan.webp', import.meta.url).href,
  Sarveshwar: new URL('../assets/sarv - Sarveshwar Senthil Kumar.webp', import.meta.url).href,
  OwenWu: new URL('../assets/Owenwu.jpg', import.meta.url).href,
  Muhammud: new URL('../assets/Muhammud.webp', import.meta.url).href,
  Megh: new URL('../assets/Megh.webp', import.meta.url).href,
  John: new URL('../assets/John.webp', import.meta.url).href,
  JasonTran: new URL('../assets/Jason_Tran.webp', import.meta.url).href,
  Ella: new URL('../assets/Ella.webp', import.meta.url).href,
  Dasha: new URL('../assets/Dasha.webp', import.meta.url).href,
  Weijie: new URL('../assets/weijie.webp', import.meta.url).href,
  Vijay: new URL('../assets/vijay.png', import.meta.url).href,
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
      { name: 'Jason Tran', img: images.JasonTran },
      { name: 'Sathvik Haridasu', img: images.Sathvik },
      { name: 'Simrik Silvas', img: images.Simrik },
    ],
  },
  {
    group: 'Web-Tech',
    members: [
      { name: 'Vijay Shrivarshan Vijayaraja', img: images.Vijay },
      { name: 'Haoshi (Owen) Wu', img: images.OwenWu },
      { name: 'Sehan Munhir', img: images.Sehan },
      { name: 'Bowen Shao', img: images.Bowen },
    ],
  },
  {
    group: 'Finance',
    members: [
      { name: 'Megh Patel', img: images.Megh },
      { name: 'John Fu', img: images.John },
      { name: 'Muhammad Ahmed', img: images.Muhammud },
      { name: 'James Yang', img: images.James },
    ],
  },
  {
    group: 'Marketing/Design',
    members: [
      { name: 'Bill Basnet', img: images.BillBasnet },
      { name: 'Maizah Tanveer', img: images.Maizah },
      { name: 'Gursaaz Gund', img: images.Gursaaz },
      { name: 'William Lovegrove', img: images.Will },
    ],
  },
  {
    group: 'Logistics',
    members: [
      { name: 'Dasha Turetska', img: images.Dasha },
      { name: 'Ella Li', img: images.Ella },
      { name: 'Sarveshwar Senthil Kumar', img: images.Sarveshwar },
      { name: 'Weijie Wang', img: images.Weijie },
    ],
  },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <motion.div 
      className="team-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.div className="team-header-group" variants={itemVariants}>
        <div className="team-label">[TEAM]</div>
        <div className="team-title">OUR TEAM</div>
      </motion.div>
      <div className="team-groups">
        {teamData.map((group) => (
          <motion.div 
            className="team-group" 
            key={group.group}
            variants={itemVariants}
          >
            <div className="team-group-label">[{group.group}]</div>
            <div className="team-members">
              {group.members.map((member) => (
                <motion.div 
                  className="team-member" 
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
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
                  <div className="team-member-name">{member.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;