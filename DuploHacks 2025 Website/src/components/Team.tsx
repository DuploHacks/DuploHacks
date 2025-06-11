import React from 'react';
import '../styles/Team.css';
import Navbar from './Navbar';

// Import images using the new path structure
const images = {
  Simrik: new URL('../assets/Simrik.jpg', import.meta.url).href,
  Sehan: new URL('../assets/Sehan.jpg', import.meta.url).href,
  Sarveshwar: new URL('../assets/sarv - Sarveshwar Senthil Kumar.jpg', import.meta.url).href,
  OwenWu: new URL('../assets/Owenwu.jpg', import.meta.url).href,
  Muhammud: new URL('../assets/Muhammud.jpeg', import.meta.url).href,
  Megh: new URL('../assets/Megh.jpeg', import.meta.url).href,
  John: new URL('../assets/John.jpeg', import.meta.url).href,
  JasonTran: new URL('../assets/Jason_Tran.jpg', import.meta.url).href,
  Ella: new URL('../assets/Ella.jpeg', import.meta.url).href,
  Dasha: new URL('../assets/Dasha.jpeg', import.meta.url).href,
  Weijie: new URL('../assets/weijie.jpg', import.meta.url).href,
  Vijay: new URL('../assets/vijay.png', import.meta.url).href,
  Will: new URL('../assets/will.jpg', import.meta.url).href,
  Sathvik: new URL('../assets/sathvik (3).png', import.meta.url).href,
  James: new URL('../assets/James.png', import.meta.url).href,
  Maizah: new URL('../assets/Maizah.png', import.meta.url).href,
  Gursaaz: new URL('../assets/gursaaz.jpg', import.meta.url).href,
  Bowen: new URL('../assets/bowen.png', import.meta.url).href,
  BillBasnet: new URL('../assets/Bill Basnet.jpg', import.meta.url).href,
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
  return (
    <div className="team-page">
      <Navbar />
      <div className="team-header-group">
        <div className="team-label">[TEAM]</div>
        <div className="team-title">OUR TEAM</div>
      </div>
      <div className="team-groups">
        {teamData.map((group) => (
          <div className="team-group" key={group.group}>
            <div className="team-group-label">[{group.group}]</div>
            <div className="team-members">
              {group.members.map((member) => (
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