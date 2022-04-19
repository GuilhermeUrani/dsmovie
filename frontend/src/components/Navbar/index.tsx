import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './style.css';
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <img src="/assets/img/LogoSuper10.svg"></img>
          <a href="https://github.com/GuilhermeUrani/dsmovie">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/GuilhermeUrani</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
