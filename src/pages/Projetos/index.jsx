import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./projetos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FaSass } from "react-icons/fa";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";

function Projetos() {
  return (
    <>
      <Header />
      <section className={styles.projetos}>
        <h1>Projetos</h1>
        <div className={styles.grid_projetos}>
          <div className={styles.projeto_item}>
            <h3>La Peruca - Barber Shop</h3>
            <p>
              Site de uma barbearia com link de redirecionamento para WhatsApp!
            </p>
            <img src="../../../public/napoli-pizzas.png" alt="Napoli Pizzas" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
                <SiTailwindcss color="#38BDF8" />
              </div>
              <div className={styles.links_projeto}>
                <a href="https://napoli-pizzas.vercel.app/" target="blank" rel="noopener noreferrer">
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/Pizzaria"
                  target="blank" rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item}>
            <h3>La Peruca - Barber Shop</h3>
            <p>
              Site de uma barbearia com link de redirecionamento para WhatsApp!
            </p>
            <img
              src="../../../public/projeto1.png"
              alt="La Peruca Barber Shop"
            />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FaSass color="#CC6699" />
              </div>
              <div className={styles.links_projeto}>
                <a href="https://barbearia2-0.vercel.app/" target="blank" rel="noopener noreferrer">
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/barbearia2.0/tree/main"
                  target="blank" rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item}>
            <h3>Panetteria</h3>
            <p>Site para uma padaria!</p>
            <img src="../../../public/panneteria.png" alt="Panetteria" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
                <FaSass color="#CC6699" />
              </div>
              <div className={styles.links_projeto}>
                <a href="https://panetteria.vercel.app/" target="blank" rel="noopener noreferrer">
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/projetos/tree/main/padaria/padaria"
                  target="blank" rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item}>
            <h3>Coffee Beans Shop</h3>
            <p>Site para uma cafeteria!</p>
            <img src="../../../public/projeto2.png" alt="Coffee Beans Shop" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FaSass color="#CC6699" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className={styles.links_projeto}>
                <a href="https://projetos-gamma.vercel.app/" target="blank" rel="noopener noreferrer">
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/projetos/tree/main/coffee"
                  target="blank" rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item}>
            <h3>Quiz JavaScript</h3>
            <p>Projeto de um quiz de perguntas sobre javascript!</p>
            <img src="../../../public/projeto3.png" alt=" Quiz javascript" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://quiz-javascript-eight.vercel.app/"
                  target="blank" rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a href="https://github.com/diovani-matos/quiz" target="blank" rel="noopener noreferrer">
                  Repositório
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projetos;
