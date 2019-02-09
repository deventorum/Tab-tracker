<template>
  <div class="register">
    <h1>Register</h1>
    <form id="registration-form" action="/register">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Enter your email">
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Enter your password">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: 'abc',
      password: 'password',
    };
  },
  watch: {
    email(value) {
      // eslint-disable-next-line
      console.log('Email has changed', value);
    },
  },
  mounted() {
    setTimeout(() => {
      this.email = 'hello world';
    }, 2000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    max-width: 300px;
    margin: 10px;
    padding: 10px;
    font-size: 1.5rem;
  }
  #registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
