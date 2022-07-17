import React from "react";

const Question = ({ question }) => {
  return (
    <>
      <h4
        className="card-title text-center"
        dangerouslySetInnerHTML={{ __html: question }}
      ></h4>
    </>
  );
};

export default Question;
