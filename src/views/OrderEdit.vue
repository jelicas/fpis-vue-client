<template>
  <div>
    <h1 class="title">{{ order.supplier.name }}</h1>
    <div class="error">
      <transition enter-active-class="animated shake">
        <p
          class="err-msg"
          v-if="errorOccurred"
        >{{ errorMessage }}</p>
      </transition>
    </div>
    <v-client-table
      :data="order.orderItems"
      :columns="columns"
      :options="options"
    >

      <div
        slot="action"
        slot-scope="props"
      >

        <button
          class="button is-danger"
          @click="deleteItem(props.row)"
        >Obriši</button>
      </div>

      <div
        slot="orderedQuantity"
        slot-scope="props"
      >
        <input
          type="number"
          v-model="props.row.orderedQuantity"
          @change="changeInputOrder(props.row)"
        >
      </div>
    </v-client-table>
    <button
      class="button is-primary"
      @click="editOrder"
    >Izmeni porudžbenicu</button>
  </div>
</template>

<script>
import api from '@/api/api.js';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('order', ['order']),
  },
  data() {
    return {
      columns: [
        'serialNumber',
        'orderedQuantity',
        'totalQuantity',
        'product.name',
        'product.supplierPrice',
        'action',
      ],
      options: {
        headings: {
          serialNumber: 'Redni broj',
          orderedQuantity: 'Potvrđena količina',
          totalQuantity: 'Trebovana količina',
          'product.name': 'Proizvod',
          'product.supplierPrice': 'Cena',
          action: 'Akcija',
        },
        texts: {
          count:
            'Prikaz {from} do {to} od {count} records|{count} stavke trebovanja|Jedna stavka trebovanja',
          first: 'Prva',
          last: 'Poslednja',
          filter: '',
          filterPlaceholder: 'Pretraži...',
          limit: 'Rezultati:',
          page: 'Strana:',
          noResults: 'Nema rezultata',
          filterBy: 'Filter by {column}',
          loading: 'Učitavanje...',
          defaultOption: 'Izaberite {column}',
          columns: 'Kolone',
        },
      },
      deletedItems: [],
      errorMessage: '',
      errorOccurred: false,
    };
  },
  methods: {
    showError(msg = 'Došlo je do greške. Pokušajte kasnije!') {
      this.errorOccurred = true;
      this.errorMessage = msg;
    },
    deleteItem(e) {
      e.orderedQuantity = 0;
      this.deletedItems.push(e);
      this.order.orderItems = this.order.orderItems.filter(el => {
        if (el.serialNumber !== e.serialNumber) return e;
      });
      console.log(e);
    },
    editOrder() {
      let deletedItems = this.deletedItems.map(e => {
        let orderedQuantity = parseFloat(e.orderedQuantity);
        return {
          requisitionId: e.requisitionId,
          supplierId: e.supplierId,
          quantity: orderedQuantity,
          price: e.product.supplierPrice,
          itemSerialNumber: e.itemSerialNumber,
        };
      });

      let updatedItems = this.order.orderItems.map(e => {
        let orderedQuantity = parseFloat(e.orderedQuantity);
        return {
          requisitionId: e.requisitionId,
          supplierId: e.supplierId,
          quantity: orderedQuantity,
          price: e.product.supplierPrice,
          itemSerialNumber: e.itemSerialNumber,
        };
      });

      let orderItems = deletedItems.concat(updatedItems);
      let order = {
        id: this.order.id,
        employeeId: 1,
        taxIdNum: this.order.supplier.taxIdNum,
        orderItems,
      };

      api
        .editOrder({ order: order })
        .then(({ data }) => {
          if (data.editOrder === true) {
            console.log('uspesno ste izmenili porudzbenicu');
            this.$router.push('/orders');
          } else {
            console.log('niste uspesno kreirali porudzbenicu');
            this.showError();
          }
        })
        .catch(e => {
          console.log(e);
          this.showError();
        });
    },
    changeInputOrder(item) {
      this.order.orderItems.forEach(el => {
        if (item.serialNumber === el.serialNumber) {
          el.orderedQuantity = item.orderedQuantity;
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>