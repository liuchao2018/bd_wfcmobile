FormConfig.PJ_NEW_PROJECT_APPLICATION = {};

FormConfig.PJ_NEW_PROJECT_APPLICATION.NEW_PROJECT_CHECK = {
  formModal: {
    onAfterDataLoad: NEW_PROJECT_CHECK_do.afterDataLoad,
    onBeforeDataSave: NEW_PROJECT_CHECK_do.beforeDataSave,
    formTabs: [
      {
        pageId: "PJ_NEW_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "立项申请表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_COST_DETAIL",
        tabName: "预算科目表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_ATTACHMENT_DETAIL",
        tabName: "附件信息表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_EXECUTOR_DETAIL",
        tabName: "项目执行人表"
      }
    ]
  },
  relatedObj: {

    PJ_NEW_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "PJ_NEW_PROJECT_COST_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_ATTACHMENT_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_EXECUTOR_DETAIL": {

      ITEMNO: {
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

FormConfig.PJ_NEW_PROJECT_APPLICATION.NEW_PROJECT_ADD = {
  formModal: {
    onAfterDataLoad: NEW_PROJECT_ADD_do.afterDataLoad,
    onBeforeDataSave: NEW_PROJECT_ADD_do.beforeDataSave,
    formTabs: [
      {
        pageId: "PJ_NEW_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "立项申请表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_COST_DETAIL",
        tabName: "预算科目表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_ATTACHMENT_DETAIL",
        tabName: "附件信息表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_EXECUTOR_DETAIL",
        tabName: "项目执行人表"
      }
    ]
  },
  relatedObj: {

    PJ_NEW_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "PJ_NEW_PROJECT_COST_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_ATTACHMENT_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_EXECUTOR_DETAIL": {

      ITEMNO: {
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


FormConfig.PJ_NEW_PROJECT_APPLICATION.NEW_PROJECT_CHECK_FA = {
  formModal: {
    onAfterDataLoad: NEW_PROJECT_CHECK_FA_do.afterDataLoad,
    onBeforeDataSave: NEW_PROJECT_CHECK_FA_do.beforeDataSave,
    formTabs: [
      {
        pageId: "PJ_NEW_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "立项申请表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_COST_DETAIL",
        tabName: "预算科目表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_ATTACHMENT_DETAIL",
        tabName: "附件信息表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_EXECUTOR_DETAIL",
        tabName: "项目执行人表"
      }
    ]
  },
  relatedObj: {

    PJ_NEW_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "PJ_NEW_PROJECT_COST_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_ATTACHMENT_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_EXECUTOR_DETAIL": {

      ITEMNO: {
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

FormConfig.PJ_NEW_PROJECT_APPLICATION.NEW_PROJECT_CHECK_FA_END = {
  formModal: {
    onAfterDataLoad: NEW_PROJECT_CHECK_FA_END_do.afterDataLoad,
    onBeforeDataSave: NEW_PROJECT_CHECK_FA_END_do.beforeDataSave,
    formTabs: [
      {
        pageId: "PJ_NEW_PROJECT_APPLICATION",//tab对应的div的id
        tabName: "立项申请表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_COST_DETAIL",
        tabName: "预算科目表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_ATTACHMENT_DETAIL",
        tabName: "附件信息表"
      }, {
        pageId: "detail-PJ_NEW_PROJECT_EXECUTOR_DETAIL",
        tabName: "项目执行人表"
      }
    ]
  },
  relatedObj: {

    PJ_NEW_PROJECT_APPLICATION: {

      ID: {
        "isPk": true,
        "dataType": "String"
      }

    },

    "PJ_NEW_PROJECT_COST_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_ATTACHMENT_DETAIL": {

      ITEMNO: {
        "isPk": true,
        "dataType": "BigDecimal"
      },
      ID: {
        "isPk": false,
        "dataType": "String"
      }
    },

    "PJ_NEW_PROJECT_EXECUTOR_DETAIL": {

      ITEMNO: {
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
