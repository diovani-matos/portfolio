import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    // sempre que usar o toggle menu muda o valor do setShowMenu
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.logo}>Diovani Matos</span>
      </Link>
      <nav 
      className={`${styles.menu_links} ${showMenu ? styles.show : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <div className={styles.menu} onClick={toggleMenu}>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
        <span className={styles.bars}></span>
      </div>
    </header>
  );
}

export default Header;
