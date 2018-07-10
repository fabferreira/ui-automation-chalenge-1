var page = require('./page');

var challenge2Page = Object.create(page, {

    /** define elements */
    score: {
        get: function () {
            return $("#compteur");
        }
    },

    bulle: {
        get: function() {
            return $("html body div.bulle");
        }
    }

    /** define page methods */
    open: {
        value: function () {
            page.open.call(this, 'https://mindera-qa.firebaseapp.com/bubbles/index.html');
        }
    }
});
module.exports = challenge2Page;
