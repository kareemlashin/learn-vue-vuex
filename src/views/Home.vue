<template>
  <div class="home pt-3">
  <div class="loading" v-if="cars.length ==0"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <router-view></router-view>

          <div>
          <div class="text-center" v-if="this.$route.name != 'Add'">
          <router-link to="/Add" class="mx-auto d-inline-block my-3 btn-all rounded-pill">add</router-link>
          
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            v-for="item in cars"
            :key="item.id"
            class="shadow p-3 my-3 rounded bg-white postion-relitive"
          >
            <div>
              {{ item.id }}
              <div>{{ item.title }}</div>
              <div>{{ item.userId }}</div>
              <div>
              <div class="all-option">
              
              <button class="Edit" @click="Edit(item.id)"> <i class="far fa-edit"></i> </button>
              <button class="deleteItem" @click="deleteItem(item.id)"> <i class="far fa-trash-alt"></i> </button>
              </div>

              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  computed: {
    cars() {
      return this.$store.getters.all;
    },
  },
  methods:{
    Edit(id){ 
      this.$router.push('/Edit/'+id)
    },
    deleteItem(id){
            this.$store.dispatch("deleteUser", id);

    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
button{
  background: transparent;
  border: none;
  outline: none;
}
.deleteItem{
  color: #f5325c ;
}
.Edit{
  color: #ffb822 ;
}
.all-option{
  position: absolute;
  top: 5px;
  right: 5px;
}
.postion-relitive{
  position: relative !important;
}
.btn-all{
color: #007BFF;
padding: 5px 50px;
border: 1px solid #007BFF;
font-size: 20px;
font-weight: 600;
text-decoration: none !important;
&:hover{
  background: #007BFF;
  color: #fff !important;
}
}
.loading{
  background: #F4F4F4;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
}
</style>
