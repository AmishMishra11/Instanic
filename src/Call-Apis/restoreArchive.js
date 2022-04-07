import axios from "axios";
import { toast } from "react-toastify";

export const restoreArchive = async (id, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: `/api/archives/restore/${id}`,
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchNote({ type: "SET_ARCHIVE", payload: res.data.archives });
      dispatchNote({ type: "SET_NOTE", payload: res.data.notes });

      toast.success("Note resored", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);

    toast.error("Failed to resore Note", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
