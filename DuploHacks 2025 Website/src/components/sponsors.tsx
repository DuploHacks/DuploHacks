import "../styles/Sponsors.css"
import hackclubLogo from '../assets/hackclub.png';
import codeCraftersLogo from '../assets/CodeCrafters.png';
import interviewCakeLogo from '../assets/interviewcake.png';
import youthCreativityFundLogo from '../assets/youthcreativityfund.png';

function Sponsors() {
  return (
    <>
      <div className="sponsors-grayheading">
        [thank you to]
      </div>

      <div className="sponsors-heading">
        OUR SPONSORS
      </div>

      <div className="sponsors-flex">
        <div className="sponsors-row sponsors-row-top">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-image hackclub-logo" src={hackclubLogo} alt="Hack Club" />
          </a>
          <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-image codecrafters-logo" src={codeCraftersLogo} alt="CodeCrafters" />
          </a>
        </div>
        <div className="sponsors-row sponsors-row-bottom">
          <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-image interviewcake-logo" src={interviewCakeLogo} alt="Interview Cake" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className="sponsor-image youthcreativityfund-logo" src={youthCreativityFundLogo} alt="Youth Creativity Fund" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Sponsors;