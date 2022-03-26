export const AuthReducer = (stateAuth, actionAuth) => {
  switch (actionAuth.type) {
    case "GET_USER_DETAILS":
      return { ...stateAuth, userDatails: [actionAuth.payload], isAuth: true };

    case "USER_LOGOUT":
      return { ...stateAuth, userDatails: [], isAuth: false };

    default:
      return stateAuth;
  }
};
