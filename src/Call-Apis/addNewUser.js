import axios from "axios";
export const addNewUser = async (
  tempFirstName,
  tempLastName,
  tempEmail,
  tempPassword,
  dispatchAuth,
  Navigate
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        firstName: tempFirstName,
        lastName: tempLastName,
        email: tempEmail,
        password: tempPassword,
      },
    });
    if (res.status === 201) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.createdUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      Navigate("/authpage");
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);
    alert("Error Occured while creating new account");
  }
};
