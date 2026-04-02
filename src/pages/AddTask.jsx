import { useState } from "react";

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
        <div>
            <h1>Ajouter une tâche</h1>
            <form onSubmit={handleSubmit}>
                <label>Titre</label>
                <input
                    type="text"
                    placeholder="Titre de la tâche"
                    onChange={(e) => setTitre(e.target.value)}
                />
                <br />
                <label>Description</label>
                <input
                    type="text"
                    placeholder="Description de la tâche"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <label>Priorité</label>
                <textarea
                    rows="3"
                    placeholder="Haute / Moyenne / Basse"
                    onChange={(e) => setPriorite(e.target.value)}
                />
                <br />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AddTask;
