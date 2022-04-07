import axios from "axios";

export const loadArchive = async (dispatchNote) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/archives",
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
