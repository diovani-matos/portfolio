import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.home_description}>
          <h1>Olá, eu sou Diovani Matos</h1>
          <span>Desenvolvedor Front End</span>
          <a
            href="../../../public/CV -Diovani Matos.docx"
            download={"CV -Diovani Matos.docx"}
            className={styles.btn_cv}
          >
            Download CV
          </a>
          <div className={styles.icons}>
            <Link
              to={"https://github.com/diovani-matos"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.item} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/diovani-matos-333a2a228/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.item} />
            </Link>
            <Link
              to={"https://wa.me/5551994477827"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className={styles.item} />
            </Link>
            <Link to={"mailto:matosdiovani@gmail.com"}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.item} />
            </Link>
          </div>
        </div>
        <div className={styles.home_img}>
          <figure>
            <img src="/eu-logo.png" alt="Diovani Matos" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Home;
