const API_URL = "http://127.0.0.1:5000/api";


interface RegisterData {
  name: string;
  email: string;
  password: string;
}


interface LoginData {
  email: string;
  password: string;
}


export async function registerUser(
  data: RegisterData
) {

  const response = await fetch(
    `${API_URL}/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)
    }
  );


  const result = await response.json();

  return result;
}


export async function loginUser(
  data: LoginData
) {

  const response = await fetch(
    `${API_URL}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)
    }
  );


  const result = await response.json();

  return result;
}