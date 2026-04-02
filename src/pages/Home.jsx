import { useState } from 'react'
import TaskDetails from './../components/TaskDetails'
import TaskCard from './../components/TaskCard'
import styles from './Home.module.css'

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
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Accueil</h1>
                <p>Bienvenue sur le gestionnaire de tâches</p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Section Compteur</h2>
                <div className={styles.counterRow}>
                    <button
                        className={`${styles.btn} ${styles.btnPrimary}`}
                        onClick={() => setCounter(counter + 1)}
                    >
                        Ajouter
                    </button>
                    <button
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        onClick={() => setCounter(counter - 1)}
                    >
                        Soustraire
                    </button>
                    <span className={styles.counterValue}>{counter}</span>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Liste des tâches</h2>
                <button
                    className={`${styles.btn} ${styles.btnOutline}`}
                    onClick={() => setShowTasks(!showTasks)}
                >
                    {showTasks ? 'Masquer les tâches' : 'Afficher les tâches'}
                </button>
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
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Liste des catégories</h2>
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