<template>
  <div>
    {{supplier.name}}

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

      <div slot="quantity">
        <input type="number">
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
        'quantity',
        'totalQuantity',
        'product.name',
        'product.supplierPrice',
        'action',
      ],
      options: {
        headings: {
          itemSerialNumber: 'Redni broj',
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
    };
  },
  methods: {
    deleteItem(e) {
      this.reqItems = this.reqItems.filter(el => {
        if (el.itemSerialNumber !== e.itemSerialNumber) return e;
      });
    },
    createOrder() {
      let orderItems = this.reqItems.map(e => ({
        requisitionId: e.requisitionId,
        supplierId: this.supplier.taxIdNum,
        quantity: 25,
        price: e.product.supplierPrice,
        itemSerialNumber: e.itemSerialNumber,
      }));

      let order = {
        employeeId: 1,
        taxIdNum: this.supplier.taxIdNum,
        orderItems,
      };

      console.log(this.$store.getters.getUser);
      console.log(order);
      api
        .createOrder({ order: order })
        .then()
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss">
</style>