<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单、易用、便捷</h5>
    <translate-form @formSubmit="translateText"/>
    <translate-output v-text="translatedText"/>
  </div>
</template>

<script>
import translateForm from './components/translateForm'
import translateOutput from './components/translateOutput'

export default {
  name: 'App',
  data () {
    return {
      translatedText: ''
    }
  },
  components: {
    translateForm,
    translateOutput
  },
  methods: {
    translateText: function (val, language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181027T103507Z.361492b224040c78.c2d7adf306bbb7ca1eca67d0eb9b3033705e9828&lang='+ language +'&text=' + val)
      .then((response) => {
        this.translatedText = response.body.text[0]
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
