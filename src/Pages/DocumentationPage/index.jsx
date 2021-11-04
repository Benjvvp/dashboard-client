import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";

import "./index.css";

export function DocumentationPage() {
  const [toggleState, setToggleState] = useState(1);
  const [toggleJSON, setToggleJSON] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function renderedCommand() {
    switch (toggleState) {
      case 1:
        fetch("/json/administration.json")
          .then((response) => response.json())
          .then((data) => setToggleJSON(data));
        break;
      case 2:
        fetch("/json/fun.json")
          .then((response) => response.json())
          .then((data) => setToggleJSON(data));
        break;
      case 3:
        fetch("/json/information.json")
          .then((response) => response.json())
          .then((data) => setToggleJSON(data));
        break;
      case 4:
        fetch("/json/utility.json")
          .then((response) => response.json())
          .then((data) => setToggleJSON(data));
        break;
      case 5:
        fetch("/json/music.json")
          .then((response) => response.json())
          .then((data) => setToggleJSON(data));
    }
  }

  useEffect(() => {
    renderedCommand();
    if (toggleJSON.length > 0) {
      setLoading(false);
    }
  }, [toggleJSON, toggleState]);

  return (
    !loading && (
      <>
        <NavBar />
        <div className="container">
          <div className="w-75 d-block mx-auto commandC">
            <div className="d-flex flex-row flex-wrap text-center fw-bold">
              <button
                className={`category flex-fill fw-bold ${
                  toggleState === 1 ? "category-active" : ""
                }`}
                onClick={() => toggleTab(1)}
              >
                Administration
              </button>
              <button
                className={`category flex-fill fw-bold ${
                  toggleState === 2 ? "category-active" : ""
                }`}
                onClick={() => toggleTab(2)}
              >
                Fun
              </button>
              <button
                className={`category flex-fill fw-bold ${
                  toggleState === 3 ? "category-active" : ""
                }`}
                onClick={() => toggleTab(3)}
              >
                Information
              </button>
              <button
                className={`category flex-fill fw-bold ${
                  toggleState === 4 ? "category-active" : ""
                }`}
                onClick={() => toggleTab(4)}
              >
                Utility
              </button>
              <button
                className={`category flex-fill fw-bold ${
                  toggleState === 5 ? "category-active" : ""
                }`}
                onClick={() => toggleTab(5)}
              >
                Music
              </button>
            </div>
            <div className="containerCommands">
              <div
                className="mt-5 commandCE d-flex flex-column"
                id="#accordion"
              >
                {toggleJSON.map((cmd) => {
                  return (
                    <div
                      className="command p-3 mx-auto mt-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${cmd.name}`}
                      aria-expanded="false"
                      aria-controls={cmd.name}
                      key={cmd.name}
                    >
                      <div className="d-block">
                        <button className="fs-3 fw-bold commandname">{cmd.name}</button>
                        <i className="bi bi-caret-down-fill iconrrowfloat fs-3"></i>
                      </div>
                      <div
                        id={cmd.name}
                        className="accordion-collapse collapse acc"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordion"
                      >
                        <p className="fs-6 p-0 fw-bold color-gray">
                          Description: {cmd.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
