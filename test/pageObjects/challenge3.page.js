var page = require('./page');

var challenge3Page = Object.create(page, {

	/** elements */
    name: {
        get: function () {
            return $("#name");
        }
    },
    email: {
        get: function () {
            return $("#email");
        }
    },
    password: {
        get: function () {
            return $("div.form-group:nth-child(3) > div:nth-child(2) > input:nth-child(1)");
        }
    },
    confPassword: {
        get: function () {
            return $("div.form-group:nth-child(4) > div:nth-child(2) > input:nth-child(1)");
        }
    },
    country: {
        get: function () {
            return $("div.form-group:nth-child(5) > div:nth-child(2) > select:nth-child(1)");
        }
    },
    language: {
        get: function () {
            return $("#language");
        }
    },
    terms: {
        get: function () {
            return $("#terms");
        }
    },
    newsletter: {
        get: function () {
            return $("#newsletter");
        }
    },
    createUser: {
        get: function () {
            return $(".btn");
        }
    },

    /** methods */
    open: {
        value: function () {
            page.open.call(this, "https://qatools.mindera.com/buggy.html#/");
        }
    }
});
module.exports = challenge3Page;