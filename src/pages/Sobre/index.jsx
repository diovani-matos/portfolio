import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./sobre.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FaSass } from "react-icons/fa";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

function Sobre() {
  return (
    <>
      <Header />
      <section className={styles.about}>
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
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
            <SiTypescript color="#2F74C0" />
            <IoLogoFirebase color="#F79B00" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;
