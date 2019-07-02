<template>
  <div>
    <h1>Orders</h1>
    <button
      class="button is-primary"
      @click="showModal('CreateOrderContent')"
    >Kreiraj porudžbenicu</button>
    <v-client-table
      :data="orders"
      :columns="columns"
      :options="options"
    >

      <div
        slot="action"
        slot-scope="props"
      >
        <button
          class="button is-warning"
          @click="editOrder(props.row)"
        >Izmeni</button>
        <button class="button is-danger">Obriši</button>
      </div>
    </v-client-table>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import api from '@/api/api.js';

export default {
  computed: {
    ...mapState('order', ['orders']),
  },
  data() {
    return {
      columns: ['id', 'supplier.name', 'dateCreated', 'action'],
      options: {
        headings: {
          orderId: 'Broj porudžbenice',
          'supplier.name': 'Dobavljač',
          dateCreated: 'Datum kreiranja',
          action: 'Akcija',
        },
        texts: {
          count: 'Prikaz {from} do {to} od {count} records|{count} porudžbenica|Jedna porudžbenica',
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
    };
  },
  created() {
    console.log('here');
    this.$store.dispatch('order/getAllOrders');
  },
  methods: {
    ...mapMutations('modal', ['showModal']),
    ...mapMutations('order', ['setOrder']),
    editOrder(e) {
      console.log(e);
      let orderId = e.id;
      api.getOrder({ orderId: orderId }).then(({ data }) => {
        console.log(data);
        this.setOrder(data.getOrder);
        this.$router.push({
          name: 'orderEditDetails',
          params: {
            orderId: orderId,
          },
        });
      });
    },
    // setModal(row, modalName) {
    //   this.setSupplier(row);
    //   this.showModal(modalName);
    // }
  },
};
</script>

<style scoped>
</style>