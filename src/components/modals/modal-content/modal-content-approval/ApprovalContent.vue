<template>
  <div>
    <div class="header">
      <h1>{{title}}</h1>
    </div>
    <div class="message">
      <p>{{message}}</p>
    </div>
    <div class="footer">
      <button
        class="is-danger"
        @click="$emit('cancel')"
      >
        Poništi
      </button>
      <button
        class="is-primary"
        @click="$emit('approve')"
      >
        Potvrdi
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
</style>