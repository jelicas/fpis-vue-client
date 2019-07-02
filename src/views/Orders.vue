<template>
  <div>
    <h1 class="title">Orders</h1>
    <div class="error">
      <transition enter-active-class="animated shake">
        <p
          class="err-msg"
          v-if="errorOccurred"
        >{{ errorMessage }}</p>
      </transition>
    </div>
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
      errorMessage: '',
      errorOccurred: false,
    };
  },
  created() {
    console.log('here');
    this.$store.dispatch('order/getAllOrders');
  },
  methods: {
    ...mapMutations('modal', ['showModal']),
    ...mapMutations('order', ['setOrder']),
    showError(msg = 'Došlo je do greške. Pokušajte kasnije!') {
      this.errorOccurred = true;
      this.errorMessage = msg;
    },
    editOrder(e) {
      console.log(e);
      let orderId = e.id;
      api
        .getOrder({ orderId: orderId })
        .then(({ data }) => {
          console.log(data);
          this.setOrder(data.getOrder);
          this.$router.push({
            name: 'orderEditDetails',
            params: {
              orderId: orderId,
            },
          });
        })
        .catch(err => {
          console.log(err);
          this.showError();
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
.err-msg {
  color: red;
}
</style>