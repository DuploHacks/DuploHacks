import React from 'react';
import '../styles/Team.css';
import TeamPageBackground from '../assets/TeamPageBackground.png';
import Navbar from './Navbar';
import Simrik from '../assets/Simrik.jpg';
import Sehan from '../assets/Sehan.jpg';
import Sarveshwar from '../assets/sarv - Sarveshwar Senthil Kumar.jpg';
import OwenWu from '../assets/Owen Wu.JPG';
import Muhammud from '../assets/Muhammud.jpeg';
import Megh from '../assets/Megh.jpeg';
import John from '../assets/John.jpeg';
import JasonTran from '../assets/Jason_Tran.jpg';
import Ella from '../assets/Ella.jpeg';
import Dasha from '../assets/Dasha.jpeg';
import Weijie from '../assets/Weijie.jpg';

const teamData = [
  {
    group: 'Co-Leads & Founders',
    members: [
      { name: 'Jason Tran', img: JasonTran },
      { name: 'Sathvik Haridasu', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'Simrik Silvas', img: Simrik },
    ],
  },
  {
    group: 'Web-Tech',
    members: [
      { name: 'Vijay Shrivarshan Vijayaraja', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'Haoshi (Owen) Wu', img: OwenWu },
      { name: 'Sehan Munhir', img: Sehan },
      { name: 'Bowen Shao', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'Marium Ahmed', img: 'https://placehold.co/160x160?text=Photo' },
    ],
  },
  {
    group: 'Finance',
    members: [
      { name: 'Megh Patel', img: Megh },
      { name: 'John Fu', img: John },
      { name: 'Muhammad Ahmed', img: Muhammud },
      { name: 'James Yang', img: 'https://placehold.co/160x160?text=Photo' },
    ],
  },
  {
    group: 'Marketing/Design',
    members: [
      { name: 'Bill Basnet', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'Maizah Tanveer', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'Gursaaz Gund', img: 'https://placehold.co/160x160?text=Photo' },
      { name: 'William Lovegrove', img: 'https://placehold.co/160x160?text=Photo' },
    ],
  },
  {
    group: 'Logistics',
    members: [
      { name: 'Dasha Turetska', img: Dasha },
      { name: 'Ella Li', img: Ella },
      { name: 'Sarveshwar', img: Sarveshwar },
      { name: 'Weijie Wang', img: Weijie },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-page" style={{ backgroundImage: `url(${TeamPageBackground})` }}>
      <Navbar />
      <div className="team-header-group">
        <div className="team-label">[TEAM]</div>
        <div className="team-title">OUR TEAM</div>
      </div>
      <div className="team-groups">
        {teamData.map((group, idx) => (
          <div className="team-group" key={group.group}>
            <div className="team-group-label">[{group.group}]</div>
            <div className="team-members">
              {group.members.map((member, i) => (
                <div className="team-member" key={member.name}>
                  <div className="team-member-img-wrapper">
                    <img className="team-member-img" src={member.img} alt={member.name} />
                  </div>
                  <div className="team-member-name">{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 