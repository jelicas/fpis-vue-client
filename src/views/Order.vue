<template>
  <div>
    <h1 class="title">{{ supplier.name }}</h1>
    <div class="error">
      <transition enter-active-class="animated shake">
        <p
          class="err-msg"
          v-if="errorOccurred"
        >{{ errorMessage }}</p>
      </transition>
    </div>
    <v-client-table
      :data="reqItems"
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
      @click="createOrder"
    >Kreiraj porudžbenicu</button>
  </div>
</template>

<script>
import api from '@/api/api.js';

export default {
  props: ['supplier', 'requisition', 'requisitionItems'],
  data() {
    return {
      columns: [
        'itemSerialNumber',
        'orderedQuantity',
        'totalQuantity',
        'product.name',
        'product.supplierPrice',
        'action',
      ],
      options: {
        headings: {
          itemSerialNumber: 'Broj',
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
      reqItems: this.requisitionItems,
      errorMessage: '',
      errorOccurred: false,
    };
  },
  methods: {
    deleteItem(e) {
      this.reqItems = this.reqItems.filter(el => {
        if (el.itemSerialNumber !== e.itemSerialNumber) return e;
      });
    },
    showError(msg = 'Došlo je do greške. Pokušajte kasnije!') {
      this.errorOccurred = true;
      this.errorMessage = msg;
    },
    createOrder() {
      console.log(this.reqItems);
      let orderItems = this.reqItems.map(e => {
        let orderedQuantity = parseFloat(e.orderedQuantity);
        return {
          requisitionId: e.requisitionId,
          supplierId: this.supplier.taxIdNum,
          quantity: orderedQuantity,
          price: e.product.supplierPrice,
          itemSerialNumber: e.itemSerialNumber,
        };
      });

      let order = {
        employeeId: 1,
        taxIdNum: this.supplier.taxIdNum,
        orderItems,
      };

      api
        .createOrder({ order: order })
        .then(({ data }) => {
          if (data.createOrder === true) {
            console.log('uspesno ste kreirali porudzbenicu');
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
      this.reqItems.forEach(el => {
        if (item.itemSerialNumber === el.itemSerialNumber) {
          el.orderedQuantity = item.orderedQuantity;
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>