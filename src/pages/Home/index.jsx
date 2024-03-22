import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  AOS.init();
  return (
    <>
      <section className={styles.home}>
        <div
          className={styles.home_description}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h1>Olá, eu sou Diovani Matos</h1>
          <span>Desenvolvedor Front End</span>
          <a
            href="https://docs.google.com/document/d/1A70cOiEZG_BnUOQnszCHJPe1_zJNDr-0/edit?usp=sharing&ouid=100684154301324028334&rtpof=true&sd=true"
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
        <div
          className={styles.home_img}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <figure>
            <img src="/eu-logo.png" alt="Diovani Matos" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Home;
