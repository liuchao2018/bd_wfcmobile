FormConfig.C_CONTRACT_APPLICATION = {};

FormConfig.C_CONTRACT_APPLICATION.CONTRACT_ADD = {
  formModal: {
    onAfterDataLoad: CONTRACT_ADD_do.afterDataLoad,
    onBeforeDataSave: CONTRACT_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "C_CONTRACT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-C_CONTRACT_TRANSACTION_PARTY_DETAIL",
        tabName: "交易方信息"
      }, {
        pageId: "detail-C_CONTRACT_ITEM",
        tabName: "商品行信息"
      }, {
        pageId: "detail-C_CONTRACT_BALANCE",
        tabName: "结算信息"
      }, {
        pageId: "detail-C_CONTRACT_ATTACHMENT_DETAIL",
        tabName: "文件信息"
      }, {
        pageId: "detail-C_CONTRACT_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    C_CONTRACT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "C_CONTRACT_TRANSACTION_PARTY_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ITEM": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_BALANCE": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ATTACHMENT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_FILEINFO": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}

FormConfig.C_CONTRACT_APPLICATION.CONTRACT_CHECK = {
  formModal: {
    onAfterDataLoad: CONTRACT_CHECK_do.afterDataLoad,
    onBeforeDataSave: CONTRACT_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "C_CONTRACT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-C_CONTRACT_TRANSACTION_PARTY_DETAIL",
        tabName: "交易方信息"
      }, {
        pageId: "detail-C_CONTRACT_ITEM",
        tabName: "商品行信息"
      }, {
        pageId: "detail-C_CONTRACT_BALANCE",
        tabName: "结算信息"
      }, {
        pageId: "detail-C_CONTRACT_ATTACHMENT_DETAIL",
        tabName: "文件信息"
      }, {
        pageId: "detail-C_CONTRACT_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    C_CONTRACT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "C_CONTRACT_TRANSACTION_PARTY_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ITEM": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_BALANCE": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ATTACHMENT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_FILEINFO": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}

FormConfig.C_CONTRACT_APPLICATION.CONTRACT_CHECK_BEFORE = {
  formModal: {
    onAfterDataLoad: CONTRACT_CHECK_BEFORE_do.afterDataLoad,
    onBeforeDataSave: CONTRACT_CHECK_BEFORE_do.beforeDataSave,
    formTabs: [
      {
        pageId: "C_CONTRACT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-C_CONTRACT_TRANSACTION_PARTY_DETAIL",
        tabName: "交易方信息"
      }, {
        pageId: "detail-C_CONTRACT_ITEM",
        tabName: "商品行信息"
      }, {
        pageId: "detail-C_CONTRACT_BALANCE",
        tabName: "结算信息"
      }, {
        pageId: "detail-C_CONTRACT_ATTACHMENT_DETAIL",
        tabName: "文件信息"
      }, {
        pageId: "detail-C_CONTRACT_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    C_CONTRACT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "C_CONTRACT_TRANSACTION_PARTY_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ITEM": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_BALANCE": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ATTACHMENT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_FILEINFO": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}

FormConfig.C_CONTRACT_APPLICATION.CONTRACT_SUPPER = {
  formModal: {
    onAfterDataLoad: CONTRACT_SUPPER_do.afterDataLoad,
    onBeforeDataSave: CONTRACT_SUPPER_do.beforeDataSave,
    formTabs: [
      {
        pageId: "C_CONTRACT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-C_CONTRACT_TRANSACTION_PARTY_DETAIL",
        tabName: "交易方信息"
      }, {
        pageId: "detail-C_CONTRACT_ITEM",
        tabName: "商品行信息"
      }, {
        pageId: "detail-C_CONTRACT_BALANCE",
        tabName: "结算信息"
      }, {
        pageId: "detail-C_CONTRACT_ATTACHMENT_DETAIL",
        tabName: "文件信息"
      }, {
        pageId: "detail-C_CONTRACT_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    C_CONTRACT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "C_CONTRACT_TRANSACTION_PARTY_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ITEM": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_BALANCE": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ATTACHMENT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_FILEINFO": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}

FormConfig.C_CONTRACT_APPLICATION.CONTRACT_UPLOAD = {
  formModal: {
    onAfterDataLoad: CONTRACT_UPLOAD_do.afterDataLoad,
    onBeforeDataSave: CONTRACT_UPLOAD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "C_CONTRACT_APPLICATION",//tab对应的div的id
        tabName: "自主电商赔付申请表"
      }, {
        pageId: "detail-C_CONTRACT_TRANSACTION_PARTY_DETAIL",
        tabName: "交易方信息"
      }, {
        pageId: "detail-C_CONTRACT_ITEM",
        tabName: "商品行信息"
      }, {
        pageId: "detail-C_CONTRACT_BALANCE",
        tabName: "结算信息"
      }, {
        pageId: "detail-C_CONTRACT_ATTACHMENT_DETAIL",
        tabName: "文件信息"
      }, {
        pageId: "detail-C_CONTRACT_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    C_CONTRACT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "C_CONTRACT_TRANSACTION_PARTY_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ITEM": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_BALANCE": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_ATTACHMENT_DETAIL": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "C_CONTRACT_FILEINFO": {

      ITEM_NO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    }
  }
}
