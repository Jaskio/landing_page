(function() {
    'use strict'


    /**
     * Events
     */
    document.querySelector('[data-btn="submit_form"]').addEventListener('click', _formSubmit);


    /**
     * Main function, processing and validating form fields
     */
    function _formSubmit() {
        var input = document.querySelectorAll('.contactFormItem input, .contactFormItem textarea'),
            error_box = document.querySelectorAll('.contactFormItem span'),
            regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var form = {
            name: input[0].value,
            email: input[1].value,
            message: input[2].value,
            name_error: error_box[0],
            email_error: error_box[1]
        }

        var validation = {
            name_status: true,
            email_status: true
        }

        _resetErrorBox(form, validation);

        if (form.name === '') {
            form.name_error.classList.add('contactFormError--active');
            validation.name_status = false;
        }

        if (!regex.test(form.email)) {
            form.email_error.classList.add('contactFormError--active');
            validation.email_status = false;
        }

        if (validation.name_status && validation.email_status) {
            _sendRequest(form);
        }
    }


    /**
     * After all fields are validatet - request can be sent
     * 
     * @param {Object} form_data 
     */
    function _sendRequest (form_data) {
        var xhr = new XMLHttpRequest(),
            url = 'http://locastic.com/api/v1/fe-dev',
            data = 'name=' +form_data.name+ '&email=' +form_data.email+ '&message=' +form_data.message;

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('Your message has been successfully sent!');
            } else {
                console.log('Your message could not be sent!');
            }
        };
        xhr.onerror = function() {
            console.log('Your message could not be sent!');
        };
        xhr.send(data);
    }


    /**
     * Helper function for reseting error box class and validation fields
     * 
     * @param {Object} form_data 
     * @param {Object} validation_data 
     */
    function _resetErrorBox(form_data, validation_data) {
        form_data.name_error.classList.remove('contactFormError--active');
        form_data.email_error.classList.remove('contactFormError--active');

        for (var validation in validation_data) {
            if (validation_data.hasOwnProperty(validation)) {
                validation = true;
            }
        }
    }
    
}());