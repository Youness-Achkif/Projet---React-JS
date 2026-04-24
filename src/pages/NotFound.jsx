import { NavLink } from "react-router-dom";
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles.container}>
            <p className={styles.code}>404</p>
            <h1 className={styles.title}>Page non trouvée</h1>
            <p className={styles.subtitle}>La page que vous cherchez n'existe pas.</p>
            <NavLink to="/" className={styles.link}>Retour à l'accueil</NavLink>
        </div>
    );
}

export default NotFound;
