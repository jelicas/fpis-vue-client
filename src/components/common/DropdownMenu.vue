<template>
  <div
    ref="dropdownMenu"
    class="dropdown"
    :class="{'is-active': dropdownActive}"
  >
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="openDropdown"
      >
        <span>Filter</span>
        <span class="icon is-small">
          <i
            class="fas fa-angle-down"
            aria-hidden="true"
          ></i>
        </span>
      </button>
    </div>
    <div
      class="dropdown-menu"
      id="dropdown-menu"
      role="menu"
    >
      <div class="dropdown-content">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Ime</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary is-rounded"
                  type="text"
                  v-model="name"
                >
              </p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div class="select is-primary">
                <select v-model="selectedOptionForFilterName">
                  <option
                    disabled
                    value=""
                  >Izaberite...</option>
                  <option>počinje sa</option>
                  <option>sadrži</option>
                  <option>završava se sa</option>
                  <option>jednak je</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Adresa</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary is-rounded"
                  type="text"
                  v-model="address"
                >
              </p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div class="select is-primary">
                <select v-model="selectedOptionForFilterAddress">
                  <option
                    disabled
                    value=""
                  >Izaberite...</option>
                  <option>počinje sa</option>
                  <option>sadrži</option>
                  <option>završava se sa</option>
                  <option>jednak je</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">PIB</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  class="input is-primary is-rounded"
                  type="text"
                  v-model="pib"
                >
              </p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div class="select is-primary">
                <select v-model="selectedOptionForFilterPIB">
                  <option
                    disabled
                    value=""
                  >Izaberite...</option>
                  <option>počinje sa</option>
                  <option>sadrži</option>
                  <option>završava se sa</option>
                  <option>jednak je</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label class="checkbox">
        <input
          type="checkbox"
          v-model="checkedCheckbox"
        >
        Iskljucujuci nacin pretrage [AND]
      </label>

      <button
        class="button is-primary"
        @click="filterSuppliers"
      >Primeni</button>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      dropdownActive: false,
      selectedOptionForFilterName: '',
      selectedOptionForFilterAddress: '',
      selectedOptionForFilterPIB: '',
      name: '',
      address: '',
      pib: '',
      checkedCheckbox: false,
    };
  },
  computed: {
    filteringApproach() {
      return this.checkedCheckbox === true ? 'AND' : 'OR';
    },
  },
  destroyed() {
    document.removeEventListener('click', this.closeDropdown);
  },
  methods: {
    ...mapMutations('supplier', ['setSuppliers']),
    openDropdown() {
      this.dropdownActive = !this.dropdownActive;
      if (this.dropdownActive) {
        document.addEventListener('click', this.closeDropdown);
      } else {
        document.removeEventListener('click', this.closeDropdown);
      }
    },
    closeDropdown(e) {
      if (!this.$refs.dropdownMenu.contains(e.target)) {
        this.dropdownActive = false;
        document.removeEventListener('click', this.closeDropdown);
      }
    },
    getCondition(option) {
      switch (option) {
        case 'počinje sa':
          return 'startsWith';
        case 'sadrži':
          return 'contains';
        case 'završava se sa':
          return 'endsWith';
        case 'jednak je':
          return 'eq';
        default:
          return 'nije izabrana';
      }
    },
    filterSuppliers() {
      let filter = {};
      filter[this.filteringApproach] = [];

      if (this.selectedOptionForFilterName && this.name !== '') {
        filter[this.filteringApproach].push({
          name: {
            [this.getCondition(this.selectedOptionForFilterName)]: this.name,
          },
        });
      }

      if (this.selectedOptionForFilterAddress && this.address !== '') {
        filter[this.filteringApproach].push({
          address: {
            [this.getCondition(this.selectedOptionForFilterAddress)]: this.address,
          },
        });
      }

      if (this.selectedOptionForFilterPIB && this.pib !== '') {
        filter[this.filteringApproach].push({
          pib: { [this.getCondition(this.selectedOptionForFilterPIB)]: this.pib },
        });
      }

      console.log(filter);
      api
        .filterSuppliers(filter)
        .then(({ data }) => {
          console.log(data.filterSuppliers);
          this.setSuppliers(data.filterSuppliers);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
#dropdown-menu {
  width: 400px;
}
</style>