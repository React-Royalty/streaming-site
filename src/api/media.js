// media api fetches


export async function fetchMedia() {
  try {
    const response = await fetch(
      'http://localhost:8080/api/media',
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


export async function fetchMediaByTitle(title) {
  try {
      const response = await fetch(
          `http://localhost:8080/api/media/title/${title}`,
          {
              headers: {
                  "Content-Type": "application/json"
              }
          }
      )

      const data = await response.json();
      // console.log(title, " media by title data: ", data);
      return data;
  } catch (error) {
      console.log(error);
  }
}