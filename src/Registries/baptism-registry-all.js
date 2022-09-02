import React from 'react'
import Navigation from '../navigation'
import Icon_Filter from '../Assets/Icon_Filter';
import Icon_Search from '../Assets/Icon_Search';

export default function BaptismRegistryAll() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="title-div">
    <div className="family-master">
      <h1>Baptism Registry</h1>
    </div>
    <div className="search-div">
      <input type="text" name="search-name" placeholder="Search" id />
      <Icon_Search/>
    </div>
    <div className="filter-div">
      <Icon_Filter />
    </div>
  </div>
  <hr />
  <div className="famili-members-div transactions">
    <div className="heading-div">
      <div className="mar-slno">S.No</div>
      <div className="mar-groom-name">Name</div>
      <div className="mar-bride-name">Fathers Name</div>
      <div className="mar-celebrant">Mothers Name</div>
      <div className="mar-date">Date</div>
    </div>
    <div className="member-details-div">
      <div className="mar-slno">1</div>
      <div className="mar-groom-name">Andappan</div>
      <div className="mar-bride-name">Avarachan</div>
      <div className="mar-celebrant">Mariyamma</div>
      <div className="mar-date">5-12-2021</div>
    </div>
    <div className="member-details-div">
      <div className="mar-slno">2</div>
      <div className="mar-groom-name">Fransis</div>
      <div className="mar-bride-name">Kuriyan</div>
      <div className="mar-celebrant">Soosamma</div>
      <div className="mar-date">25-04-2022</div>
    </div>
    <div className="member-details-div">
      <div className="mar-slno">3</div>
      <div className="mar-groom-name">Rosa</div>
      <div className="mar-bride-name">Johny</div>
      <div className="mar-celebrant">Catherin</div>
      <div className="mar-date">18-08-2022</div>
    </div>
    <div className="member-details-div">
      <div className="mar-slno">4</div>
      <div className="mar-groom-name">Jestin George</div>
      <div className="mar-bride-name">George</div>
      <div className="mar-celebrant">Mary</div>
      <div className="mar-date">10-10-2022</div>
    </div>
  </div>
</div>

  )
}
