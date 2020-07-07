window.token = '';
window.confirmationResult = null;

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recapcha-container', {
    size: 'show',
    callback: (recapchaToken) => {
        window.token = recapchaToken;
    }
});


recaptchaVerifier.render().then(function(widgetId) {
    window.recaptchaWidgetId = widgetId;
});

function send() {
    if(window.token) {
        const phoneNumber = document.getElementById('phoneNumber').value
        firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
        .then(result => {
            window.confirmationResult = result;
        })
        .catch(err => console.log(err))
    }else {
        alert('Please prove you are not robot');
    }
}

function verify() {
    if(window.confirmationResult) {
        const code = document.getElementById('phoneVerification').value
        window.confirmationResult.confirm(code).then(() => {
            alert('Successfully confirmed');
            window.location.reload();
        }).catch(err => alert(err.message));
    } else {
        alert('Please check your phone');
    }
}