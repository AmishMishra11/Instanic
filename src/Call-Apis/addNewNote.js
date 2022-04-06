import axios from "axios";
import { toast } from "react-toastify";

export const addNewNote = async (note, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: "/api/notes",
      data: { note },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      dispatchNote({ type: "SET_NOTE", payload: res.data.notes });

      toast.success("New Note Added", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);

    toast.error("Failed to Create Note", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
