$(function () {
    // 获取layer
    var layer = layui.layer
    var form = layui.form
    // console.log('测试引入js');

    // 弹出添加分类页面
    var indexAdd = null
    $('#btnAddart').on('click', function () {
        indexAdd = layer.open({
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
        console.log(form.val('form-add'));
        var data = $(this).serialize()
        // console.log(data);
        layer.close(indexAdd)
    })


    initArt()
    // 加载分类数据
    function initArt() {
        console.log(222);
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
    var indesEdit = null
    // 弹出分类编辑
    $('tbody').on('click', '.btn-edit', function () {
        // console.log('ok');
        indesEdit = indexEdit = layer.open({
            title: '编辑分类',
            content: $('#dialog-edit').html(),
            type: 1,
            area: ['500px', '300px']
        });
        // 获取id
        var id = $(this).attr('data-id')
        //查询数据回显到编辑框
        // $.ajax({
        //     method: 'GET',
        //     url: '' + id,
        //     success: function (res) {
        //         if (res.status !== 20000) {
        //             layer.msg(res.msg)
        //         }
        //         // layer.msg(res.msg)
        //         // 给form表单一件赋值
        //         form.val('form-edit',res.data)
        //         // 关闭弹出层
        //     }
        // })

        var res = {
            "status": 0,
            "message": "获取文章分类数据成功！",
            "data": {
                "Id": 1,
                "name": "最新",
                "alias": "ZuiXin",
                "is_delete": 0
            }
        }
        form.val('form-edit', res.data)
        // console.log(res);

    })

    // 编辑分类
    $('body').on('submit', '#form-edit', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // console.log(1);
        //获取表单数据
        var data = form.val('form-edit')
        // console.log(data);

        // 发起请求
        /*  $.ajax({
             method: 'POST',
             url: '',
             data: data,
             success: function (res) {
                 if (res.status !== 2000 -) {
                     layer.msg(res.msg)
                 }
                 // 修改成功
                 layer.msg(res.msg)
                 关闭弹窗
                 form.close(indesEdit)
                 initArt()
             }
         }) */

        layer.close(indesEdit)
    })

    // 分类删除
    $('tbody').on('click', '.btn-delete', function () {

        layer.confirm('确定删除吗?', { icon: 3, title: '提示' }, function (index) {
            //do something

            // console.log(1);
            //获取自定义数据
            var id = $(this).attr('data-id')
            // 发请求
            // $.ajax({
            //     method:'GEI',
            //     url:''+id,
            //     success:function(res){
            //         if (res.status !==2000) {
            //             layer.msg(res.mgs)
            //         }
            //         layer.msg(res.msg)
            //         // 重新加载页面
            //         initArt()
            //     }
            // })  
            layer.close(index);
        });

    })





})