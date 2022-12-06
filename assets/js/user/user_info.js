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
                console.log(res);
                if (res.status !== 20000) {
                    layer.msg(res.msg)
                }
                // form表单一键赋值 在form表单上添加 lay-filter="formUserInfo" 属性
                form.val('formUserInfo',res.data)

                // console.log(JSON.stringify(form.val('formUserInfo')));

            }
        })
    }

    // 表单重置

    $('.btnReset').on('click',function(e){
        // 阻止表单的默认提交行为
        e.preventDefault()

        initUserInfo()
    })

    // 更新用户信息
    $('btnSubmit').on('click',function(e){
        // 阻止表单的默认提交行为
        e.preventDefault()
        // 获取表单数据
        var data = form.val('formUserInfo')

        // 发起请求
        $.ajax({
            type:'POST',
            url:'/auth/my/updateUserInfo',
            data: JSON.stringify(data),
            success:function(res){
                console.log(res);
            }
        })
    })


})