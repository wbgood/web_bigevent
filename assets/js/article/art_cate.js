$(function () {
    // 获取layer
    var layer = layui.layer
    // console.log('测试引入js');

    // 弹出添加分类页面
    var index = null
    $('#btnAddart').on('click', function () {
        index = layer.open({
            title: '添加文章分类',
            content: $('#dialog-add').html(),
            type: 1,
            area: ['500px', '300px']
        });


    })

    // 实现添加分类
    $('body').on('submit', '#form-add', function (e) {
        // 阻止表单的默认行为
        e.preventDefault()

        var data = $(this).serialize()
        console.log(data);
        layer.close(index)
    })


    initArt()
    // 加载分类数据
    function initArt() {
        var data = {
            "status": 0,
            "message": "获取文章分类列表成功！",
            "data": [
                {
                    "Id": 1,
                    "name": "最新",
                    "alias": "ZuiXin",
                    "is_delete": 0
                },
                {
                    "Id": 2,
                    "name": "科技",
                    "alias": "KeJi",
                    "is_delete": 0
                },
                {
                    "Id": 3,
                    "name": "股市",
                    "alias": "GuShi",
                    "is_delete": 0
                },
                {
                    "Id": 4,
                    "name": "历史",
                    "alias": "LiShi",
                    "is_delete": 0
                },
                {
                    "Id": 5,
                    "name": "情感",
                    "alias": "QingGan",
                    "is_delete": 0
                }
            ]
        }

        //   发起请求获取数据
        /*  $.ajax({
             type: 'GET',
             url: '/my/article/cates',
             success: function (res) {
                 if (res.status != 20000) {
                     layer.msg(res.msg)
                 }
 
                 //   获取tempate渲染的数据结构
                 var tplHtml = template('tpl-table', data)
 
                 //  console.log(tplHtml);
 
                 $('tbody').html(tplHtml)
             }
         }) */

        //   获取tempate渲染的数据结构
        var tplHtml = template('tpl-table', data)

        //  console.log(tplHtml);

        $('tbody').html(tplHtml)
    }


})