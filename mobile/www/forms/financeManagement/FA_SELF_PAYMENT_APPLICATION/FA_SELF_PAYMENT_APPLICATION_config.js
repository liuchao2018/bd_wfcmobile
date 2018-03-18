FormConfig.FA_SELF_PAYMENT_APPLICATION = {};

FormConfig.FA_SELF_PAYMENT_APPLICATION.SELF_PAYMENT_CHECK = {
  formModal: {
    onAfterDataLoad: SELF_PAYMENT_CHECK_do.afterDataLoad,
    onBeforeDataSave: SELF_PAYMENT_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SELF_PAYMENT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SELF_PAYMENT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SELF_PAYMENT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SELF_PAYMENT_FILEINFO": {

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

FormConfig.FA_SELF_PAYMENT_APPLICATION.SELF_PAYMENT_ADD = {
  formModal: {
    onAfterDataLoad: SELF_PAYMENT_ADD_do.afterDataLoad,
    onBeforeDataSave: SELF_PAYMENT_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SELF_PAYMENT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SELF_PAYMENT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SELF_PAYMENT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SELF_PAYMENT_FILEINFO": {

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
