import './App.css';
import ComponenteA from './components/ComponenteA';

function App() {
  const contactodePrueba = {
    nombre: 'Jorge',
    apellido: 'Fernandez',
    email: 'jfernz@gmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA contacto={contactodePrueba} />
      </header>
    </div>
  );
}
export default App;
