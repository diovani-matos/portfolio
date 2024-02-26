import styles from "./error.module.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h2>Ops parece que esta página não existe!</h2>
      <Link to={"/"}>Voltar a página home</Link>
    </div>
  );
}

export default Error;
