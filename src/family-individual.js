import React from "react";
import Logo from "./Assets/logo";
import SearchIcon from "./Assets/Icon_Search";
import FilterIcon from "./Assets/Icon_Filter";
import UploadIcon from './Assets/Icon-Upload';

export default function FamilyIndividual() {
  return (
    <div class="container-family">
      <header>
        <div class="nav-div">
          <nav>
            <div class="logo-div">
              <Logo />
            </div>
            <div class="navigations">
              <a href="#">Overview</a>
              <a href="#">Registries</a>
              <a href="#">Sunday School</a>
              <a href="#">Pious Associations</a>
            </div>
          </nav>
        </div>
      </header>
      <div class="title-div">
        <div class="family-master">
          <h1>Aola Simon</h1>
        </div>
        <div class="search-div">
          <input type="text" name="search-name" placeholder="Search" id="" />
          <SearchIcon />
        </div>
        <div class="filter-div">
          <FilterIcon />
        </div>
      </div>
      <hr />
      <div class="family-details-div">
        <div class="family-entries">
          <div class="inner-div-1">
            <div class="house-name-div">
              <h1>House name</h1>
              <h2>Kazhuthadiyil </h2>
            </div>
            <div class="address-div">
              <h1>Address</h1>
              <h2>946 Gregory Lane, Louisville, KY, Kentucky </h2>
            </div>
          </div>
          <div class="inner-div-2">
            <div class="houseno-div">
              <h1>House No</h1>
              <h2>3-123(A)</h2>
            </div>
            <div class="ward-div">
              <h1>Ward No</h1>
              <h2>5</h2>
            </div>
            <div class="pincode-div">
              <h1>Pincode</h1>
              <h2>574228</h2>
            </div>
          </div>
        </div>
        <div class="family-photo">
          <div class="upload-btn">
            <h1>Family photo</h1>
            <UploadIcon />
          </div>
          <div class="photo-container">
            <img src={require("./Assets/family-photo.png")} alt="family pic" />
          </div>
        </div>
      </div>
      <div class="famili-members-div">
        <div class="heading-div">
          <div class="name-div">Name</div>
          <div class="dob-div">Date of birth</div>
          <div class="phone-div">Phone number</div>
          <div class="baptism-div">Baptism</div>
          <div class="marriage-div">Marriage</div>
          <div class="death-div">Death</div>
          <div class="relation-div">Relation</div>
        </div>
        <div class="member-details-div">
          <div class="name-div">Aola Simon</div>
          <div class="dob-div">05-04-1985</div>
          <div class="phone-div">9956425685</div>
          <div class="baptism-div">25-04-1985</div>
          <div class="marriage-div">10-01-2009</div>
          <div class="death-div">-</div>
          <div class="relation-div">-</div>
        </div>

        <div class="member-details-div">
          <div class="name-div">Aola Simon</div>
          <div class="dob-div">05-04-1985</div>
          <div class="phone-div">9956425685</div>
          <div class="baptism-div">25-04-1985</div>
          <div class="marriage-div">10-01-2009</div>
          <div class="death-div">-</div>
          <div class="relation-div">-</div>
        </div>

        <div class="member-details-div">
          <div class="name-div">Aola Simon</div>
          <div class="dob-div">05-04-1985</div>
          <div class="phone-div">9956425685</div>
          <div class="baptism-div">25-04-1985</div>
          <div class="marriage-div">10-01-2009</div>
          <div class="death-div">-</div>
          <div class="relation-div">-</div>
        </div>

        <div class="member-details-div">
          <div class="name-div">Aola Simon</div>
          <div class="dob-div">05-04-1985</div>
          <div class="phone-div">9956425685</div>
          <div class="baptism-div">25-04-1985</div>
          <div class="marriage-div">10-01-2009</div>
          <div class="death-div">-</div>
          <div class="relation-div">-</div>
        </div>

        <div class="description-div">
          <div class="desc-heading">Description/Remarks</div>
          <div class="desc-content">
            <span class="blank-space"></span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".{" "}
          </div>
        </div>

        <div class="donation-div">
          <div class="donation-heading">Donations / offerings</div>
          <div class="donation-content">
            <span class="blank-space"></span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
