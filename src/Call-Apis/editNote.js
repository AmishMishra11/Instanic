import axios from "axios";

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
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
