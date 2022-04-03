import axios from "axios";

export const addNewNote = async (note, setNewNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POSt",
      url: "/api/notes",
      data: { note },
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 201) {
      setNewNote(res.data.notes);
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
