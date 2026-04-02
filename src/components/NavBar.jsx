import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>✅ Gestionnaire de Tâches</h1>
            <div className={styles.links}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? styles.active : styles.link}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/tasks"
                    className={({ isActive }) => isActive ? styles.active : styles.link}
                >
                    Ajouter une tâche
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? styles.active : styles.link}
                >
                    À propos
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;