import ListeCourses from "./ListeCourses";

function App() {
  const mesCourses = ["Pommes", "Pain", "Lait", "Fromage"];

  return (
    <div>
      <h1>Ma liste de courses</h1>
      <ListeCourses elements={mesCourses} />
    </div>
  );
}

export default App;
