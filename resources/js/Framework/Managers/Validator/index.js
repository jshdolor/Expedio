import validate from 'validate.js/validate';
import Rules from '~/Application/Config/Rules';

export default class Validator {
    
    constructor(form){
        this.form = form;
        this.rules = Rules[$(form).attr('name')];
        this.data = {};

        // $('body').on('submit', form, this.onSubmit.bind(this));
        $('body').on('change', form + ' input', this.handleInput.bind(this));
        $('body').on('change', form + ' select', this.handleInput.bind(this));
        $('body').on('change', form + ' textarea', this.handleInput.bind(this));
        
    }

    check() {
        this.getData();
            
        let validateDetails = validate(
            this.data.toValidatorData(),
            this.rules,
            {format: "detailed"}
        );

        $('.error-notif-container').remove();

        if(validateDetails) {
            this.showErrors(validateDetails);
        }
    }
    
    handleInput(e) {

        e.preventDefault();

        let attribute = $(e.target).attr('name'),
            value = e.target.value.trim() === '' ? null : e.target.value.trim();

        let validateDetails = validate.single(value, this.rules[attribute]);

        $(e.target).next('.error-notif-container').remove();

        if(validateDetails) {
            $(e.target).after(this.errorTemplate(validateDetails[0]));
        }

    }

    showErrors(errors) {
        
        errors.forEach(error => {
            let html = this.errorTemplate(error.error);

            let input = $(this.form).find(`[name=${error.attribute}]`);

            input.next('.error-notif-container').remove();

            input.after(html);
            
        });

    }

    errorTemplate(errorMessage) {
        return `
            <div class="error-notif-container">
                <i class="error-icon">!</i>
                <small class="error-message text-danger">${errorMessage}</small>
            </div>
        `;
    }

    getData() {

        this.data = new MyFormData($(this.form).serializeArray());
        
    }
    

}


class MyFormData {

    constructor(data) {
        this.data = data;
    }

    toValidatorData() {
        let vData = {};
        
        this.data.forEach(field => {

            if(field.value) {
                vData[field.name] = field.value;
            }

        });

        return vData;
    }


    toFormData() {

        let formData = new FormData();

        this.data.forEach((field) => {
            formData.append(field.name, field.value);
        });
        
        return formData;
    }


}