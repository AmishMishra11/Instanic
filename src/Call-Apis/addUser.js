import axios from "axios";
import { toast } from "react-toastify";

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
    if (res.status === 200) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.foundUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("first", res.data.foundUser.firstName);
      localStorage.setItem("last", res.data.foundUser.lastName);
      localStorage.setItem("email", res.data.foundUser.email);

      navigate("/authpage");

      toast.success("Login Success", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);
    toast.error("Login Failed", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
