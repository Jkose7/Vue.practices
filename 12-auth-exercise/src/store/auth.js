import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: "",
      email: "",
      password: "",
      isAuth: false
    };
  },
  actions: {
    async auth() {
      const auth = getAuth();
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        this.token = res.user;
        
        alert("Success");
      } catch (err) {
        alert(err);
      }
    },
  },
});
