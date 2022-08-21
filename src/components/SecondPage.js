import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//fontAwesome icons imports

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function SecondPage(props) {
  //states

  const [age, setAge] = useState("");
  const [propsAge, setPropsAge] = useState("");
  const [propsProbability, setPropsProbability] = useState("");

  const newPerson = props.person;

  //function loadProps from redux

  useEffect(() => {
    function loadProps() {
      setPropsAge(props.ageObject.age);
      setPropsProbability(newPerson.gender.probability);
    }
    loadProps();
  }, [props.ageObject.age, newPerson.gender.probability]);

  //navigation to ResultsPage AND dispatch ageObject to age reducer

  const navigate = useNavigate();
  const ageObject = { age: age || propsAge };

  const handleClickNext = () => {
    navigate("/resultspage", { replace: true });
    props.fetchPersonAge(ageObject);
  };

  return (
    <div className="body_two">
      <div className="button_back">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            color="#bb8379"
            size="3x"
            beat
          />
        </Link>
      </div>

      <div className="content_two">
        <div className="title">
          <h1>
            Gender:{" "}
            <span>
              {newPerson.gender.gender
                ? newPerson.gender.gender.toUpperCase()
                : null}
            </span>
          </h1>
          <h1>Age</h1>
        </div>
        <div className="form">
          <div className="probability">
            <h1>
              Probability:
              <span>
                {newPerson.gender.probability * 100 || propsProbability * 100} %
              </span>
            </h1>
          </div>

          <input
            placeholder="How old are you?"
            className="input"
            onChange={(e) => setAge(e.target.value)}
            value={age || propsAge}
          />
        </div>
        <div className="button_Next">
          <button className="btn" onClick={handleClickNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// redux dispatch and map reducers

function mapStateToProps(state) {
  return {
    person: state.person,
    ageObject: state.ageObject,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPersonAge: (ageObject) =>
      dispatch({
        type: "saveAge",
        ageObject: ageObject,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
