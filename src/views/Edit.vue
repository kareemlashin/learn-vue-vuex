
<template>
  <div class="bg-white rounded shadow p-2">
    <form @submit.prevent="editData">
      <div class="form-group">
        <label for="exampleInputEmail1">id</label>
        <input
          type="number"
          v-model="form.userId"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="text"
          v-model="form.title"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      form: {
        userId: null,
        title: null,
      },
      current: null,
      idItem: null,
    };
  },
  mounted() {
    this.idItem = this.$route.params.id;
    this.current = this.$store.getters.all.filter((x) => {
      x.id == this.$route.params.id;
      if (x.id == this.$route.params.id) return true;
    })[0];
    this.form.userId = this.current.userId;
    this.form.title = this.current.title;
  },
  computed: {},
  methods: {
    editData() {
      let idItem = this.idItem;
      this.$store.dispatch("save", {id:idItem,userId:this.form.userId,title:this.form.title});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

