FormConfig.HR_BIRTH_WELFARE_APPLICATION = {};

FormConfig.HR_BIRTH_WELFARE_APPLICATION.birthAndWelfare_Reception = {
    formModal: {
      onAfterDataLoad: HR_BIRTH_WELFARE_APPLICATION_RECEPTION.afterDataLoad,
      onBeforeDataSave: HR_BIRTH_WELFARE_APPLICATION_RECEPTION.beforeDataSave,
        formTabs: [
            {
                pageId: "HR_BIRTH_WELFARE_APPLICATION",//tab对应的div的id
                tabName: "生育福利申请单"
            }
        ]
    },
    relatedObj: {

      HR_BIRTH_WELFARE_APPLICATION: {

        ID: {
                "isPk": true,
                "dataType": "BigDecimal"
            },
        BIRTH_CERTIFICATE: {
          "isPk": false,
          "dataType": "String"
        }

        }
    }
}

