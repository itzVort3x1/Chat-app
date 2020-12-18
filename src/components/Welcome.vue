<template>
  <div class="Welcome container">
   <div class="card">
     <div class="card-content centre-align">
       <h2 class="teal-text">WELCOME</h2>
       <form @submit.prevent="enterChat">
         <label for="name">Enter your name:</label>
         <input type="text" name="name" v-model="name">
         <p v-if="feedback" class="red-text">{{ feedback }}</p>
         <button class="btn teal chatButton">ENTER CHAT</button>
       </form>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
     name: null,
     feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: {name: this.name}})
      }else{
        this.feedback = 'You need to enter a name in order to continue to the chat room'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chatButton{
  margin-top: 20px;
}
.Welcome{
  max-width: 600px;
  margin-top: 100px;
  text-align: center;
}
</style>
