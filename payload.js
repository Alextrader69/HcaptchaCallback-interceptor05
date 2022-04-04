window.myInterval = setInterval(() => {
    if (window.hcaptcha) {
        console.log('hcaptcha available, lets redefine render method');
        // if hcaptcha object is defined, we save the original render method into window.originalRender
        window.originalRender = hcaptcha.render;
        // then we redefine hcaptcha.render method with our function
        window.hcaptcha.render = (container, params) => {
            console.log(container);
            console.log(params);
            // storing hcaptcha callback globally
            window.hcaptchaCallback = params.callback;
            // returning the original render method call
            return window.originalRender(container, params);
        };
        clearInterval(window.myInterval);
    } else {
        console.log('hcaptcha not available yet');
    }
}, 10);
