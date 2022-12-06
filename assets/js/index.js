$(function () {
    
    var layer = layui.layer

    
    getUserInfo()
    var fale = '/auth/api/getuserinfo'.indexOf('/login/')
    var fale2 = '/auth/getuserinfo'.indexOf('/auth/')
    // console.log(fale);
    // console.log(fale2);


    // if ('/auth/getuserinfo'.indexOf('/login/') !== -1 || '/auth/getuserinfo'.indexOf('/reg/') !== -1) {
    //    console.log(888);
    //   }

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })

})

// 渲染用户头像
function renderAvatar(user) {
    // console.log(user);
    var username = user.nickname || user.userName
    // console.log(username);

    // 欢迎语处理
    $('#welcome').html('欢迎&nbsp&nbsp' + username)

    // 头像处理
    if (user.userPic !== null) {
        $('.text-avatar').hide()
        $('.layui-nav-img').attr('src', user.user_pic).show()
    } else {
        $('.layui-nav-img').hide()
        var imgStr = username[0].toUpperCase()
        $('.text-avatar').html(imgStr).show()
    }


}

function getUserInfo() {
    // 获取用户信息
    $.ajax({
        method: 'GET',
        url: '/auth/my/getuserinfo',
        success: function (res) {
            // console.log(res);
            if (res.status !== 20000) {
                return layer.msg(res.message)
            }
            renderAvatar(res.data)
        }
    })
}