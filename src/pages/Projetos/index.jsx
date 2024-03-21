import styles from "./projetos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FaSass } from "react-icons/fa";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
function Projetos() {
  AOS.init();
  return (
    <>
      <section className={styles.projetos}>
        <h1>Projetos</h1>
        <div className={styles.grid_projetos}>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='100' data-aos-duration='400'>
            <h3>Doce Sabor Tortas</h3>
            <p>
              Um cardápio online de uma loja com envio de pedido para WhatsApp!
            </p>
            <img src="/doce-sabor.png" alt="Doce Sabor Tortas" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <SiTailwindcss color="#38BDF8" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://doce-sabor-tortas.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/Doce-Sabor-Tortas"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='200' data-aos-duration='500'>
            <h3>Napoli Pizzas</h3>
            <p>
              Site de uma pizzaria com carrousel de imagens, animações e design
              responsivo!
            </p>
            <img src="/napoli-pizzas.png" alt="Napoli Pizzas" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                <SiTailwindcss color="#38BDF8" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://napoli-pizzas.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/Pizzaria"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='300' data-aos-duration='600'>
            <h3>La Peruca - Barber Shop</h3>
            <p>
              Site de uma barbearia com link de redirecionamento para WhatsApp!
            </p>
            <img src="/projeto1.png" alt="La Peruca Barber Shop" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FaSass color="#CC6699" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://barbearia2-0.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/barbearia2.0/tree/main"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='400' data-aos-duration='700'>
            <h3>Panetteria</h3>
            <p>Site para uma padaria com design responsivo e moderno!</p>
            <img src="/panneteria.png" alt="Panetteria" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faReact} color="#5ED3F3" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                <FaSass color="#CC6699" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://panetteria.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/projetos/tree/main/padaria/padaria"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='500' data-aos-duration='800'>
            <h3>Coffee Beans Shop</h3>
            <p>Site para uma cafeteria com carrinho de compras!</p>
            <img src="/projeto2.png" alt="Coffee Beans Shop" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FaSass color="#CC6699" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://projetos-gamma.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/projetos/tree/main/coffee"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projeto_item} data-aos='fade-up' data-aos-delay='600' data-aos-duration='900'>
            <h3>Quiz JavaScript</h3>
            <p>Projeto de um quiz de perguntas sobre javascript!</p>
            <img src="/projeto3.png" alt=" Quiz javascript" />
            <div className={styles.assets_projeto}>
              <div className={styles.techs_projeto}>
                <FontAwesomeIcon icon={faHtml5} color="#E65C22 " />
                <FontAwesomeIcon icon={faCss3} color="#2489C4" />
                <FontAwesomeIcon icon={faJs} color="#EFD81D" />
              </div>
              <div className={styles.links_projeto}>
                <a
                  href="https://quiz-javascript-eight.vercel.app/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Acessar
                </a>
                <a
                  href="https://github.com/diovani-matos/quiz"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Repositório
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
