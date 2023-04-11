// categories api fetches


export async function fetchCategories() {
  try {
    const response = await fetch(
      'http://localhost:8080/api/categories',
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