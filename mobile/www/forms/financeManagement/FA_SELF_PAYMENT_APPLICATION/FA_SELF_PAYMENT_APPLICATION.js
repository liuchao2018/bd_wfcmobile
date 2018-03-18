var SELF_PAYMENT_CHECK_do = {
  afterDataLoad: function ($scope, commonService) {
    SELF_PAYMENT_CHECK_do.initAPPROVALAuto($scope, commonService);
    //OA_TRAVEL_APPLICATION_TA_Sure.getAttachment($scope, commonService);

  }, initAPPROVALAuto: function ($scope, commonService) {

  },getAttachment : function ($scope, commonService) {//获取附件信息

  }, beforeDataSave: function ($scope, commonService) {

    return true;
  }
};

var SELF_PAYMENT_ADD_do = {
  afterDataLoad: function ($scope, commonService) {
    SELF_PAYMENT_ADD_do.initAPPROVALAuto($scope, commonService);
    //OA_TRAVEL_APPLICATION_TA_Sure.getAttachment($scope, commonService);

  }, initAPPROVALAuto: function ($scope, commonService) {

  },getAttachment : function ($scope, commonService) {//获取附件信息

  }, beforeDataSave: function ($scope, commonService) {

    return true;
  }
};
