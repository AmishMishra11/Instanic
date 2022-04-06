import axios from "axios";
import { toast } from "react-toastify";

export const removeNote = async (id, note, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/notes/${id}`,
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchNote({ type: "SET_TRASH", payload: note });

      dispatchNote({ type: "SET_NOTE", payload: res.data.notes });

      toast.success("Note sent to Trash", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);

    toast.error("Failed to remove Note ", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
