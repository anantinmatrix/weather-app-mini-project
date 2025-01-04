import './InfoBox.css'


function InfoBox({ info}) {
  let downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
let upArrow = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
<path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
</svg>

  return (
    <>
      
        <div className="weatherinfo">
          <h1 className='temp'>{info.Temp}&deg;</h1>
          <span className="cityname">
            <h3 className='city'>{info.City}</h3>
            <h5 className='date'>{info.Date}</h5>
          </span>
          <span className="description">
            <h5>{downArrow} {info.MinTemp}&deg;</h5>
            <h5>{upArrow} {info.MaxTemp}&deg;</h5>
          </span>
        </div>
    </>
  )
}

export default InfoBox
