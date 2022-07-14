import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { PessoaIndex } from './pages/Pessoa';

const App = () => {
  const { page } = usePage();

  const renderSwitch = () => {
    switch (page) {
      case Page.Pessoa:
        return <PessoaIndex />;
      default:
        return '';
    }
  }
  return (
    <div className="App">
      <Header />
      {renderSwitch()}
    </div>
  );
}

export default App;
