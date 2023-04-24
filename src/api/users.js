// users api fetches

export async function registerFetch(username, password) {
  try {
    const response = await fetch(
      'https://streaming-site.onrender.com/api/users/register',
      // 'http://localhost:8080/api/users/register',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    )
    const data = await response.json();
    console.log("register data:", data);
    return data;
  } catch(error) {
    console.log(error);
  }
}


export async function loginFetch(username, password) {
  try {
    const response = await fetch(
      'https://streaming-site.onrender.com/api/users/login',
      // 'http://localhost:8080/api/users/login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    )
    const data = await response.json();
    // console.log("login data: ", data);
    return data;
  } catch(error) {
    console.log(error);
  }
}


export async function meFetch() {    
  try {
    const response = await fetch(
      'https://streaming-site.onrender.com/api/users/me',
      // 'http://localhost:8080/api/users/me',
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      }
    )
    const data = await response.json();
    // console.log("users/me data: ", data);
    return data;

  } catch(error) {
    console.log(error);
  }
}