import axios from "axios";

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
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
