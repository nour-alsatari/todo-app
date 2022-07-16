import { useContext } from "react";
import { LoginContext } from "../auth/login";
import { When } from "react-if";

export default function Auth(props) {
  const login = useContext(LoginContext);

  const isLoggedIn = login.loggedIn;
  const can = login.authorized(props.capability);

  return <When condition={isLoggedIn && can}>{props.children}</When>;
}