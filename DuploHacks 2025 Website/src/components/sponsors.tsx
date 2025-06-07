import "../styles/Sponsors.css"
import hackclubLogo from '../assets/hackclub.png';
import codeCraftersLogo from '../assets/CodeCrafters.png';
import interviewCakeLogo from '../assets/interviewcake.png';

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
          <img className="sponsor-image hackclub-logo" src={hackclubLogo} alt="Hack Club" />
          <img className="sponsor-image codecrafters-logo" src={codeCraftersLogo} alt="CodeCrafters" />
        </div>
        <div className="sponsors-row sponsors-row-bottom">
          <img className="sponsor-image interviewcake-logo" src={interviewCakeLogo} alt="Interview Cake" />
        </div>
      </div>
    </>
  );
}
export default Sponsors;