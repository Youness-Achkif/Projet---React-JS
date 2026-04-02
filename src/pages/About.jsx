import { useEffect, useState } from 'react'
import styles from './About.module.css'

function About() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>À propos</h1>
                <p>Application de gestion de tâches développée avec React</p>
            </div>

            <div className={styles.card}>
                <h2>Exemple de tâche — API JSONPlaceholder</h2>
                {todo.id ? (
                    <ol>
                        <li>User ID: {todo.userId}</li>
                        <li>ID: {todo.id}</li>
                        <li>Titre: {todo.title}</li>
                        <li>Complété: {todo.completed?.toString()}</li>
                    </ol>
                ) : (
                    <p className={styles.loading}>Chargement...</p>
                )}
            </div>
        </div>
    );
}

export default About;
