import Logo from './Assets/logo'
import IconMenu from './Assets/Icon_Menu'

const Person = () => {
  return (
    <div className="container-family">
      <header>
        <div className="nav-div">
          <nav>
            <div className="logo-div">
              <Logo/>
            </div>
            <div className="navigations">
              <a href="#">Overview</a>
              <a href="#">Registries</a>
              <a href="#">Sunday School</a>
              <a href="#">Pious Associations</a>
            </div>
          </nav>
        </div>
      </header>
      <div className="title-div">
        <div className="person-head">
          <h1>Aola Simon</h1>
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
        <div className="details-heading-div">
          <div className="name-person-div">
            <div className="heading-name">Name</div>
            <div className="person-name">Aola Simon</div>
          </div>
          <div className="dob-person-div">
            <div className="heading-dob">Date of birth</div>
            <div className="person-dob">05-04-1985</div>
          </div>
          <div className="phone-person-div">
            <div className="heading-phone">Phone number</div>
            <div className="person-phone">9956425685</div>
          </div>
          <div className="baptism-person-div">
            <div className="heading-baptism">Baptism</div>
            <div className="person-baptism">25-04-1985</div>
          </div>
          <div className="marriage-person-div">
            <div className="heading-marriage">Marriage</div>
            <div className="person-marriage">10-01-2009</div>
          </div>
          <div className="death-person-div">
            <div className="heading-death">Death</div>
            <div className="person-death">-</div>
          </div>
        </div>
        <div className="person-photo-div">
          <img src={require("./Assets/person-photo.png")} alt="personal pic" />
        </div>
      </div>

      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <span className="blank-space"></span>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum".{" "}
        </div>
      </div>
    </div>
  );
}

export default Person;