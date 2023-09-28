const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
      cardInfo: {},
      viewCardInfo: false,
    };
  },

  methods: {
    printCardInfo(index) {
      this.viewCardInfo = true;

      console.log(index);

      axios
        .post(
          "http://localhost/esercizio-46-php-dischi-json/php-dischi-json/backend/api/get-discs.php"
        )
        .then((response) => {
          console.log(response.data);
          this.cardInfo = response.data[index];
          console.log(this.cardInfo);
        });
    },

    closeCardInfo() {
      this.viewCardInfo = false;
    },
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
