<template>
  <div id="translateForm" class="row">
    <div class="col-md-6 col-md-offset-3">
      <form class="well form-inline translateForm" @submit="formsubmit">
        <input class= "form-control" type="text" v-model="textToTranslate" placeholder="请输入要翻译的文本">
        <select class="form-control" v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input class="btn btn-primary" type="submit" value="翻译">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data: function () {
    return {
      textToTranslate: '',
      language: ''
    }
  },
  methods: {
    formsubmit: function (e) {
      e.preventDefault();
      // console.log(this.textToTranslate)
      this.$emit("formSubmit", this.textToTranslate, this.language)
    }
  },
  created () {
    this.language = 'en'
  }
}
</script>

<style>
 .translateForm {
   border: 1px soild #cccccc;
   border-radius: 10px
 }
</style>
