function onClickSendContact() {
    const nameInputData = document.getElementById('inputName');
    const emailInputData = document.getElementById('inputEmail');
    let nameData = '';
    let emailData = '';

    let errorText = null;

    if (nameInputData && nameInputData.value) {
        nameData = nameInputData.value;
    } else {
        errorText = 'Вы не ввели свое имя';
    }

    if (emailInputData && emailInputData.value) {
        emailData = emailInputData.value;
    } else {
        errorText = 'Вы не ввели свой email';
    }

    if (errorText) {
        alert(errorText)
    } else {
        alert(`Ваши данные (имя: ${nameData}, email: ${emailData}) успешно отправлены!`)
    }
}