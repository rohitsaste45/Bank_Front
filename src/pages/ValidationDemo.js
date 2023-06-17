import { useRef, useState } from "react";

function ValidationDemo() {
  let formRef = useRef();

  let submitAction = () => {
    formRef.current.classList.add("was-validated");

    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <h1>Validation Demo</h1>
          <form ref={formRef} className="needs-validation " novalidate>
            <input
              type="text"
              className="form-control"
              placeholder="Enter..."
              minLength="3"
              required
            />

            <input
              type="text"
              className="form-control"
              placeholder="Enter kuchbhi.."
              required
            />

            <input type="button" value="Submit" onClick={submitAction} />
          </form>
        </div>
      </div>
    </>
  );
}

export default ValidationDemo;
