var I18nUtil = {

    _i18nLocal:{},
    _defaultLanguage : "zh_CN",
    /**
     * 获取手机端自身国际化文件的Url
     */
    getLocalUrl : function () {
        var url = "i18n/" + I18nUtil.getLanguage() + "/i18n_" + I18nUtil.getLanguage() + ".json";
        return url;
    },getLanguage : function () {
        var language = window.localStorage.language;
        if (language != null && language != undefined && language != "") {
            return language;
        } else {
            return I18nUtil._defaultLanguage;
        }

    },setLanguage : function (language) {
        //_language = language;
        //按照标准的国际化前缀命名，目前本地为zh_CN、en_US，如果是从其他系统传过来的参数，参数不是标准的，要转换成
        //系统对应的，否则无法读取配置文件
        window.localStorage.language = language;
    },getLocalI18n : function () {
        var url = I18nUtil.getLocalUrl();
        $.ajax({ 
            type : "get", 
            url : url, 
            async : false, 
            success : function(data){ 
                I18nUtil._i18nLocal = data;
            } 
        });
        return I18nUtil._i18nLocal;
    },getFormI18n : function (param) {
        var url = "i18n/" + I18nUtil.getLanguage() + "/" + param;
        var i18nForm = {};
        $.ajax({ 
            type : "get", 
            url : url, 
            async : false, 
            success : function(data){ 
                i18nForm = data;
            } 
        });
        return i18nForm;
    }
};