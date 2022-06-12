import "bootstrap/dist/css/bootstrap.min.css";

const AboutLogin = () => {
  return (
    <div className="container mx-auto m-5">
      <h3>About the app</h3>
      <p>
        The purpose of this app is to introduce the use of Refresh Token and
        Access Token to allow the user to receive the latest list of users. Do
        not worry about the email with which you will register it will be deleted
        after a while.
      </p>
      <p className="text-primary">
        After registration you will be required to activate your account. Please
        use active email
      </p>
    </div>
  );
};

export default AboutLogin;
