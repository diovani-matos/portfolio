import styles from "./card.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ title, description, url }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <img className={styles.img} />
      <div className={styles.links}>
        <a href="">
          <FaExternalLinkAlt />
        </a>
        
          <Link to={url}>
            <FaGithub />
          </Link>
        
        <div className={styles.icons}>
            
        </div>
      </div>
    </div>
  );
}

export default Card;
