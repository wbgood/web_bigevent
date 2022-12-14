$(function () {

    // 切换到注册
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 切换到登录
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    // 获取layui的弹出层对象
    var layer = layui.layer

    // 自定义表单验证规则
    // 获取form对象
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码格式错误'
        ],
        regpwd: function (val) {
            var pwd = $('.reg-box [name=password]').val()
            // console.log(val);
            // console.log(pwd);
            // console.log( $('.reg-box'));
            // console.log( $('.reg-box [name=password]'));
            if (val !== pwd) return '两次密码不一致'
        }
    })

    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // console.log('测试注册提交');

        // 获取注册名与密码
        var data = {
            userName: $('#form_reg [name="username"').val(),
            password: $('#form_reg [name="password"]').val()
        }
        // console.log(data);
        // 发起请求
        // $.post('/api/reguser', data, function (reg) {
        // $.post('http://127.0.0.1:8781/auth/reg/userName', JSON.stringify(data), function (reg) {
        //     // console.log(reg);
        //     /* if (reg.status !== 0) {
        //         return layer.msg(reg.message)
        //     }

        //     // 提示注册成功
        //     layer.msg(reg.message)
        //     // 模拟点击跳转到登录页面
        //     $('#link_login').click() */
        // })

        $.ajax({
            url: '/auth/reg/userName',
            type: 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            // ContentType: 'application/json',
            contentType: 'application/json',
            success: function (res) {
                // console.log(res);
                if (res.status !== 20000) {
                    return layer.msg(res.msg)
                }

                // console.log(123);
                layer.msg(res.msg)
                //模拟点击跳转到登录页面
                $('#link_login').click()

            }
        })
    })

    // 检测登录表单的提交事件

    $('#form_login').submit(function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // console.log('测试登录');
        // console.log($(this).serialize().toObject);
        // console.log(JSON.stringify($(this).serialize()));
        // console.log($(this).serializeObject());
        var loginData = $(this).serializeObject()
        // 发起登录请求
        $.ajax({
            method: 'POST',
            url: '/auth/login/userName',
            data: JSON.stringify(loginData),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                // console.log(111);
                // console.log(111);
                // console.log(112);
                if (res.status !== 20000) {
                    return layer.msg(res.msg)
                }
                layer.msg(res.msg)
                // 将token存到本地
                localStorage.setItem('token', res.data.token)
                // 跳转到首页
                location.href = '/index.html'
            },
            error: function(res){
                // console.log(res.responseJSON.code);
                // console.log(res);
            }
        })
    })
})