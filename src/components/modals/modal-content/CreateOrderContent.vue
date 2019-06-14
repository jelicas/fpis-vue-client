<template>
  <div>
    <h3 class="title is-4">Kreiranje porudžbenice</h3>
    <div class="field">
      <div class="control">
        <div class="select is-primary">
          <select v-model="selectedSupplier">
            <option
              disabled
              value=""
            >Izaberite dobavljača...</option>
            <option
              v-for="supplier in suppliers"
              :value="supplier"
              :key="supplier.taxIdNum"
            >{{supplier.name}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class='footer-order'>
      <button
        class="button is-danger button--mod"
        @click="closeModal"
      >Otkaži</button>
      <button
        class="button is-primary button--mod"
        @click="createOrder"
      >Kreiraj</button>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api/api.js';

export default {
  data() {
    return {
      suppliers: [],
      selectedSupplier: '',
    };
  },
  methods: {
    ...mapMutations('modal', ['closeModal']),
    createOrder() {
      if (this.selectedSupplier === '') {
        return;
      }
      api
        .getLastRequisition()
        .then(({ data }) => {
          console.log(data);
          let requisitionId = data.getLastRequisition.id;

          api
            .getRequisitionItemsPerSupplier({
              requisitionId,
              supplierId: this.selectedSupplier.taxIdNum,
            })
            .then(({ data }) => {
              console.log(data);

              this.$router.push({
                name: 'orderDetails',
                params: {
                  orderId: 0,
                  supplier: this.selectedSupplier,
                  requisition: data.getLastRequisition,
                  requisitionItems: data.getRequisitionItemsPerSupplier,
                },
              });
              this.closeModal();
              this.$destroy();
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  created() {
    api
      .getSuppliersFromLastRequisition()
      .then(({ data }) => {
        console.log(data);
        this.suppliers = data.getSuppliersFromLastRequisition;
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" >
.control {
  text-align: center;
}

.footer-order {
  margin-top: 2rem;
}
.button--mod {
  margin: 0 0.5rem;
}
</style>