FormConfig.FA_INVESTMENT_PROJECT_APPLICATION = {};

FormConfig.FA_INVESTMENT_PROJECT_APPLICATION.Investment_Project_Check = {
  formModal: {
    onAfterDataLoad: Investment_Project_Check_do.afterDataLoad,
    onBeforeDataSave: Investment_Project_Check_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_INVESTMENT_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_INVESTMENT_PROJECT_DETAIL",
        tabName: "签约信息"
      }, {
        pageId: "detail-FA_INVESTMENT_PROJECT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_INVESTMENT_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_INVESTMENT_PROJECT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": true,
        "dataType": "String"
      }
    },

    "FA_INVESTMENT_PROJECT_FILEINFO": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}

FormConfig.FA_INVESTMENT_PROJECT_APPLICATION.Investment_Project_Add = {
  formModal: {
    onAfterDataLoad: Investment_Project_Add_do.afterDataLoad,
    onBeforeDataSave: Investment_Project_Add_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_INVESTMENT_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_INVESTMENT_PROJECT_DETAIL",
        tabName: "签约信息"
      }, {
        pageId: "detail-FA_INVESTMENT_PROJECT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_INVESTMENT_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_INVESTMENT_PROJECT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": true,
        "dataType": "String"
      }
    },

    "FA_INVESTMENT_PROJECT_FILEINFO": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}
