import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h1>Gestionnaire de Tâches</h1>
            <div>
                <NavLink to="/">
                    Accueil
                </NavLink>
                <br />
                <NavLink to="/tasks">
                    Ajouter une tâche
                </NavLink>
                <br />
                <NavLink to="/about">
                    À propos
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
