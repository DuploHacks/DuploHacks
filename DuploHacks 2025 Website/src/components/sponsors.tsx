import "../styles/Sponsors.css"
import tempSponsorsImg from '../assets/tempSponsorsImg.png'

function Sponsors() {
  return (
    <>
      <div className = "sponsors-grayheading">
        [thank you to]
      </div>

      <div className = "sponsors-heading">
        OUR SPONSORS
      </div>

      <section className = "sponsor-tiers">
        <div className = "Diamond">
          <h1 className = "sponsor-tier"> Diamond </h1>

          <div className = "sponsor-images">
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
          </div>
        </div>

        <div className = "Gold">
          <h1 className = "sponsor-tier"> Gold </h1>

          <div className = "sponsor-images">
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
          </div>
        </div>

        <div className = "Silver">
          <h1 className = "sponsor-tier"> Silver </h1>

          <div className = "sponsor-images">
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
          </div>
        </div>

        <div className = "Bronze">
          <h1 className = "sponsor-tier"> Bronze </h1>

          <div className = "sponsor-images">
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
            <img className = "sponsor-image" src = {tempSponsorsImg}></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default Sponsors;