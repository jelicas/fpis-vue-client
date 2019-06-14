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
        @click="updateSupplier"
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
    ...mapMutations('supplier', ['editSupplier']),
    close() {
      this.closeModal();
    },
    updateSupplier() {
      const editedSupplier = {
        taxIdNum: this.supplier.taxIdNum,
        regNum: this.supplier.regNum,
        name: this.supplier.name,
        address: this.supplier.address,
        city: this.supplier.city.areaCode,
      };
      api
        .editSupplier(editedSupplier)
        .then(({ data }) => {
          console.log(data.updateSupplier);
          this.editSupplier(data.updateSupplier);
          console.log('bla');
          this.closeModal();
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>