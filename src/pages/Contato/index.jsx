import { Link } from "react-router-dom";
import styles from "./contato.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
function Contatos() {
  AOS.init();
  return (
    <>
      <section className={styles.contact}>
        <h1>Contato</h1>
        <div className={styles.contact_content} data-aos='fade-down' data-aos-delay='200' data-aos-duration='500'>
          <div className={styles.contact_item}>
            <Link to={"https://github.com/diovani-matos"} target="blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.item} />
            </Link>
            <span>GitHub</span>
          </div>
          <div className={styles.contact_item}>
            <Link
              to={"https://www.linkedin.com/in/diovani-matos-333a2a228/"}
              target="blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.item} />
            </Link>
            <span>Linkedin</span>
          </div>
          <div className={styles.contact_item}>
            <Link to={"https://wa.me/5551994477827"} target="blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className={styles.item} />
            </Link>
            <span>WhatsApp</span>
          </div>
          <div className={styles.contact_item}>
            <Link to={"mailto:matosdiovani@gmail.com"}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.item} />
            </Link>
            <span>Gmail</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contatos;
