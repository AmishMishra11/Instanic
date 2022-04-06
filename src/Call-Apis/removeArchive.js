import axios from "axios";

export const removeArchive = async (id, dispatchNote) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/archives/delete/${id}`,
      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchNote({ type: "SET_ARCHIVE", payload: res.data.archives });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
