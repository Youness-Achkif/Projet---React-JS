import styles from './TaskDetails.module.css'

function TaskDetails({ titre, description, priorite }) {
  return (
    <div className={styles.card}>
      <h2>Titre: {titre}</h2>
      <h2>Description: {description}</h2>
      <h2>Priorité: {priorite}</h2>
    </div>
  );
}

export default TaskDetails;
