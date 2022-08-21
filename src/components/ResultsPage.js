import { connect } from "react-redux";
import { Link } from "react-router-dom";

//fontAwesome cons imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function ResultsPage(props) {
  return (
    <div className="body_two">
      <div className="button_back">
        <Link to="/secondpage">
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
            FirstName:
            <span>
              {props.person.firstName
                ? props.person.firstName.toUpperCase()
                : "NO FirstName"}
            </span>
          </h1>
          <h1>
            LastName:
            <span>
              {props.person.lastName
                ? props.person.lastName.toUpperCase()
                : "NO LastName"}
            </span>
          </h1>
        </div>
        <div className="title_two">
          <h1>
            Gender:<span>{props.person.gender.gender.toUpperCase()}</span>
          </h1>
          <h1>
            Age: <span>{props.ageObject.age}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

// Redux map reducers

function mapStateToProps(state) {
  return {
    person: state.person,
    ageObject: state.ageObject,
  };
}

export default connect(mapStateToProps, null)(ResultsPage);
