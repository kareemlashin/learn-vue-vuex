
<template>
  <div class="bg-white rounded shadow p-2">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">id</label>
        <input
          type="number"
        v-model="form.id"
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
  name: "Add",
  created() {},
  data() {
    return {
      form: {
        id: "",
        title: "",
      },
    };
  },
  props: {},
  methods: {
    onSubmit() {
      this.$store.dispatch("addUsers",{title:this.form.title,userId: this.form.id
});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

