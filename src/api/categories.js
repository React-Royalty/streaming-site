// categories api fetches


export async function fetchCategories() {
  try {
    const response = await fetch(
      'https://streaming-site.onrender.com/api/categories',
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    const data = await response.json();
    // console.log("categories data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}