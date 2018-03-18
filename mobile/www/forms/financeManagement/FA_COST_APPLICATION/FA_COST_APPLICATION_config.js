FormConfig.FA_COST_APPLICATION = {};

FormConfig.FA_COST_APPLICATION.COST_APPLICATION_ADD_NEW = {
  formModal: {
    onAfterDataLoad: COST_APPLICATION_ADD_NEW_do.afterDataLoad,
    onBeforeDataSave: COST_APPLICATION_ADD_NEW_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_COST_APPLICATION",//tab对应的div的id
        tabName: "对公支出单"
      }, {
        pageId: "detail-FA_COST_ITEM_DETAIL",
        tabName: "付款行信息"
      }, {
        pageId: "detail-FA_PAYMENT_COSTCENTER_DETAIL",
        tabName: "预算科目信息"
      }, {
        pageId: "detail-FA_COST_INVENTORY_DETAIL",
        tabName: "商品信息"
      }, {
        pageId: "detail-FA_PUBLIC_EXPENDITURE_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    FA_COST_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_COST_ITEM_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PAYMENT_COSTCENTER_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_COST_INVENTORY_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PUBLIC_EXPENDITURE_FILEINFO": {

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

FormConfig.FA_COST_APPLICATION.COST_APPLICATION_ADD_NEW_AP = {
  formModal: {
    onAfterDataLoad: COST_APPLICATION_ADD_NEW_AP_do.afterDataLoad,
    onBeforeDataSave: COST_APPLICATION_ADD_NEW_AP_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_COST_APPLICATION",//tab对应的div的id
        tabName: "对公支出单"
      }, {
        pageId: "detail-FA_COST_ITEM_DETAIL",
        tabName: "付款行信息"
      }, {
        pageId: "detail-FA_PAYMENT_DETAIL_TWO",
        tabName: "发票信息"
      },{
        pageId: "detail-FA_PAYMENT_COSTCENTER_DETAIL",
        tabName: "预算科目信息"
      }, {
        pageId: "detail-FA_COST_INVENTORY_DETAIL",
        tabName: "商品信息"
      }, {
        pageId: "detail-FA_PUBLIC_EXPENDITURE_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    FA_COST_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_COST_ITEM_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PAYMENT_DETAIL_TWO": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PAYMENT_COSTCENTER_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_COST_INVENTORY_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PUBLIC_EXPENDITURE_FILEINFO": {

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

FormConfig.FA_COST_APPLICATION.COST_APPLICATION_ADD_NEW_CHECK = {
  formModal: {
    onAfterDataLoad: COST_APPLICATION_ADD_NEW_CHECK_do.afterDataLoad,
    onBeforeDataSave: COST_APPLICATION_ADD_NEW_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "FA_COST_APPLICATION",//tab对应的div的id
        tabName: "对公支出单"
      }, {
        pageId: "detail-FA_COST_ITEM_DETAIL",
        tabName: "付款行信息"
      }, {
        pageId: "detail-FA_PAYMENT_COSTCENTER_DETAIL",
        tabName: "预算科目信息"
      }, {
        pageId: "detail-FA_COST_INVENTORY_DETAIL",
        tabName: "商品信息"
      }, {
        pageId: "detail-FA_PUBLIC_EXPENDITURE_FILEINFO",
        tabName: "附件信息"
      }
    ]
  },
  relatedObj: {

    FA_COST_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "FA_COST_ITEM_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PAYMENT_COSTCENTER_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_COST_INVENTORY_DETAIL": {

      GUID: {
        "isPk": true,
        "dataType": "String"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "FA_PUBLIC_EXPENDITURE_FILEINFO": {

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
