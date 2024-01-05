import NavbarLinks from "./navbar-links";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
      <header>
          <div className={styles.container}>
              <div className={styles.logo}>
                  Logo
              </div>
              <div>
                  <NavbarLinks />
              </div>
          </div>
      </header>
  );
}