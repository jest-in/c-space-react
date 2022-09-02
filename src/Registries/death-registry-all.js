import React from 'react'
import Icon_Filter from '../Assets/Icon_Filter'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'

export default function DeathRegistryAll() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="title-div">
    <div className="family-master">
      <h1>Death Registry</h1>
    </div>
    <div className="search-div">
      <input type="text" name="search-name" placeholder="Search" id />
      <Icon_Search/>
    </div>
    <div className="filter-div">
      <Icon_Filter/>
    </div>
  </div>
  <hr />
  <div className="famili-members-div transactions">
    <div className="heading-div">
      <div className="death-slno">S.No</div>
      <div className="death-name">Name</div>
      <div className="death-house-name">House Name</div>
      <div className="death-age">Age</div>
      <div className="death-date">Date</div>
      <div className="death-sickness">Sickness</div>
    </div>
    <div className="member-details-div">
      <div className="death-slno">1</div>
      <div className="death-name">Andappan</div>
      <div className="death-house-name">Mannukunnel</div>
      <div className="death-age">60</div>
      <div className="death-date">5-12-2021</div>
      <div className="death-sickness">Cancer</div>
    </div>
    <div className="member-details-div">
      <div className="death-slno">2</div>
      <div className="death-name">Avarachan</div>
      <div className="death-house-name">Pattimattam</div>
      <div className="death-age">63</div>
      <div className="death-date">5-12-2021</div>
      <div className="death-sickness">Oldage</div>
    </div>
    <div className="member-details-div">
      <div className="death-slno">3</div>
      <div className="death-name">Rosa</div>
      <div className="death-house-name">Moolamattam</div>
      <div className="death-age">73</div>
      <div className="death-date">5-12-2021</div>
      <div className="death-sickness">Oldage</div>
    </div>
    <div className="member-details-div">
      <div className="death-slno">4</div>
      <div className="death-name">Kundan</div>
      <div className="death-house-name">Kundady</div>
      <div className="death-age">81</div>
      <div className="death-date">5-12-2021</div>
      <div className="death-sickness">Heart Attack</div>
    </div>
  </div>
</div>

  )
}
