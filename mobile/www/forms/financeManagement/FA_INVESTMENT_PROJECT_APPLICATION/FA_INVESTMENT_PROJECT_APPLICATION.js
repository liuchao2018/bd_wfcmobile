
var Investment_Project_Check_do = {
  afterDataLoad: function ($scope, commonService) {
    Investment_Project_Check_do.initAPPROVALAuto($scope, commonService);
    //OA_TRAVEL_APPLICATION_TA_Sure.getAttachment($scope, commonService);

  }, initAPPROVALAuto: function ($scope, commonService) {

  },getAttachment : function ($scope, commonService) {//获取附件信息

  }, beforeDataSave: function ($scope, commonService) {

    return true;
  }
};

var Investment_Project_Add_do = {
  afterDataLoad: function ($scope, commonService) {
    Investment_Project_Add_do.initAPPROVALAuto($scope, commonService);
    //OA_TRAVEL_APPLICATION_TA_Sure.getAttachment($scope, commonService);

  }, initAPPROVALAuto: function ($scope, commonService) {

  },getAttachment : function ($scope, commonService) {//获取附件信息

  }, beforeDataSave: function ($scope, commonService) {

    return true;
  }
};
