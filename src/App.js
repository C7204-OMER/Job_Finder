import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import JobCard from "./components/jobcard/JobCard";

function App() {
  const dummy = {
    company_logo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.linkedin.com%2Fcompany%2Fclarusway%3Ftrk%3Dpublic_profile_topcard-current-company&psig=AOvVaw2-YlTPNy_8bd5p6SxpUL3r&ust=1623234800485000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCH4NXqh_ECFQAAAAAdAAAAABAD",
    title: "Fullstack Developer",
    company: "Clarusway",
    type: "Full-time",
    company_url: "http://clarusway.com/",
    id: "xyz",
  };
  return (
    <div className="App">
      <Header />
      <Form />
      <JobCard />
    </div>
  );
}

export default App;
