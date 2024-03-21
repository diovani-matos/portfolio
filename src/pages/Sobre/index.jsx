import styles from "./sobre.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Sobre() {
  AOS.init();
  return (
    <>
      <section className={styles.about} data-aos='fade-up' data-aos-delay='400' data-aos-duration='800'>
        <h1>Sobre mim</h1>
        <div className={styles.about_content}>
          <div className={styles.img_about}>
            <img src="/eu-logo.png" alt="Diovani Matos" />
          </div>
          <div className={styles.about_description}>
            <p>
              Sou um entusiasta do desenvolvimento web com uma paixão pela
              criação de experiências online excepcionais.
            </p>
            <p>
              Com habilidades em HTML, CSS, JavaScript e frameworks modernos,
              estou pronto para enfrentar desafios e colaborar em projetos que
              impulsionem a web para o futuro.
            </p>
          </div>
        </div>

        <div className={styles.techs}>
          <h2>Techs</h2>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
            <FontAwesomeIcon icon={faCss3} color="#2489C4" />
            <FaSass color="#CC6699" />
            <SiTailwindcss color="#38BDF8" />
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
