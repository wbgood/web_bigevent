$(function () {

    // 切换到注册
    $('#link-login').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 切换到登录
    $('#link-reg').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })


    // 自定义表单验证规则
    // 获取form对象
    var form =layui.form
    form.verify({
        pwd:[
            /^[\S]{6,12}$/
            ,'密码格式错误'
          ],
          regpwd:function(val) {
            var pwd = $('reg-box [password]').val()
            if (val !== pwd) return '两次密码不一致'
          }
    })
})