import './App.css';
import Container from './components/Container';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { TodosProvider } from './contexts/TodosContext';


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TodosProvider>
          <Container/> 
        </TodosProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
