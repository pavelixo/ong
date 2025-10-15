function setInputFilter(textbox, inputFilter) {
    textbox.addEventListener('input', function () {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty('oldValue')) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = '';
        }
    });
}


function maskCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}


function maskPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
}


function maskCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
}


document.addEventListener('DOMContentLoaded', function () {
    const cpf = document.querySelector('[data-mask="cpf"]');
    const phone = document.querySelector('[data-mask="phone"]');
    const cep = document.querySelector('[data-mask="cep"]');


    if (cpf) {
        cpf.addEventListener('input', e => { e.target.value = maskCPF(e.target.value) });
        setInputFilter(cpf, v => /^\d{0,11}$/.test(v.replace(/\D/g, '')));
    }
    if (phone) {
        phone.addEventListener('input', e => { e.target.value = maskPhone(e.target.value) });
        setInputFilter(phone, v => /^\d{0,11}$/.test(v.replace(/\D/g, '')));
    }
    if (cep) {
        cep.addEventListener('input', e => { e.target.value = maskCEP(e.target.value) });
        setInputFilter(cep, v => /^\d{0,8}$/.test(v.replace(/\D/g, '')));
    }
});