import Patient from "./components/Patient";
import Department from "./components/Department";
import Doctor from "./components/Doctor";
const App = () => {
  return (
    <Patient name="Raul" age="25">
     
      <Department dept="haribo" room="420" nurse="joy" />

      <Doctor doc_fname='jim' doc_lname="halpert" doc_dept="paper"/>
    </Patient>
  );
};

export default App;
