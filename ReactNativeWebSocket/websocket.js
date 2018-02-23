

// import { official_website } from '../../config'

var ws = null

const start = ({ onmessage = ()=>{} }) => {

  if (ws) {
    stop()
  }

    ws = new WebSocket('ws://host.com/path');

    ws.onopen = () => {
        // 打开一个连接
        ws.send('something'); // 发送一个消息
    };

    ws.onmessage = (e) => {
        // 接收到了一个消息
        console.log(e.data);
    };

    ws.onerror = (e) => {
        // 发生了一个错误
        console.log(e.message);
    };

    ws.onclose = (e) => {
        // 连接被关闭了
        console.log(e.code, e.reason);
    };
}

const stop = () => {
  if (ws) {
    ws.onclose = () => {}
    ws.close()
    ws = null
  }
}

export default {
  start,
  stop
}



// import io from 'socket.io-client'
/*
// 强制指定使用 websocket 作为传输通道
let socket = io.connect(api_url, {
    transports: ['websocket']
});


socket.on('connect', function(){

  // console.log('1312312');

  this.on('online-user-count', (res)=>{
    console.log(res);
  })

  // setInterval(()=>{
  //   console.log('心跳');
  //   socket.emit('heartbeat')
  // }, 1000 * 60)

});

socket.on('disconnect', this.runWebSokcet);
*/
