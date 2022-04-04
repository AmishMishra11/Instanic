import axios from "axios";
export const addUser = async (
  tempEmail,
  tempPassword,
  dispatchAuth,
  navigate
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: { email: tempEmail, password: tempPassword },
    });
    console.log(res);
    if (res.status === 200) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.foundUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      navigate("/authpage");
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);
    alert("Invalid email or password");
  }
};
