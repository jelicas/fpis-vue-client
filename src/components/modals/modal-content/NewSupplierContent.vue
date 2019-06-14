<template>
  <div>
    <supplier-content
      :supplier="supplier"
      :cities="cities"
    ></supplier-content>

    <div class="">
      <button
        class="button is-danger"
        @click="close"
      >Otkaži</button>
      <button
        class="button is-primary"
        @click="createSupplier"
      >Potvrdi</button>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import SupplierContent from '@/components/modals/modal-content/SupplierContent.vue';
import api from '@/api/api.js';

export default {
  components: {
    supplierContent: SupplierContent,
  },
  data() {
    return {
      cities: null,
    };
  },
  computed: {
    ...mapState('supplier', ['supplier']),
    ...mapState('supplier', ['suppliers']),
  },
  created() {
    api
      .getAllCities()
      .then(({ data }) => {
        console.log('HERE');
        console.log(data.getCities);
        this.cities = data.getCities;
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    ...mapMutations('modal', ['closeModal']),
    ...mapMutations('supplier', ['addSupplier']),
    createSupplier() {
      console.log(this.supplier);
      const newSupplier = {
        taxIdNum: this.supplier.taxIdNum,
        regNum: this.supplier.regNum,
        name: this.supplier.name,
        address: this.supplier.address,
        city: this.supplier.city.areaCode,
      };
      api
        .addSupplier(newSupplier)
        .then(({ data }) => {
          this.addSupplier(data.addSupplier);
          this.closeModal();
        })
        .catch(err => {
          console.log(err);
        });
    },
    close() {
      this.closeModal();
    },
  },
};
</script>

<style scoped>
</style>