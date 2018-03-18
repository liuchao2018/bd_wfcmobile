FormConfig.FA_SEAL_CERT_USE_APPLICATION = {};

FormConfig.FA_SEAL_CERT_USE_APPLICATION.SEAL_CERT_USE_CHECK = {
  formModal: {
    onAfterDataLoad: SEAL_CERT_USE_CHECK_do.afterDataLoad,
    onBeforeDataSave: SEAL_CERT_USE_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SEAL_CERT_USE_APPLICATION",//tab对应的div的id
        tabName: "印章证照使用申请表"
      }, {
        pageId: "detail-FA_SEAL_CERT_USE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SEAL_CERT_USE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SEAL_CERT_USE_FILEINFO": {

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

FormConfig.FA_SEAL_CERT_USE_APPLICATION.SEAL_CERT_USE_ADD = {
  formModal: {
    onAfterDataLoad: SEAL_CERT_USE_ADD_do.afterDataLoad,
    onBeforeDataSave: SEAL_CERT_USE_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SEAL_CERT_USE_APPLICATION",//tab对应的div的id
        tabName: "印章证照使用申请表"
      }, {
        pageId: "detail-FA_SEAL_CERT_USE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SEAL_CERT_USE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SEAL_CERT_USE_FILEINFO": {

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
