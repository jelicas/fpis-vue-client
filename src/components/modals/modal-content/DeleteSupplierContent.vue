<template>
  <div>
    <approval-content
      title="Brisanje dobavljača"
      message="Da li ste sigurni da želite da obrišete dobavljača iz baze?"
      @cancel="closeModal"
      @approve="removeSupplier"
    ></approval-content>
    <div class="error">
      <transition enter-active-class="animated shake">
        <p
          class="err-msg"
          v-if="errorOccurred"
        >{{ errorMessage }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import approvalContent from '@/components/modals/modal-content/modal-content-approval/ApprovalContent.vue';
import { mapState, mapMutations } from 'vuex';
import api from '@/api/api.js';

export default {
  components: {
    approvalContent,
  },
  data() {
    return {
      errorMessage: '',
      errorOccurred: false,
    };
  },
  computed: {
    ...mapState('supplier', ['supplier']),
  },
  methods: {
    ...mapMutations('modal', ['closeModal']),
    ...mapMutations('supplier', ['deleteSupplier']),
    showError(msg = 'Došlo je do greške. Pokušajte kasnije!') {
      this.errorOccurred = true;
      this.errorMessage = msg;
    },
    removeSupplier() {
      api
        .deleteSupplier({ taxIdNum: this.supplier.taxIdNum })
        .then(({ data }) => {
          if (data.deleteSupplier === false) {
            this.showError();
          } else {
            this.deleteSupplier(this.supplier.taxIdNum);
            this.closeModal();
          }
        })
        .catch(err => {
          console.log(err);
          this.showError();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>