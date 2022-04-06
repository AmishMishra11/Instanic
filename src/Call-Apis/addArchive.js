import axios from "axios";
import { toast } from "react-toastify";

export const addArchive = async (id, note, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: `/api/notes/archives/${id}`,
      data: { note },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      dispatchNote({ type: "SET_NOTE", payload: res.data.notes });
      dispatchNote({ type: "SET_ARCHIVE", payload: res.data.archives });

      toast.success("Added to Archive", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);

    toast.error("Failed to Archive Note", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
