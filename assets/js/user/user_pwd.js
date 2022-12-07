$(function () {
    var form = layui.form
    var layer = layui.layer

    //自定义表单验证规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码格式错误'
        ],
        updatepwd: function (val) {
            var pwd = $('.layui-form [name=newPassword]').val()
            // console.log(pwd);
            // console.log(val);
            // console.log(pwd);
            // console.log( $('.reg-box'));
            // console.log( $('.reg-box [name=password]'));
            if (val !== pwd) return '两次密码不一致'
        }
    })

    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        // 获取表单数据
        var data = form.val('formUserInfo')
        // console.log(data);
        // console.log(JSON.stringify(data));
        // 发起请求
        $.ajax({
            type: 'POST',
            url: '/auth/my/updateUserInfo',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (res) {
                if (res.status !== 20000) return layer.msg(res.msg)

                layer.msg(res.msg)
                console.log(window.parent);

                $('.layui-form')[0].reset()

                window.parent.logout()

            }

        })
    })


})