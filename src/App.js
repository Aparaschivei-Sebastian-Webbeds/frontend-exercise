import { Navbar } from './components/Navbar';
import { LoggedUserContextProvider } from './contexts/LoggedUserContext';

function App() {
  return (
    <LoggedUserContextProvider>
      <Navbar/>
    </LoggedUserContextProvider>
    
  );
}

export default App;
