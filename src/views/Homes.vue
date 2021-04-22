<template>
  <form @submit.prevent="handleSubmit">
    <div id="title">
      <h1>Heimili</h1>
    </div>
    <br>
    <h4>Hvað er heimilið margir fermetrar?</h4>
    <label>fermetrar</label>
    <input type="number" required v-model="number" placeholder="50">
    <br>
    <h4>Vilt þú að við...</h4>
    <div class="check">
      <input type="checkbox" value="bed" v-model="extra">
      <label>Búum um rúmið?</label>
    </div>
    <div class="check">
      <input type="checkbox" value="bath" v-model="extra">
      <label>Þrífum bað/sturtu?</label>
    </div>
    <div class="check">
      <input type="checkbox" value="oven" v-model="extra">
      <label>Þrífum bakaraofninn?</label>
    </div>
    <div class="check">
      <input type="checkbox" value="micro" v-model="extra">
      <label>Þrífum örbylgjuofninn?</label>
    </div>
    <br>
    <h4>Tímasetningar</h4>
    <label>Viltu reglubundna þjónustu?</label>
    <select v-model="frequent" required>
      <option value="Nei">Nei, bara einu sinni</option>
      <option value="4. Hverja viku">4. Hverja viku</option>
      <option value="3. Hverja viku">3. Hverja viku</option>
      <option value="2. Hverja viku">2. Hverja viku</option>
      <option value="Hverja viku">Hverja viku</option>
    </select>
    <label>Hvaða tíma dags viltu að við komum?</label>
    <select v-model="time" required>
      <option value="Skiptir ekki máli">Skiptir ekki máli</option>
      <option value="Fyrri part dags">Fyrri part dags (08:00 - 14:00)</option>
      <option value="Seinni part dags">Seinni part dags (14:00 - 20:00)</option>
    </select>
    <label>Hvaða dag viltu að við komum?</label>
    <select v-model="day" required>
      <option value="Mánudagur">Mánudag</option>
      <option value="Þriðjudag">Þriðjudag</option>
      <option value="Miðvikudag">Miðvikudag</option>
      <option value="Fimmtudag">Fimmtudag</option>
      <option value="Föstudag">Föstudag</option>
      <option value="Laugardag">Laugardag (kostar auka)</option>
      <option value="Sunnudag">Sunnudag (kostar auka)</option>
    </select>
    <br>
    <h4>Upplýsingar um þig</h4>
    <label>Nafn</label>
    <input type="text" required v-model="name" placeholder="Jón Jónsson">
    <label>Netfang</label>
    <input type="email" required v-model="email" placeholder="jon@jonsson.com">
    <label>Heimilisfang</label>
    <input type="text" required v-model="address" placeholder="aðalstræti 1, íbúð 206">
    <label>Símanúmer</label>
    <input type="tel" required v-model="phone" placeholder="5556699">
    <label>Eitthvað annað sem við þurfum að vita?</label>
    <textarea v-model="textarea" name="textArea" id="" cols="40" rows="10" placeholder="Skrifaðu eitthvað..."></textarea>
    <div class="submit">
      <button>Panta heimsókn</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Homes',
  data () {
    return {
      type: 'Heimili',
      number: '',
      extra: [],
      frequent: '',
      time: '',
      day: '',
      name: '',
      email: '',
      address: '',
      phone: '',
      textarea: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log('Titill:', this.type)
      console.log('Fermetrar:', this.number)
      console.log('Auka:', this.extra)
      console.log('Annað Auka:', this.otherExtra)
      console.log('Reglubundið:', this.frequent)
      console.log('Tími:', this.time)
      console.log('Dagur:', this.day)
      console.log('Nafn:', this.name)
      console.log('Netfang:', this.email)
      console.log('Heimilisfang:', this.address)
      console.log('Símanúmer:', this.phone)
      console.log('Annað:', this.textarea)
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    max-width: 50%;
    margin: 30px auto;
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
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
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
