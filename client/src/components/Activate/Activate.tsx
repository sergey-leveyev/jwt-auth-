import { useContext } from "react";
import { Context } from "../..";

import "bootstrap/dist/css/bootstrap.min.css";

function Activate() {
  const { store } = useContext(Context);

  return (
    <div className="container mx-auto m-5 text-center">
      <h1>Please activate your account</h1>
      <p>
        To activate your account go to your email and Click on the activation
        link
      </p>
      <p>If you do not see the email please check your spam</p>
      <button className="btn btn-warning mt-2" onClick={() => store.logout()}>
        Logout
      </button>
    </div>
  );
}

export default Activate;
