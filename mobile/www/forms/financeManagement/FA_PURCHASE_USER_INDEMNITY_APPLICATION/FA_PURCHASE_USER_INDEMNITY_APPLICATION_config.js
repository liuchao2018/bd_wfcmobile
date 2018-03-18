FormConfig.FA_PURCHASE_USER_INDEMNITY_APPLICATION = {};

FormConfig.FA_PURCHASE_USER_INDEMNITY_APPLICATION.PURCHASE_USER_INDEMNITY_CHECK = {
  formModal: {
    onAfterDataLoad: PURCHASE_USER_INDEMNITY_CHECK_do.afterDataLoad,
    onBeforeDataSave: PURCHASE_USER_INDEMNITY_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_PURCHASE_USER_INDEMNITY_APPLICATION",//tab对应的div的id
        tabName: "放心购用户赔付申请表"
      }, {
        pageId: "detail-FA_PURCHASE_USER_INDEMNITY_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_PURCHASE_USER_INDEMNITY_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_PURCHASE_USER_INDEMNITY_FILEINFO": {

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

FormConfig.FA_PURCHASE_USER_INDEMNITY_APPLICATION.PURCHASE_USER_INDEMNITY_ADD = {
  formModal: {
    onAfterDataLoad: PURCHASE_USER_INDEMNITY_ADD_do.afterDataLoad,
    onBeforeDataSave: PURCHASE_USER_INDEMNITY_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_PURCHASE_USER_INDEMNITY_APPLICATION",//tab对应的div的id
        tabName: "放心购用户赔付申请表"
      }, {
        pageId: "detail-FA_PURCHASE_USER_INDEMNITY_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_PURCHASE_USER_INDEMNITY_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_PURCHASE_USER_INDEMNITY_FILEINFO": {

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
