import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function FirstPage(props) {
  //states

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const [propsFirstName, setPropsFirstname] = useState("");
  const [propsLastName, setPropsLastName] = useState("");
  const [propsGender, setPropsGender] = useState("");

  //Navigation to second page AND dispatch person's object to person reducer

  const navigate = useNavigate();

  const person = {
    firstName: firstName || propsFirstName,
    lastName: lastName || propsLastName,
    gender: gender || propsGender,
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.fetchGenderData(person);
    navigate("/secondpage", { replace: true });
  };

  //function call to api Gender

  useEffect(() => {
    async function detectGender() {
      let name = firstName || person.propsFirstName;
      const request = await fetch("https://api.genderize.io/?name=" + name);

      const response = await request.json();
      setGender(response);
    }
    detectGender();
  }, [firstName, person.propsFirstName]);

  //useEffect loading props to home page

  useEffect(() => {
    function loadProps() {
      setPropsFirstname(props.person.firstName);
      setPropsLastName(props.person.lastName);
      setPropsGender(props.person.gender);
    }
    loadProps();
  }, [props.person.firstName, props.person.lastName, props.person.gender]);

  return (
    // <div className="body">
    <div className="content">
      <div className="title">
        <h1>First Name</h1>
        <h1>Last Name</h1>
      </div>

      <div className="form">
        <input
          placeholder="First name"
          className="input"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName || propsFirstName}
        />

        <input
          placeholder="Last name"
          className="input"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName || propsLastName}
        />
      </div>
      <div className="button_Next">
        <button className="btn" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

// Redux dispatch and map reducers

function mapStateToProps(state) {
  return {
    person: state.person,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenderData: (person) =>
      dispatch({
        type: "savePerson",
        person: person,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
