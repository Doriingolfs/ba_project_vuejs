<template>
    <div id="landing">
      <div id="logo">
         <img src="../assets/logo.svg" alt="">
      </div>
      <div>
        <webapp-open></webapp-open>
        <webapp-about></webapp-about>
      </div>
      <br>
      <br>
      <div id="pnumber">
        <h6>S: 888-5544</h6>
      </div>
      <br>
      <br>
      <form @submit.prevent="handleSubmit">
        <div class="check">
          <h4>Hafðu samband!</h4>
          <label>Nafn</label>
          <input type="text" required v-model="name" placeholder="Jón Jónsson">
          <label>Netfang</label>
          <input type="email" required v-model="email" placeholder="jon@jonsson.com">
          <label>Símanúmer</label>
          <input type="tel" required v-model="phone" placeholder="5556699">
          <label>Hvað vilt þú vita?</label>
          <textarea v-model="textarea" name="textArea" id="" cols="40" rows="10" placeholder="Skrifaðu eitthvað..."></textarea>
        </div>
        <div class="submit">
          <button>Senda</button>
        </div>
      </form>
    </div>
</template>

<script>
import open from '../components/open.vue'
import about from '../components/about.vue'
export default {
  name: 'Home',
  components: {
    'webapp-open': open,
    'webapp-about': about
  },
  data () {
    return {
      type: 'Contact',
      name: '',
      email: '',
      phone: '',
      textarea: ''
    }
  }
}

</script>

<style lang="scss" scoped>
  #logo {
    display: flex;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 10%;
  }
  img {
    width: 55%;
  }
  #landing {
    padding-bottom: 150px;
  }
  #pnumber {
    display: flex;
    justify-content: center;
  }
  h6 {
    font-size: 88px;
    font-family: 'Poppins', sans-serif;
    color: white;
  }
  form {
    max-width: 50%;
    margin: 60px auto -100px auto;
    background: white;
    text-align: left;
    padding: 50px 100px;
    border-radius: 10px;
  }
  #title {
    text-align: center;
    padding-bottom: 40px;
  }
  h1 {
    font-size: 48px;
    color: white;
  }
  label {
    color: rgb(95, 95, 95);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  textarea {
    padding: 5px;
  }
  select, textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555
  }
  button {
    background: #055756;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
</style>
