FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION = {};

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_CHECK = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_CHECK_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_ADD = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_ADD_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_CHECK_FA = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_CHECK_FA_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_CHECK_FA_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_CHECK_GS = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_CHECK_GS_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_CHECK_GS_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_CHECK_HT = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_CHECK_HT_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_CHECK_HT_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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

FormConfig.FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION.CANCEL_REFUND_CHECK_MD = {
  formModal: {
    onAfterDataLoad: CANCEL_REFUND_CHECK_HT_do.afterDataLoad,
    onBeforeDataSave: CANCEL_REFUND_CHECK_HT_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_SMB_CUSTOMER_CANCEL_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_SMB_CUSTOMER_CANCEL_REFUND_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_SMB_CUSTOMER_CANCEL_FILEINFO": {

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
