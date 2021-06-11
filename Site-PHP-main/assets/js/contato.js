(function($) {
    "use strict";
    jQuery(document).ready(function($) {

            var contact_form = $("#contact_page_form");
            contact_form.validate({
                rules: {
                    'name': 'required',
                    'email': 'required',
                    'phone': 'required',
                    'message': 'required',
                },
                messages: {
                    name: 'Coloque seu Nome',
                    email: 'Coloque seu Email',
                    phone: 'Coloque seu Telefone',
                    message: 'Não esqueça do Princpal :(',
                },
            });
        })

}(jQuery));


(function($) {
    "use strict";
    jQuery(document).ready(function($) {

        var cur_form = $("#formscu");
        cur_form.validate({
            rules: {
                'name': 'required',
                'email': 'required',
                'phone': 'required',

            },
            messages: {
                name: 'Coloque seu Nome',
                email: 'Coloque seu Email',
                phone: 'Coloque seu Telefone',
            },
        });
    })

}(jQuery));
