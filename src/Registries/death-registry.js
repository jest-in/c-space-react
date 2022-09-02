import React from 'react'
import Navigation from '../navigation'
import IconMenu from '../Assets/Icon_Menu'
import Icon_Upload from '../Assets/Icon_Upload'

export default function DeathRegistry() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="title-div">
    <div className="person-head">
      <h1>Jackson</h1>
    </div>
    <div className="registries-nav-div">
      <a href="#">Baptism Registry</a>
      <a href="#">Engagement Registry</a>
      <a href="#">Marriage Registry</a>
      <a href="#">Death Registry</a>
    </div>
    <div className="menu-div">
      <IconMenu/>
    </div>
  </div>
  <hr />
  <div className="members-entries-div">
    <div className="registry-div">
      <div className="registry-details-heading-div">
        <div className="name-person-div">
          <div className="heading-name">Name</div>
          <div className="person-name">Jackson</div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">House name</div>
          <div className="person-dob">Koothara</div>
        </div>
        <div className="phone-person-div">
          <div className="heading-phone">Age</div>
          <div className="person-phone">75</div>
        </div>
        <div className="baptism-person-div">
          <div className="heading-baptism">Father</div>
          <div className="person-baptism">Kuriyan</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Mother</div>
          <div className="person-marriage">Rosamma</div>
        </div>
        <div className="death-person-div">
          <div className="heading-death">Parish</div>
          <div className="person-death">
            St. Sebastian Church, Devagiri
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Ward</div>
          <div className="person-death-ward">5</div>
        </div>
        <div className="death-person-address-div">
          <div className="heading-address">Address</div>
          <div className="person-death-address">
            946 Gregory Lane, Louisville, KY, Kentucky
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Sickness</div>
          <div className="person-death-ward">Cancer</div>
        </div>
        <div className="death-person-sacraments-div">
          <div className="heading-sacraments">
            Sacraments Received
          </div>
        </div>
        <div className="death-person-ward-div-sacraments">
          <div className="heading-confession">Confession</div>
          <div className="person-death-ward">Yes</div>
        </div>
        <div className="death-person-ward-div-sacraments">
          <div className="heading-viatium">Viatium</div>
          <div className="person-death-ward">Yes</div>
        </div>
        <div className="death-person-ward-div-sacraments anointing-div">
          <div className="heading-anointing">
            Anointing of sick
          </div>
          <div className="person-death-ward">Yes</div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Death</div>
          <div className="person-death-ward">20-05-2022</div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Burial</div>
          <div className="person-death-ward">21-05-2022</div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Parish Priest</div>
          <div className="person-death-ward">Avarachan</div>
        </div>
      </div>
    </div>
    <div className="registry-photo-div">
      <Icon_Upload/>
      <img
            className="marriage-photo"
            src={require("../Assets/marriage.png")}
            alt="marriage pic"
          />
    </div>
  </div>
  <div className="desc-div">
    <div className="desc-heading">Description/Remarks</div>
    <div className="desc-content">
      <span className="blank-space" />
      a Contrary to popular belief, Lorem Ipsum is not simply
      random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature,
      discovered the undoubtable source. Lorem Ipsum comes from
      sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum".
    </div>
  </div>
</div>

  )
}
