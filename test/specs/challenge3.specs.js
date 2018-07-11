var expect = require('chai').expect;
var challenge3Page = require('../pageObjects/challenge3.page');


describe('Mindera QA Graduate Challenge 3:', function () {

	function fillForm(name, email, pass, confPass, lang, terms) {
		browser.refresh()
		challenge3Page.name.setValue(name);
		challenge3Page.email.setValue(email);
		challenge3Page.password.setValue(pass);
		challenge3Page.confPassword.setValue(confPass);
		challenge3Page.language.selectByValue(lang);
		if (terms == true) {
			challenge3Page.terms.click();
		}
	}

	function validate() {
		challenge3Page.createUser.click();
    	var warning = browser.alertText();
    	browser.alertDismiss();
    	expect(warning).to.be.equal("The information in the form is not correct.");
	}

	/* 
	The alert message doesn't show some times, with both user created and failling to create user;
	In the fields Country and Preferred language, independently of the option selected, the attribute selected="selected" still on the same option as in the moment the page was load;
	Test for possibility of code injection in the form.
	*/

    beforeEach(function () {
    	challenge3Page.open();
    });

    it('Click "Create User" button with all fields empty should return a warning message', function () {
    	validate();
    });

    it('Fill the name field and click "Create User" should return a warning message', function () {
    	challenge3Page.name.setValue("Fabio");
    	validate()  ;  	
    });

    //Name field

    it('click "Create User" with space in the beginning of the name field should return a warning message', function () {
    	fillForm(" Fabio", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" with space in the end of the name field should return a warning message', function () {
    	fillForm("Fabio ", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" with non alphabetic in the name field should return a warning message', function () {
    	fillForm("Fab1o", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" with less than 2 characters in the name field should return a warning message', function () {
    	fillForm("F", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    //email field

    it('click "Create User" without a "@" character in the email field should return a warning message', function () {
		fillForm("Fabio", "fabiofabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" without a "." character after the "@" character in the email field should return a warning message', function () {
		fillForm("Fabio", "fabio@fabiopt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" without an alphanumeric character between the "@" and the "." in the email field should return a warning message', function () {
    	fillForm("Fabio", "fabio@.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });

    it('click "Create User" without an alphanumeric character in the end in the email field should return a warning message', function () {
    	fillForm("Fabio", "fabio@fabio.", "testes", "testes", "pt_PT", true);
    	validate();
    });

    // Password and Confirm Password fields

    it('click "Create User" with the fields Password and Confirm Password not matching should return a warning message', function () {
    	fillForm("Fabio", "fabio@fabio.pt", "testes", "diferente", "pt_PT", true);
    	validate();
    });

    it('click "Create User" with only the password and confirm password fields empty should return a warning message', function () {
    	fillForm("Fabio", "fabio@fabio.pt", "", "", "pt_PT", true);
    	validate();
    });


    it('Password field should be type password so the typed characters do not be visibles', function () {
    	var att = challenge3Page.password.getAttribute("type");
    	expect(att).to.be.equal("pasword");
    });

	it('Confirm password field should be type password so the typed characters do not be visibles', function () {
    	var att = challenge3Page.confPassword.getAttribute("type");
    	expect(att).to.be.equal("pasword");
    });

    // Country

    it('Country option should have attribute name correct', function () {
    	var att = challenge3Page.country.getAttribute("name");
    	expect(att).to.be.equal("country");
    });

    // Language

    it('click "Create User" without a preferred language selected should return a warning message', function () {
    	browser.refresh()
    	challenge3Page.name.setValue("Fabio");
		challenge3Page.email.setValue("fabio@fabio.pt");
		challenge3Page.password.setValue("testes");
		challenge3Page.confPassword.setValue("testes");
		challenge3Page.terms.click();
    	validate();

    });

    // Term checkbox field

    it('click "Create User" without a check in the terms and conditions agreement should return a warning message', function () {
    	fillForm("Fabio", "fabio@fabio.pt", "testes", "testes", "pt_PT", false);
    	validate();
    });

    it('when the checkbox in terms field is clicked the attribute checked should change', function () {
    	fillForm("Fabio", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	var att = challenge3Page.terms.getAttribute("checked");
    	expect(att).to.be.equal("checked");
    });

    //newsletter field

    it('when the checkbox in newsletter field is clicked the attribute checked should change', function () {
    	fillForm("Fabio", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	var att = challenge3Page.newsletter.getAttribute("checked");
    	expect(att).to.be.equal("checked");
    });

    // Test submit form with only one field empty

    it('click "Create User" with only the name field empty should return a warning message', function () {
    	fillForm("", "fabio@fabio.pt", "testes", "testes", "pt_PT", true);
    	validate();
    });
});
