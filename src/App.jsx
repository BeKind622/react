import Patient from "./components/Patient";
import Department from "./components/Department";
import Doctor from "./components/Department";
const App = () => {
  return (
    <Patient name="Raul" age="25">
     
      <Department />
      <Doctor />
    </Patient>
  );
};

export default App;
