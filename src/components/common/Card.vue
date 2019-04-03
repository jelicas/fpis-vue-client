<template>
  <div class="card">
    <div class="image-wrapper">
      <i
        class="image"
        :class="image"
      ></i>
    </div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true }
  }
};
</script>

<style scoped lang="scss">
.card {
  margin: 10px;
  border-color: var(--color-yellow);
  width: 270px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: transform 0.15s, border-width 0.15s;
}

.card:hover {
  transform: scale(1.05);
  border-width: 3px;
  cursor: pointer;
}

.card:hover .image-wrapper {
  background-color: var(--color-yellow);
}

.image-wrapper {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
}

i.image {
  height: 150px;
  width: 150px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>