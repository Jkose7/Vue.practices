import { ref } from "vue";

class AuthService {
  constructor() {
    this.token = ref("");
    this.error = ref("");
  }

  getToken() {
    return this.token;
  }

  getError() {
    return this.error
  }

  async login(email, password) {
    try {
      const response = await fetch("https://hfp69ilv.directus.app/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if('errors' in response) {
        this.error = ""
        return false
      }


      this.token = data.data.access_token;
      return true

    } catch (error) {
      console.error(error);
      return false
    }
  }
}

export default AuthService
