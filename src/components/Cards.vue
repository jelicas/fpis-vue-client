<template>
  <div class="cards">
    <card
      title="UseCase 1"
      image="fas fa-warehouse"
      @click.native="handleUseCaseClick('Suppliers')"
    ></card>
    <card
      title="UseCase 2"
      image="fas fa-folder"
      @click.native="handleUseCaseClick('Orders')"
    ></card>
  </div>
</template>

<script>
import card from "@/components/common/Card.vue";
export default {
  components: {
    card
  },
  methods: {
    handleUseCaseClick(usecase) {
      switch (usecase) {
        case "Suppliers":
          this.$router.push("/suppliers");
          break;
        case "Orders":
          this.$router.push("/orders");
          break;
      }
    }
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
</style>