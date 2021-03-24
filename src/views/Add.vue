
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
          @keyup="valid()"

        />
      </div>
      <div >
        <div v-if="$v.form.id.$error">
          <div  v-if="!$v.form.id.required" class="alert alert-danger" role="alert">
            Field is required
          
          </div>
      </div>
    </div>

      <div class="form-group">
        <label for="exampleInputPassword1">title</label>
        <input
          type="text"
    v-model="form.title"
          class="form-control"
          id="exampleInputPassword1"
          @keyup="valid()"
        />
      </div>
      <div v-if="$v.form.title.$error">
        <div  v-if="!$v.form.title.required" class="alert alert-danger" role="alert">
          Field is required
        
        </div>
      </div>
     
      <button type="submit" :disabled="submitStatus" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: "Add",
  created() {},
  data() {
    return {
      submitStatus:true,
      form: {
        id: "",
        title: "",
      },
    };
  },
  validations: {
    form:{  id: {
      required,

    },
    title: {
      required
    }}
  },
  props: {},
  methods: {
    valid(){
      this.$v.form.$touch()

      if (this.$v.form.$invalid) {
        this.submitStatus = true;

      } else {
        this.submitStatus = false;

      }
    },
    onSubmit() {
      this.$v.form.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = true
      } else {
        this.submitStatus = false;
        this.$v.form.$reset;
        this.$v.form.id.$reset;

      this.$store.dispatch("addUsers",{title:this.form.title,userId: this.form.id
});

}
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

