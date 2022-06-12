import { useContext, useEffect, useState } from "react";

import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { UserInterface } from "./models/User-interface";
import UserService from "./services/UserService";

import LoginForm from "./components/LoginForm/LoginForm";
import Activate from "./components/Activate/Activate";
import AboutLogin from "./components/About/AboutLogin";
import { Explanation } from "./components/About/Explanation";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  async function getAllUsers() {
    try {
      const response = await UserService.fetchUser();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>Loading</div>;
  }

  if (!store.isAuth) {
    return (
      <>
        <div className="container mx-auto m-5 text-center">
          <h1>Welcom to</h1>
          <h2>jwt auth system</h2>
        </div>

        <LoginForm />
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          <button className="btn btn-warning mx-auto" onClick={getAllUsers}>
            Get All Users
          </button>
        </div>

        <AboutLogin />
      </>
    );
  }

  if (!store.user.isActivated) {
    return <Activate />;
  }

  return (
    <>
      <div className="container mx-auto m-5 text-center">
        <h1>{store.isAuth ? `Welcom ${store.user.email}` : "place login"}</h1>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button
            className="btn btn-danger mt-3"
            onClick={() => store.logout()}
          >
            Logout
          </button>
          <button className="btn btn-warning " onClick={getAllUsers}>
            Get All Users
          </button>
        </div>

        <div className="mt-5">
          {users.map((user) => {
            return (
              <h5 className="border border-secondary" key={user.email}>
                {user.email}
              </h5>
            );
          })}
        </div>
      </div>
      <Explanation />
    </>
  );
}

export default observer(App);
