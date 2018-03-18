FormConfig.FA_SEAL_CERT_LENT_APPLICATION = {};

FormConfig.FA_SEAL_CERT_LENT_APPLICATION.SEAL_CERT_LENT_APPROVE = {
  formModal: {
    onAfterDataLoad: SEAL_CERT_LENT_APPROVE_do.afterDataLoad,
    onBeforeDataSave: SEAL_CERT_LENT_APPROVE_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SEAL_CERT_LENT_APPLICATION",//tab对应的div的id
        tabName: "印章证照出借申请表"
      }, {
        pageId: "detail-FA_SEAL_CERT_LENT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SEAL_CERT_LENT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SEAL_CERT_LENT_FILEINFO": {

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

FormConfig.FA_SEAL_CERT_LENT_APPLICATION.SEAL_CERT_LENT_ADD = {
  formModal: {
    onAfterDataLoad: SEAL_CERT_LENT_ADD_do.afterDataLoad,
    onBeforeDataSave: SEAL_CERT_LENT_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SEAL_CERT_LENT_APPLICATION",//tab对应的div的id
        tabName: "印章证照出借申请表"
      }, {
        pageId: "detail-FA_SEAL_CERT_LENT_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SEAL_CERT_LENT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SEAL_CERT_LENT_FILEINFO": {

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
