import axios from "axios";
export const loadNewNotes = async (setNewNote) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/notes",
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      setNewNote(res.data.notes);
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
