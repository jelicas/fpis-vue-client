<template>
  <div>
    <approval-content
      title="Brisanje dobavljača"
      message="Da li ste sigurni da želite da obrišete dobavljača iz baze?"
      @cancel="closeModal"
      @approve="removeSupplier"
    ></approval-content>
  </div>
</template>

<script>
import approvalContent from "@/components/modals/modal-content/modal-content-approval/ApprovalContent.vue";
import { mapState, mapMutations } from "vuex";
import api from "@/api/api.js";

export default {
  components: {
    approvalContent
  },
  computed: {
    ...mapState("supplier", ["supplier"])
  },
  methods: {
    ...mapMutations("modal", ["closeModal"]),
    ...mapMutations("supplier", ["deleteSupplier"]),
    removeSupplier() {
      api
        .deleteSupplier({ taxIdNum: this.supplier.taxIdNum })
        .then(({ data }) => {
          console.log("gere");
          console.log(data);
          this.deleteSupplier(this.supplier.taxIdNum);
          this.closeModal();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>