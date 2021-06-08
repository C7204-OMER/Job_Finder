import React from "react";

const Form = ({ newQuery }) => {
  return (
    <div className="form">
      <form action="">
        <input type="text" placeholder="Job Description" />
        <br />
        <input type="text" placeholder="Location" />
        <br />
        <button onClick={() => newQuery("react", "germany")} type="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
