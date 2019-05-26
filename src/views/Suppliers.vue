<template>
  <div>
    <h1 class="title">Dobavljači</h1>
    <button
      class="button is-primary"
      @click="setModal(emptySupplier, 'NewSupplierContent')"
    >Kreiraj dobavljača</button>
    <v-client-table
      :data="suppliers"
      :columns="columns"
      :options="options"
    >

      <div
        slot="action"
        slot-scope="props"
      >
        <button
          class="button is-warning"
          @click="setModal(props.row, 'EditSupplierContent')"
        >Izmeni</button>
        <button
          class="button is-danger"
          @click="setModal(props.row, 'DeleteSupplierContent')"
        >Obriši</button>
      </div>
    </v-client-table>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("supplier", ["suppliers"])
  },
  data() {
    return {
      emptySupplier: {
        taxIdNum: "",
        regNum: "",
        address: "",
        name: "",
        city: { areaCode: "11000" }
      },
      columns: [
        "taxIdNum",
        "regNum",
        "name",
        "city.areaCode",
        "city.name",
        "action"
      ],
      options: {
        headings: {
          taxIdNum: "Poreski broj",
          regNum: "Matični broj",
          name: "Naziv firme",
          "city.areaCode": "PTT",
          "city.name": "Grad",
          action: "Akcija"
        },
        texts: {
          count:
            "Prikaz {from} do {to} od {count} records|{count} dobavljača|Jedan dobavljač",
          first: "Prvi",
          last: "Poslednji",
          filter: "",
          filterPlaceholder: "Pretraži...",
          limit: "Rezultati:",
          page: "Strana:",
          noResults: "Nema rezultata",
          filterBy: "Filter by {column}",
          loading: "Loading...",
          defaultOption: "Izaberite {column}",
          columns: "Kolone"
        },
        sortable: ["name", "city.name", "city.areaCode"],
        filterable: ["name", "city.name", "city.areaCode"]
      }
    };
  },
  created() {
    this.$store.dispatch("supplier/getAllSuppliers");
  },
  methods: {
    ...mapMutations("modal", ["showModal"]),
    ...mapMutations("supplier", ["setSupplier"]),
    setModal(row, modalName) {
      this.setSupplier(row);
      this.showModal(modalName);
    }
  }
};
</script>

<style scoped>
</style>