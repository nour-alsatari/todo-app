import Form from "./components/form";
import Header from "./components/header";
import List from "./components/list";
import ToDo from "./components/todo";
import SettingsProvider from "./context/settings";

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
