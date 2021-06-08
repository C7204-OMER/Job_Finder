import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import JobCard from "./components/jobcard/JobCard";
import axios from "axios";

function App() {
  const newQuery = (description, location) => {
    axios({
      method: "get",
      url: `/positions.json?description=${description}&location=${location}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const dummy = {
    company_logo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQHluPICZRkHsA/company-logo_200_200/0/1577449468769?e=2159024400&v=beta&t=SU8ArbCWLdttCIu6Qpc89ppAabgH_Q4r4ERr78bOP28",
    title: "Fullstack Developer",
    company: "Clarusway",
    type: "Full-time",
    company_url: "https://clarusway.com/",
    id: "xyz",
  };
  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      <JobCard />
    </div>
  );
}

export default App;
