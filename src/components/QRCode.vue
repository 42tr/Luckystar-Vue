<template>
  <div class='QRCodeComp'>
    <div>输入二维码解析的内容</div>
    <textarea id='msg'></textarea>
    <div>
      <button @click='getQRCode()'>生成</button>
    </div>
    <div>生成的二维码</div>
    <img id='QRCodeImg' style='height: 6rem; width: 6rem;'/>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'QRCode',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getQRCode () {
      var msg = $('#msg').val()
      if (msg === '') {
        this.kPopup('未输入内容')
        return
      }
      this.$api.qrcode.getQRCode(msg).then(res => {
        if (res.code === 0) {
          var image = 'data:image/png;base64,' + res.data
          $('#QRCodeImg').attr('src', image)
        } else {
          alert(res.msg)
        }
      })
    }
  }
}
</script>

<style>
.QRCodeComp {
  background-color: #F7F9F7;
}
.QRCodeComp textarea {
  margin-left: 2%;
  width: 80%;
}
</style>
