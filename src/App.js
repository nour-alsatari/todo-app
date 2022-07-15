import Form from "./components/form";
import List from "./components/list";
import Header from "./components/header";
import ToDo from "./components/todo";
import SettingsProvider from "./context/settings";
import './app.css'

function App() {
  return (
    <>
      <SettingsProvider>
      <Header />
      <Form />
        <ToDo />
        <List itemsPerPage={4}/>
      </SettingsProvider>
    </>
  );
}

export default App;
