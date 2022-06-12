import "bootstrap/dist/css/bootstrap.min.css";

export const Explanation = () => {
  return (
    <div className="container mx-auto m-5">
      <h3>short explanation</h3>
      <p>
        Please open the network tab to see the app in action. The access token
        lifecycle is 10 seconds. You can see in the network tab how the Refresh
        Token returns the access token Without the user feeling a difference
      </p>
    </div>
  );
};
