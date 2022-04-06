import axios from "axios";
import { toast } from "react-toastify";

export const editNote = async (id, note, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: `/api/notes/${id}`,
      data: { note },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      dispatchNote({ type: "SET_NOTE", payload: res.data.notes });

      toast.success("Note Edit Success", {
        position: "top-right",
        autoClose: 1000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);

    toast.error("Failed to Edit Note", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
