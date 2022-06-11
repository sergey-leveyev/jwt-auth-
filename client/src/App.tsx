import { useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { UserInterface } from "./models/User-interface";
import UserService from "./services/UserService";

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
      <div>
        <LoginForm />
        <button onClick={getAllUsers}>Get All Users</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{store.isAuth ? `Welcom ${store.user.email}` : "place login"}</h1>
      <button onClick={() => store.logout()}>Logout</button>

      <button onClick={getAllUsers}>Get All Users</button>

      {users.map((user) => {
        return <div key={user.email}>{user.email}</div>;
      })}
    </div>
  );
}

export default observer(App);
