<template>
  <div class="chat__container">
    <div class="wrapper__container">
      <div class="chat__root">
        <div class="chat__content--introduce">
          <pre>
            你好！
                欢迎你来到这个房间。
          </pre>
        </div>
      </div>

      <div class="chat__send--meg">
        <input placeholder="发送内容" type="text">
        <button>SEND</button>
      </div>
    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client'

  export default {
    created() {
      const socket = io('http://localhost:3002', {
        path: '/ChatRoom',
        transports: ['websocket', 'polling', 'flashsocket'],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        forceNew: true
      })
      console.log(socket)
      socket.on('news', function (data) {
        console.log(data)
        socket.emit('my other event', {my: 'data'})
      })
      socket.on('event', function (data) {
        console.log('allen')
      })
      socket.on('disconnect', function () {
        console.log('allen')
      })
    }
  }
</script>

<style lang="scss" scoped>
  .chat__container {
    background-color: #fff;
    padding: 20px 0;
  }

  .chat__root {
    border: 4px solid #333;
    width: 100%;
    height: 80vh;
  }

  .chat__content--introduce {
    background-color: #f7d708;
  }

  .chat__send--meg {
    margin-top: 20px;
    position: relative;
    input {
      height: 40px;
      width: 100%;
      padding: 0 100px 0 20px;
      border: 4px solid #333;
    }
    button {
      position: absolute;
      right: 4px;
      top: 4px;
      height: 32px;
      border: none;
      border-radius: 0;
      border-left: 4px solid #333;
      background-color: #fff;
      transition: all 0.3s;
      &:hover {
        background-color: #f7d708;
      }
    }

  }
</style>
