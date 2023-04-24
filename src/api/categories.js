// categories api fetches


export async function fetchHomepageCategories() {
  try {
    const response = await fetch(
      'https://streaming-site.onrender.com/api/categories/homepage',
      // 'http://localhost:8080/api/categories/homepage',
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    const data = await response.json();
    console.log("homepage categories data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}