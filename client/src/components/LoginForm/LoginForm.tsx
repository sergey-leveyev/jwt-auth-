import { FC, useState, useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div className="container mx-auto mt-3 shadow p-3 bg-white rounded">
      <div className="col-sm-12">
        <input
          type="email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
      </div>
      <div className="col-sm-12">
        <input
          type="password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto">
        <button
          onClick={() => store.login(email, password)}
          className="btn btn-success"
          type="button"
        >
          Login
        </button>
        <button
          onClick={() => store.registration(email, password)}
          className="btn btn-primary"
          type="button"
        >
          Registration
        </button>
      </div>
    </div>
  );
};

export default observer(LoginForm);
