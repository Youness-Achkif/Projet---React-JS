import { useState } from 'react'
import TaskDetails from './../components/TaskDetails'
import TaskCard from './../components/TaskCard'
import styles from './Home.module.css'

function Home({ tasks }) {
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
                <h1>Bienvenue sur <span>Task Manager</span></h1>
                <p>Organisez vos tâches, boostez votre productivité facilement.</p>
            </div>

            <div className={styles.section}>
                <p className={styles.sectionTitle}>Liste des tâches ({tasks.length})</p>
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
                <p className={styles.sectionTitle}>Liste des catégories</p>
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