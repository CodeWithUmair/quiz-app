import React, { useState } from "react";
import "./home.css";
import Quiz from "./Quiz";
import Question from "./Question";

const Home = () => {
  const [finish, setFinish] = useState(false);
  const [result, setResult] = useState(0);

  if (finish) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2> Result: {result} </h2>
            <button
              onClick={() => {
                setResult(0);
                setFinish(false);
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card text-white bg-dark mb-3 shadow border-black rounded">
              <div className="card-header text-center">
                <h2>🧠 Let's Check your IQ 🧠</h2>
              </div>
              <Quiz
                onResult={(result) => setResult(result)}
                onFinish={(finish) => setFinish(finish)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
