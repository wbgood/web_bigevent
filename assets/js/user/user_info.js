$(function () {
    var layer = layui.layer
    var form = layui.form

    // 获取用户资料
    initUserInfo()

    function initUserInfo() {
        $.ajax({
            type: 'GET',
            url: '/auth/my/getuserinfo',
            success: function (res) {
                // console.log(res);
                if (res.status !== 20000) {
                    layer.msg(res.msg)
                }
                // form表单一键赋值 在form表单上添加 lay-filter="formUserInfo" 属性
                form.val('formUserInfo', res.data)

                // console.log(JSON.stringify(form.val('formUserInfo')));

            }
        })
    }

    // 表单重置

    $('.btnReset').on('click', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()

        initUserInfo()
    })

    // 更新用户信息
    $('.layui-form').on('submit', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // console.log(123);
        // 获取表单数据
        var data = form.val('formUserInfo')
        // console.log(data);
        // 发起请求
        $.ajax({
            type: 'POST',
            url: '/auth/my/updateUserInfo',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (res) {
                // console.log(res);
                if (res.status !== 20000) {
                    layer.msg(res.msg)
                }
                layer.msg(res.msg)
                // 调用父级的方法,跟新userinfo显示数据
                window.parent.getUserInfo()
            }
        })
    })

    // 自定义的表单验证方法
    form.verify({
        nickname: function (val) {
            if (!(/^[\u4e00-\u9fa5a-zA-Z0-9]{2,12}$/).test(val)) {
                return '用户昵称只能是数字,大小写,汉字,3~16位'
            }
        }
    })


})