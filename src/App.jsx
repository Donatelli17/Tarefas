import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TaskApp from './TaskApp';
import ActiveTasks from './ActiveTasks';
import CompletedTasks from './CompletedTasks';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todas as Tarefas</Link>
            </li>
            <li>
              <Link to="/active">Tarefas Ativas</Link>
            </li>
            <li>
              <Link to="/completed">Tarefas Concluídas</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/active">
            <ActiveTasks />
          </Route>
          <Route path="/completed">
            <CompletedTasks />
          </Route>
          <Route path="/" exact>
            <TaskApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
