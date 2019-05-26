<template>
  <div>
    <form action="post">
      <div class="field">
        <label class="label">Poreski broj</label>
        <div class="control">
          <input
            class="input is-rounded"
            type="text"
            v-model="supplier.taxIdNum"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Naziv</label>
        <div class="control">
          <input
            class="input is-rounded"
            type="text"
            v-model="supplier.name"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Adresa</label>
        <div class="control">
          <input
            class="input is-rounded"
            type="text"
            v-model="supplier.address"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Registarski broj</label>
        <div class="control">
          <input
            class="input is-rounded"
            type="text"
            v-model="supplier.regNum"
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Grad</label>
        <div class="control">
          <div class="select is-primary">
            <select v-model="supplier.city.areaCode">
              <option
                v-for="city in cities"
                :key="city.areaCode"
                :value="city.areaCode"
              >
                {{ city.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  props: { supplier: { type: Object }, cities: { type: Array } }
};
</script>

<style lang="scss" scoped>
</style>