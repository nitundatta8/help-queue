import React from 'react'

function DebuggingLesson(props) {
  return (
    <React.Fragment>
      <h1>Page Count: {props.pageCount}</h1>
      <h3>{"Have you gone through all the steps on the Learn How to Program debugging lesson?"}</h3>
    </React.Fragment>
  );
}
export default DebuggingLesson;
