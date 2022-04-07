import axios from "axios";
import { toast } from "react-toastify";

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
    console.log(res.data.createdUser);
    if (res.status === 201) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.createdUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("first", res.data.createdUser.firstName);
      localStorage.setItem("last", res.data.createdUser.lastName);
      localStorage.setItem("email", res.data.createdUser.email);
      toast.success("Signup Success", {
        position: "top-right",
        autoClose: 2000,
      });
      Navigate("/authpage");
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);

    toast.error("Signup Failed", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
