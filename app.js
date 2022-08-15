const app = Vue.createApp({
  // we have access to this object because of the CDN <script src="https://unpkg.com/vue@3"></script>
  // template:
  // <img :class="gender" :src="picture" />
  // <h1>{{firstName}} {{lastName}}</h1>
  // <h3>Email: {{email}}</h3>
  // <button v-on:click="getUser()" :class="gender">Get Random User</button>
  //we v-bind the class attribute with a : because 'gender' is a variable here in our script that could lead to either a 'male' class or a 'female' class
  //, // we can also copy/paste this html tag AS IS into index.html and it'll still work (as long as it's in that "app" div)

  data() {
    // data needs to be a function that returns an object
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      // console.log(this.firstName)
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      // console.log(results)
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
