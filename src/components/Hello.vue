<template>
  <div class="hello">
    <h4>아이디</h4>
    <input v-model="email" type="text" ></input>
    <h4>패스워드</h4>
    <input v-model="password" type="password"></input>
    <div>
      <button @click="SignUp()">가입하기</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
