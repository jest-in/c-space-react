import React from 'react'
import Logo from './Assets/logo';

export default function Navigation() {
  return (
    <header>
      <div className="nav-div">
        <nav>
          <div className="logo-div">
            <Logo />
          </div>
          <div className="navigations">
            <a href="#">Overview</a>
            <a className="registry-nav" href="#">
              Registries
              <div className="sub-menu1-div">
                <ul>
                  <li>Family Registry</li>
                  <li>Engagement Registry</li>
                  <li>Marriage Registry</li>
                  <li>Death Reigistry</li>
                </ul>
              </div>
            </a>
            <a href="#">Transactions</a>
            <a href="#">Pious Associations</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
