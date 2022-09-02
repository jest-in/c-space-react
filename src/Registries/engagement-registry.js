import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu'
import IconUpload from '../Assets/Icon_Upload'
import Navigation from '../navigation'

export default function EngagementRegistry() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="title-div">
    <div className="person-head">
      <h1>Jestin George</h1>
    </div>
    <div className="registries-nav-div">
      <a href="#">Baptism Registry</a>
      <a href="#">Engagement Registry</a>
      <a href="#">Marriage Registry</a>
      <a href="#">Death Registry</a>
    </div>
    <div className="menu-div">
      <Icon_Menu/>
    </div>
  </div>
  <hr />
  <div className="members-entries-div">
    <div className="registry-div">
      <div className="registry-details-heading-div">
        <div className="bridegroom-head">Bridegroom</div>
        <div className="name-person-div">
          <div className="heading-name">Name</div>
          <div className="person-name">Jestin George</div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">Family name</div>
          <div className="person-dob">Menachery</div>
        </div>
        <div className="baptism-person-div">
          <div className="heading-baptism">Father</div>
          <div className="person-baptism">George</div>
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
        <div className="marriage-person-div">
          <div className="heading-marriage">Date of Birth</div>
          <div className="person-marriage">10-10-1997</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Date of Baptism</div>
          <div className="person-marriage">10-11-1997</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Place of Baptism</div>
          <div className="person-marriage">Belthangadi</div>
        </div>
      </div>
      <div className="registry-details-heading-div">
        <div className="bridegroom-head bride">Bride</div>
        <div className="name-person-div">
          <div className="heading-name">Name</div>
          <div className="person-name">Thangamma</div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">Family name</div>
          <div className="person-dob">Mannukunnel</div>
        </div>
        <div className="baptism-person-div">
          <div className="heading-baptism">Father</div>
          <div className="person-baptism">Avarachan</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Mother</div>
          <div className="person-marriage">Avaramma</div>
        </div>
        <div className="death-person-div">
          <div className="heading-death">Parish</div>
          <div className="person-death">
            St. John’s Church, Pogayor
          </div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Date of Birth</div>
          <div className="person-marriage">28-02-2000</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Date of Baptism</div>
          <div className="person-marriage">28-03-2000</div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Place of Baptism</div>
          <div className="person-marriage">Devagiri</div>
        </div>
      </div>
      <div className="registry-details-heading-div">
        <div className="bridegroom-head bride">Other details</div>
        <div className="name-person-div">
          <div className="heading-name">Date</div>
          <div className="person-name">15-06-2028</div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">Celebrant</div>
          <div className="person-dob">Fr. James Fernandis</div>
        </div>
        <div className="baptism-person-div">
          <div className="heading-baptism">Parish priest</div>
          <div className="person-baptism">Avarachan</div>
        </div>
      </div>
    </div>
    <div className="registry-photo-div">
      <IconUpload/>
      <img className="marriage-photo" src="/marriage.png" alt="image/marriage" />
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
