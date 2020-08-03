PWA主要是为了丰富web的功能的。比如创建网页快捷方式，离线保存网页内容，实现web的消息推送，实现web更加快速的体验。

承载这些技术的包括manifest.json，service worker。

```javascript
manifest.json介绍：
{
  "name": "Progressive Web App",   //应用全称
  "short_name": "PWA",   //应用名的简写
  "start_url": "/?from=homescreen",  //启动 URL
  "icons": [  //图标声明，浏览器会自动根据当前分辨率和图标的用途选择合适尺寸的图片
    {
      "src": "/static/img/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "/static/img/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "display": "standalone",  //显示模式standalone 或 fullscreen
  "background_color": "#ffffff",  //背景颜色
  "theme_color": "#1976d2" //网站的主题色
  "scope": "/"   //PWA限定作用域，超出范围的部分会以浏览器的方式显示
}


Service Worker介绍：
Service Worker生命周期：注册——》安装——》激活——》监听——》终结

主进程注册：
 if ('serviceWorker' in navigator) {
        // 为了防止作用域污染，将安装前注销所有已生效的 Service Worker
        navigator.serviceWorker.getRegistrations()
          .then(regs => {
            for (let reg of regs) {
              reg.unregister()
            }
            navigator.serviceWorker.register('./sw.js')
          })
      }
worker进程监听：
self.addEventListener('install', () => {
  event.waitUntil(new Promise((resolve, reject) => {
    reject('安装出错')
    // resolve('安装成功')
  }))
})

self.addEventListener('activate', () => {
  // 激活回调的逻辑处理
  console.log('service worker 激活成功')
})

self.addEventListener('fetch', event => {
  console.log('service worker 抓取请求成功: ' + event.request.url)
})


消息推送介绍：
请求允许消息推送
    Notification.requestPermission().then(function (permission) {  
      switch (permission) {
        case 'granted':
          $state.innerText = 'Notification 可用'
          register()
          break
        case 'denied':
          $state.innerText = 'Notification 权限已被禁用'
          break
        default:
          $state.innerText = 'Notification 权限尚未授权'
      }
    })
    
在service worker中显示消息：
//请求允许消息推送
self.registration.showNotification('你好', {/* options */})
.then(function () {
  // 通知展现成功
})
.catch(function (e) {
  // 通知展现未授权
})

在主线程显示通知消息：
  navigator.serviceWorker.getRegistration().then(function (registration) {
    registration.showNotification(title, options)
  })
```
