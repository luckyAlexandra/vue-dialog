<template>
<div>
  <transition name="dialog-fade">
    <div class="dialog-container" v-if="open">
      <div class="mask"></div>
      <div class="dialog-modal">
        <span v-if="showClose" data-btn-type="close" class="dialog-close" @click="handleClose">X</span>
        <div v-if="showHead" class="dialog-header">{{title}}</div>
        <div class="dialog-body">
          <div class="only-text">
            <p class="text">{{content}}</p>
          </div>
        </div>
        <div class="dialog-footer">
          <button v-if="showCancel" @click="cancel" data-btn-type="cancel" class="btn btn-hollow">{{cancelBtnText}}</button>
          <button v-if="showConfirm" @click="confirm" data-btn-type="confirm" class="btn btn-solid">{{confirmBtnText}}</button>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>
<script>
  import './style.styl'
  export default {
    // props: ['title', 'content', 'operations'],
    props: {
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: String,
        default: ''
      },
      showClose: {
        type: Boolean,
        default: true
      },
      showHead: {
        type: Boolean,
        default: true        
      },
      showCancel: {
        type: Boolean,
        default: true        
      },
      showConfirm: {
        type: Boolean,
        default: true        
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnText: {
        type: String,
        default:'取消'
      },
      confirm: {
        type: Function,
        default: function () {
        }
      },
      cancel: {
        type: Function,
        default: function () {
        }
      },
      close: {
        type: Function,
        default: function () {

        }
      }
    },
    data () {
      return {
        open: false
      }
    },
    methods: {
      handleOpen () {
        this.open = true
        this.setAlign()
      },
      handleClose () {
        this.open = false
      },
      setAlign () {
        this.$el.style.lineHeight = this.getWindowHeight()
      },
      getWindowHeight () {
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        return h + 'px'
      }
    },
    mounted () {
      let _this = this
      window.addEventListener('resize', () => _this.setAlign())
      window.addEventListener('click', (e) => {
        let btnType = e.target.getAttribute('data-btn-type')
        if (!btnType) return
        let fn = this[btnType]
        let isStopClose = false 
        const stopClose = () => {
          isStopClose = true
        }  
        const next = () => {
          _this.handleClose()
        }          
        fn && fn.call(_this, btnType, stopClose, next)
        !isStopClose && next()
      })
    }
  } 
</script>