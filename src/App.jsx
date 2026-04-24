import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import AddTask from './pages/AddTask';
import NotFound from './pages/NotFound';

function App() {
  const [tasks, setTasks] = useState([
    { titre: "Faire les courses", description: "Acheter des fruits et légumes", priorite: "Haute" },
    { titre: "Réviser React", description: "Revoir les hooks useState et useEffect", priorite: "Haute" },
    { titre: "Appeler le médecin", description: "Prendre rendez-vous pour le bilan annuel", priorite: "Moyenne" },
    { titre: "Nettoyer l'appartement", description: "Passer l'aspirateur et faire la vaisselle", priorite: "Basse" },
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route path="/tasks" element={<AddTask onAdd={addTask} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App