import React from "react";
import { useAuth } from "../../Contexts/AuthContext";

function Profile() {
  const {
    stateAuth: { userDatails },
  } = useAuth();

  const { firstName, lastName, email } = userDatails[0];

  return (
    <div>
      <h1>Profile</h1>

      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
}

export default Profile;
