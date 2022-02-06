var MOHT_REG = {
    
    businessTypeHandler:{
        init: function(licenseCodes, selectedObj) {

            var licenseCodeId = $('.licenseCodeId');
            var licenseNumberOne = $('.caseOne');
            var licenseNumberTwo = $('.caseTwo');

            var oldLicenseCodes = selectedObj.oldLicenseCodes;
            var oldBusinessTypeId = selectedObj.oldBusinessTypeId;


            var selectedValueAtPageLoad = function(oldBusinessTypeId) {
                getLicenseCode(oldBusinessTypeId);
            }

            selectedValueAtPageLoad(oldBusinessTypeId);

            $('.businessTypeId').change(function() {
                getBusinessType( $(this).val() );
                getLicenseCode( $(this).val() );
            });

            function getBusinessType(businessTypeId)
                {
                    if (businessTypeId == 1 | businessTypeId == 4 | businessTypeId == 5){
                        licenseNumberOne.css({
                            'display': 'block'
                        });
                        licenseNumberTwo.css({
                            'display': 'none'
                        });
                        $('#input-license_number_one').val('');
                    }else
                    {
                        licenseNumberOne.css({
                            'display': 'none'
                        });
                        licenseNumberTwo.css({
                            'display': 'block'
                        });
                        $('#input-license_number_two').val('');
                        
                    }
                }

            function getLicenseCode(businessTypeId)
                {

                    if ( !businessTypeId ) return null;

                    var HTML_SELECT_OPTIONS = '<option value="">Select</option>';

                    //console.log(licenseCodes);
                    var selectedLicenseCodes = licenseCodes.filter(function(licenseCode){
                        return licenseCode.parentable_id == businessTypeId; 
                    });

                    selectedLicenseCodes.map(function(licenseCode){
                        var isSelected = oldLicenseCodes == licenseCode.id? 'selected="selected"': (selectedLicenseCodes.length == 1? 'selected="selected"': '');
                        HTML_SELECT_OPTIONS += '<option value="' + licenseCode.id  +'" ' + isSelected + '>' + licenseCode.name + '</option>'

                    });
                    licenseCodeId.html( HTML_SELECT_OPTIONS );

                }

        }
            
    },


}
