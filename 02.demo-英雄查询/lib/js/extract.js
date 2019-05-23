;(function (window) {
    window.extract = {
        
        get: function (url, data, callback) {
            // 1.实例化ajax对象 (小黄人对象)
            var xhr = new XMLHttpRequest()
            url += '?'
            url += data
            // 2.设置请求的方法和地址
            xhr.open('get', url)
            // 4.注册回调函数
            xhr.onload = function () {
                callback(xhr.responseText)
            }
            // 5.发送请求 post的数据在send中发送
            xhr.send()
        },
        post: function (url, data, callback) {
            // 1.实例化ajax对象 (小黄人对象)
            var xhr = new XMLHttpRequest()
            // 2.设置请求的方法和地址
            xhr.open('post', url)
            // 3.设置请求头(post才需要)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            // 4.注册回调函数
            xhr.onload = function () {
                callback(xhr.responseText)
            }
            // 5.发送请求 post的数据在send中发送
            xhr.send(data)
        },
        //把get和post写在一起
        //method,url, data, callback属性太多，所以直接传输一个对象，通过对象.属性来调用属性
        
        ajax: function (obj) {
            // 1.实例化ajax对象 (小黄人对象)
            var xhr = new XMLHttpRequest()
            if (obj.method == 'get') {
                obj.url += '?'
                obj.url += obj.data
                // 2.设置请求的方法和地址
                xhr.open(obj.method, obj.url)
            }

            // 3.设置请求头(post才需要)
            if (obj.method == 'post') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

            }
            // 4.注册回调函数
            xhr.onload = function () {
                obj.callback(xhr.responseText)
            }
            // 5.发送请求 post的数据在send中发送
            if (obj.method == 'post') {
                xhr.send(obj.data)

            } else if (obj.method == 'get') {
                xhr.send()

            }
        },
    }
}(window))