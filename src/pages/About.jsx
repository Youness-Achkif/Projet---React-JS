import { useEffect, useState } from 'react'

function About() {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
    }, []);

    return (
        <div>
            <h1>À propos</h1>
            <p>Application de gestion de tâches développée avec React</p>

            <h2>Exemple de tâche (API)</h2>
            <ol>
                <li>User ID: {todo.userId}</li>
                <li>ID: {todo.id}</li>
                <li>Titre: {todo.title}</li>
                <li>Complété: {todo.completed?.toString()}</li>
            </ol>
        </div>
    );
}

export default About;
