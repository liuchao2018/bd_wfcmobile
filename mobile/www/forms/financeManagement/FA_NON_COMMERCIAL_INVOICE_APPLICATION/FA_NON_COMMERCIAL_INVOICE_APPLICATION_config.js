FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION = {};

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_CHECK = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_CHECK_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_ADD = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_ADD_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_BILLING = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_BILLING_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_BILLING_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_DETAIL",
        tabName: "发票信息"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": true,
        "dataType": "String"
      }
    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_DEP_CHECK = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_DEP_CHECK_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_DEP_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_FI_CHECK = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_FI_CHECK_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_FI_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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

FormConfig.FA_NON_COMMERCIAL_INVOICE_APPLICATION.INVOICE_APPLICATION_NOTIFY = {
  formModal: {
    onAfterDataLoad: INVOICE_APPLICATION_NOTIFY_do.afterDataLoad,
    onBeforeDataSave: INVOICE_APPLICATION_NOTIFY_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_NON_COMMERCIAL_INVOICE_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_DETAIL",
        tabName: "发票信息"
      }, {
        pageId: "detail-FA_NON_COMMERCIAL_INVOICE_FILEINFO",
        tabName: "附件"
      }
    ]
  },
  relatedObj: {

    FA_NON_COMMERCIAL_INVOICE_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_NON_COMMERCIAL_INVOICE_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": true,
        "dataType": "String"
      }
    },

    "FA_NON_COMMERCIAL_INVOICE_FILEINFO": {

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
