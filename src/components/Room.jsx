import React, { useState } from "react";
function Room() {
  const [isLit, setLit] = useState(true);
  const [state, changeState] = useState(true);
  const [state2, changeState2] = useState(true);
  let [currentTemp, increaseTemp] = useState(22);

  const handleRoom = () => {
    return setLit(!isLit);
  };

  const handleClick = () => {
    changeState(!state);
  };

  const handleClick2 = () => {
    changeState2(!state2);
  };

  const handleTemp = (e) => {
    {
      e.target.name === "increase"
        ? increaseTemp(currentTemp++)
        : increaseTemp(currentTemp--);
    }
  };

  return (
    <>
      <div className={`container-fluid room ${isLit ? "bright" : "dark"}`}>
        <div className="row mx-auto  ">
          <div className="col-10 col-lg-6 col-md-6  mx-auto mt-3  d-flex justify-content-center align-items-center">
            {" "}
            <h2>This room is {isLit ? "Bright" : "Dark"}</h2>
          </div>
          <div className="col-10 col-lg-6 col-md-6 mx-auto mt-3 d-flex justify-content-start align-items-center">
            <button
              className={`btn ${
                isLit ? "btn-primary text-white" : "btn-warning"
              }`}
              onClick={handleRoom}
            >
              Toggle button
            </button>
          </div>

          {/*Column 3  */}
          <div
            className={`col-10 border border-warning rounded-pill px-5 py-2 col-lg-6 col-md-6 mx-auto mt-3 d-flex justify-content-start align-items-center ${
              state ? "bg-white" : "bg-danger"
            }`}
          >
            <h4 className={`${state ? "text-dark" : "text-white "}`}>
              Press this button to change the state of this area{" "}
            </h4>
            <button
              className={`btn ${
                state ? "btn-primary text-white" : "btn-warning"
              }`}
              onClick={handleClick}
            >
              Toggle button
            </button>
          </div>

          {/*Column 4  */}
          <div
            className={`col-10 border border-success rounded-pill px-5 py-2 col-lg-6 col-md-6 mx-auto mt-3 d-flex justify-content-start align-items-center ${
              state2 ? "bg-white" : "bg-success"
            }`}
          >
            <h4 className={`${state2 ? "text-dark" : "text-white "}`}>
              Press this button to change the state of this area{" "}
            </h4>
            <button
              className={`btn ${
                state2 ? "btn-primary text-white" : "btn-warning"
              }`}
              onClick={handleClick2}
            >
              Toggle button
            </button>
          </div>
          {/*Column 5  */}
          <div
            className={`col-10 border border-success rounded-pill px-5 py-2 col-lg-6 col-md-6 mx-auto mt-3 d-flex justify-content-start align-items-center ${
              state2 ? "bg-white" : "bg-success"
            }`}
          >
            <h4 className="text-capitalize">
              Current temprature is {currentTemp}&deg;C
            </h4>
            <button
              className="btn btn-primary mx-4 text-white font-weight-bold"
              onClick={handleTemp}
              name="increase"
            >
              +{" "}
            </button>
            <button
              className="btn btn-primary text-white font-weight-bold"
              onClick={handleTemp}
            >
              -{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
