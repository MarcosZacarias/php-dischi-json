const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
    };
  },

  mounted() {
    // console.log(axios);
    axios
      .get(
        "http://localhost/esercizio-46-php-dischi-json/php-dischi-json/backend/api/get-discs.php"
      )
      .then((response) => {
        console.log(response.data);
        this.discs = response.data;
        console.log(this.discs);
      });
  },
}).mount("#app");
