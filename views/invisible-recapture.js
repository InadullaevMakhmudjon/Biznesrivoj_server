window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sendCode', {
    size: 'invisible',
    callback: (recapchaToken) => {
        const phoneNumbe = document.getElementById('phoneNumber').value
        axios.post('http://localhost:3040/verify/send', {
            phoneNumber: document.getElementById('phoneNumber').value,
            recapchaToken,
        });
    }
});
recaptchaVerifier.render().then(function(widgetId) {
    window.recaptchaWidgetId = widgetId;
});