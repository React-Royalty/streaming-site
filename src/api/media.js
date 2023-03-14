// media api fetches


export async function fetchMedia() {
  try {
    const response = await fetch(
      'http://localhost:3001/api/media',
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    const data = await response.json();
    // console.log("media data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}