import React from 'react';
import '../styles/Team.css';
import Navbar from './Navbar';
import Simrik from '../assets/Simrik.jpg';
import Sehan from '../assets/Sehan.jpg';
import Sarveshwar from '../assets/sarv - Sarveshwar Senthil Kumar.jpg';
import OwenWu from '../assets/Owen Wu.jpg';
import Muhammud from '../assets/Muhammud.jpeg';
import Megh from '../assets/Megh.jpeg';
import John from '../assets/John.jpeg';
import JasonTran from '../assets/Jason_Tran.jpg';
import Ella from '../assets/Ella.jpeg';
import Dasha from '../assets/Dasha.jpeg';
import Weijie from '../assets/Weijie.jpg';
import Vijay from '../assets/vijay.png';
import Will from '../assets/will.jpg';
import Sathvik from '../assets/sathvik (3).png';
import James from '../assets/James.png';
import Maizah from '../assets/Maizah.png';
import Gursaaz from '../assets/gursaaz.jpg';
import Bowen from '../assets/bowen.png';
import BillBasnet from '../assets/Bill Basnet.jpg';

const teamData = [
  {
    group: 'Co-Leads & Founders',
    members: [
      { name: 'Jason Tran', img: JasonTran },
      { name: 'Sathvik Haridasu', img: Sathvik },
      { name: 'Simrik Silvas', img: Simrik },
    ],
  },
  {
    group: 'Web-Tech',
    members: [
      { name: 'Vijay Shrivarshan Vijayaraja', img: Vijay },
      { name: 'Haoshi (Owen) Wu', img: OwenWu },
      { name: 'Sehan Munhir', img: Sehan },
      { name: 'Bowen Shao', img: Bowen },
    ],
  },
  {
    group: 'Finance',
    members: [
      { name: 'Megh Patel', img: Megh },
      { name: 'John Fu', img: John },
      { name: 'Muhammad Ahmed', img: Muhammud },
      { name: 'James Yang', img: James },
    ],
  },
  {
    group: 'Marketing/Design',
    members: [
      { name: 'Bill Basnet', img: BillBasnet },
      { name: 'Maizah Tanveer', img: Maizah },
      { name: 'Gursaaz Gund', img: Gursaaz },
      { name: 'William Lovegrove', img: Will },
    ],
  },
  {
    group: 'Logistics',
    members: [
      { name: 'Dasha Turetska', img: Dasha },
      { name: 'Ella Li', img: Ella },
      { name: 'Sarveshwar Senthil Kumar', img: Sarveshwar },
      { name: 'Weijie Wang', img: Weijie },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-page">
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