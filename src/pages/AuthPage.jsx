import { Link, useParams } from "react-router-dom";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";

const AuthPage = () => {
//   const params = useParams();

  return (
    <div>
      <div>
        <Link to={"/auth/login"}>login</Link>
        <Link to={"/auth/register"}>registration</Link>
      </div>
      {/* {params.id === "login" ? <LoginForm /> : <RegisterForm />} */}

      <Link to={"/"}>Cancel</Link>
    </div>
  );
};

export default AuthPage;
