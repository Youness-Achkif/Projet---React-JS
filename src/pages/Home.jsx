import { useState } from 'react'
import TaskDetails from './../components/TaskDetails'
import TaskCard from './../components/TaskCard'

function Home() {
    const [counter, setCounter] = useState(0);
    const [tasks, setTasks] = useState([
        { titre: "Faire les courses", description: "Acheter des fruits et légumes", priorite: "Haute" },
        { titre: "Réviser React", description: "Revoir les hooks useState et useEffect", priorite: "Haute" },
        { titre: "Appeler le médecin", description: "Prendre rendez-vous pour le bilan annuel", priorite: "Moyenne" },
        { titre: "Nettoyer l'appartement", description: "Passer l'aspirateur et faire la vaisselle", priorite: "Basse" },
    ]);
    const [showTasks, setShowTasks] = useState(true);

    const categories = [
        { titre: "Travail", statut: "En cours" },
        { titre: "Personnel", statut: "En attente" },
        { titre: "Urgent", statut: "À faire" },
        { titre: "Loisirs", statut: "Complété" },
    ];

    return (
        <div>
            <h1>Accueil</h1>
            <p>Bienvenue sur le gestionnaire de tâches</p>

            <div>
                <h1>Section Compteur</h1>
                <button
                    onClick={() => {
                        setCounter(counter + 1)
                    }}
                >
                    Ajouter
                </button>
                <button
                    onClick={() => {
                        setCounter(counter - 1)
                    }}
                >
                    Soustraire
                </button>
                <h2>Compteur: {counter}</h2>

                <button
                    onClick={() => {
                        setShowTasks(!showTasks);
                    }}
                >
                    {showTasks ? 'Masquer les tâches' : 'Afficher les tâches'}
                </button>

                <h1>Liste des tâches</h1>
                {
                    showTasks && tasks.map((task, id) => (
                        <TaskDetails
                            key={id}
                            titre={task.titre}
                            description={task.description}
                            priorite={task.priorite}
                        />
                    ))
                }

                <h1>Liste des catégories</h1>
                {
                    categories.map((cat, id) => (
                        <TaskCard
                            key={id}
                            titre={cat.titre}
                            statut={cat.statut}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
