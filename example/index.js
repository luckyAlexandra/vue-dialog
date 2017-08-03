import Vue from 'vue'
import vueDialog from '../index.js'

new Vue({
  el: '#container',
  data () {
    return {
      dialogOpts: {
        title: 'test',
        content: 'contentcontent'
      }
    }
  },
  methods: {
    test1 () {
      this.showDialog({
        content: '弹窗1'
      })
    },
    test2 () {
      this.showDialog({
        content: '弹窗2',
        confirm: function () {
          console.log('confirm2')
        }
      })
    },
    test3 () {
      this.showDialog({
        content: '弹窗3'
      })
    },
    showDialog (options) {
      this.dialogOpts = options
      this.$refs.dialog.handleOpen()
    },
    confirm2 (autoClose) {
      console.log('confirm2')
    }
  },
  components: {
    'vue-dialog': vueDialog
  }
})