import { useState } from "react";
import styles from './AddTask.module.css';

function AddTask() {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [priorite, setPriorite] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(titre);
        console.log(description);
        console.log(priorite);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Ajouter une tâche</h1>
                <p>Remplissez le formulaire pour créer une nouvelle tâche</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label className={styles.label}>Titre</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Titre de la tâche"
                        onChange={(e) => setTitre(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Description</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Description de la tâche"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Priorité</label>
                    <textarea
                        className={styles.textarea}
                        rows="3"
                        placeholder="Haute / Moyenne / Basse"
                        onChange={(e) => setPriorite(e.target.value)}
                    />
                </div>

                <button className={styles.submitBtn} type="submit">Ajouter la tâche</button>
            </form>
        </div>
    );
}

export default AddTask;