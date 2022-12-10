$(function () {
    var layer = layui.layer
    var form = layui.form
    // 定义请求参数
    var data = {
        'pagenum': 1,
        'pagesize': 5,
        'cateId': '',
        'state': ''
    }
    initCateName()
    initList()
    // 初始化页面数据
    function initList() {
        var res = {
            "status": 0,
            "message": "获取文章列表成功！",
            "data": [
                {
                    "Id": 1,
                    "title": "abab",
                    "pubDate": "2020-01-03 12:19:57.690",
                    "state": "已发布",
                    "cateName": "最新"
                },
                {
                    "Id": 2,
                    "title": "666",
                    "pubDate": "2020-01-03 12:20:19.817",
                    "state": "已发布",
                    "cateName": "股市"
                }
            ],
            "total": 5
        }
        // 发请求获取数据
        // $.ajax({
        //     method: 'GET',
        //     url: '',
        //     data: data,
        //     success: function (res) {
        //         if (res.status != 20000) {
        //             layer.msg(res.msg)
        //         }
        //         // 使用templete渲染页面数据
        //         var htmlStr = template('tpl-table',res.data)
        //         $('tbody').html(htmlStr)
        //     }
        // })
        var htmlStr = template('tpl-table', res)
        // console.log(htmlStr);
        $('tbody').html(htmlStr)
    }

    // 查询分类数据
    function initCateName() {
        var res = {
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
        // 获取分类数据
        // $.ajax({
        //     method: 'GET',
        //     url: '',
        //     success: function (res) {
        //         if (res.status != 20000) {
        //             layer.msg(res.msg)
        //         }
        //         // 渲染下来列表数据
        //         var htmlStr = template('tpl-cate', res)
        //         $('[name=cate_id]').html(htmlStr)
        //     }
        // })

        // 渲染下来列表数据
        var htmlStr = template('tpl-cate', res)
        $('[name=cate_id]').html(htmlStr)
        form.render()
    }

    // 实现筛选功能
    $('#form-screen').on('submit', function (e) {
        e.preventDefault()
        // 获取表单数据
        var cateId = $('[name=cate_id]').val()
        var state = $('[name="state"]').val()
        data.cateId = cateId
        data.state = state
        initList()
    })
})