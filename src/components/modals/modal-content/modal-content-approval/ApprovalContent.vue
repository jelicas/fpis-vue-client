<template>
  <div>
    <div class="header title is-4">
      <h1>{{title}}</h1>
    </div>
    <div class="message label">
      <p>{{message}}</p>
    </div>
    <!-- <div class="footer"> -->
    <button
      class="button is-danger"
      @click="$emit('cancel')"
    >
      Poništi
    </button>
    <button
      class="button is-primary"
      @click="$emit('approve')"
    >
      Potvrdi
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.message {
  margin-bottom: 20px;
}
</style>