import styles from './TaskDetails.module.css'

function TaskDetails({ titre, description, priorite }) {
    const prioriteClass = priorite?.toLowerCase() === 'haute' ? styles.haute
        : priorite?.toLowerCase() === 'moyenne' ? styles.moyenne
        : styles.basse;

    return (
        <div className={`${styles.card} ${prioriteClass}`}>
            <h2>Titre: {titre}</h2>
            <h2>Description: {description}</h2>
            <h2>Priorité: {priorite}</h2>
        </div>
    );
}

export default TaskDetails;