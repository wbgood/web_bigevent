// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
  // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
  // options.url = 'http://www.liulongbin.top:3007' + options.url

  // 本地走网关
  // options.url = '127.0.0.1:8782/bigevent/' + options.url

  // options.url = 'http://localhost:8781' + options.url

  options.url = 'http://localhost:8782/bigevent' + options.url
  // options.headers = {
  //   'Content-Type': 'application/json'
  // }

  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }


})

// 自定义获取form表单数据方法
$.fn.serializeObject = function () {
  var ct = this.serializeArray();
  var obj = {};
  $.each(ct, function () {
    if (obj[this.name] !== undefined) {
      if (!obj[this.name].push) {
        obj[this.name] = [obj[this.name]];
      }
      obj[this.name].push(this.value || "");
    } else {
      obj[this.name] = this.value || "";
    }
  });
  return obj;
};
