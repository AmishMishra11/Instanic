import axios from "axios";

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
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
