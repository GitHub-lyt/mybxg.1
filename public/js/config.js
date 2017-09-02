require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap.min',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        common: '../js/common',
        login: '../js/login',
        index: '../js/index',
        util: '../js/util',
        teacherlist: '../js/teacher-list',
        teacheradd: '../js/teacher-add'
    },
    shim: {//把非标准版快转换为标准版快
        bootstrap : {
        deps : ['jquery']
       },
        language : {
            deps : ['jquery','datepicker']
        }
    }
});