(function() {
    // 配置
    var envir = 'online';
    var configMap = {
        test: {
            appkey: 'fe416640c8e8a72734219e1847ad2547',
            url:'https://apptest.netease.im'
        },
        pre:{
    		appkey: '45c6af3c98409b18a84451215d0bdd6e',
    		url:'http://preapp.netease.im:8184'
        },
        online: {
           appkey: 'cf1c467f8ecfa7a32fab51a59304c45c',
           url:'https://app.netease.im'
        }
    };
    window.CONFIG = configMap[envir];
    CONFIG.userUID="amo1";
    CONFIG.sdktoken="myd136523";
}())