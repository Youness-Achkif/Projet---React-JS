import styles from './TaskCard.module.css'

function TaskCard({ titre, statut }) {
    return (
        <div className={styles.card}>
            <div>
                <h2>Titre: {titre}</h2>
                <h2>Statut: {statut}</h2>
            </div>
            <span className={styles.badge}>{statut}</span>
        </div>
    );
}

export default TaskCard;