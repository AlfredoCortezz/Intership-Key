import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { PowerSkills } from './pages/PowerSkills';
import { Academico } from './pages/Academico';
import { Extra } from './pages/Extra';
import { Well } from './pages/Well';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="power-skills" element={<PowerSkills />} />
        <Route path="academico" element={<Academico />} />
        <Route path="extra" element={<Extra />} />
        <Route path="well" element={<Well />} />
      </Route>
    </Routes>
  );
}

export default App;
