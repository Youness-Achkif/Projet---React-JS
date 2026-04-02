import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>404 - Page non trouvée</h1>
            <p>La page que vous cherchez n'existe pas.</p>
            <NavLink to="/">Retour à l'accueil</NavLink>
        </div>
    );
}

export default NotFound;
