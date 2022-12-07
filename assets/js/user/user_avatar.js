$(function () {
    var layer = layui.layer
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
    // 1.2 配置选项
    const options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    }

    // 1.3 创建裁剪区域
    $image.cropper(options)


    // 选择图片
    $('.btnUpImg').on('click', function () {
        $('#file').click()
    })

    $('#file').on('change', function (e) {
        // 拿到图片
        var file = e.target.files[0]
        var newImgURL = URL.createObjectURL(file)

        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
    })

    // 上传图片
    $('.btnUpload').on('click', function () {
        console.log(111);
        // 获取base64图片
        var dataURL = $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
        var data = {
            'userPic': dataURL
        }
        // 发请求
        $.ajax({
            type: 'POST',
            url: '/auth/my/updateUserInfo',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (res) {
                if (res.status !== 20000) {
                    return layer.msg(res.msg)
                }
                layer.msg(res.msg)
                // 调用父级的方法,跟新userinfo显示数据
                window.parent.getUserInfo()
            }
        })
    })
})