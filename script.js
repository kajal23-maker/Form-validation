$(document).ready(function () {
    $('#usernameValidation').hide();
    $('#passwordValidation').hide();
    $('#confirmPasswordValidation').hide();

    var Error = true;
    var password_error = true;
    var confirm_password_error = true;
    var email_error = true;

    $('#username').keyup(function () {
        username_validation();
    });

    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == '') {
            $('#usernameValidation').show();
            $('#usernameValidation').html('*Username can not be empty*');
            $('#usernameValidation').css('color', 'red');
            Error = false;
            return false;
        } else if (username_val.length < 4) {
            $('#usernameValidation').show();
            $('#usernameValidation').html('*Username should contain atleast 4 characters*');
            $('#usernameValidation').css('color', 'red');
            Error = false;
            return false;
        } else {
            $('#usernameValidation').hide();
        }
    }

    $('#email').keyup(function () {
        email_validation();
    });

    function email_validation() {
        var email_match = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val = $('#email').val();

        if (email_val.length == '') {
            $('#emailValidation').show();
            $('#emailValidation').html('*email can not be empty*');
            $('#emailValidation').css('color', 'red');
            email_error = false;
            return false;
        }else if (!email_match.test(email_val)) {
            $('#emailValidation').show();
            $('#emailValidation').html('*please enter email in correct format*');
            $('#emailValidation').css('color', 'red');
            email_error = false;
            return false;
        } else {
            $('#emailValidation').hide();
        }
    }

    $('#password').keyup(function () {
        password_validation();
    });

    function password_validation() {
        var password_match = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password_val = $('#password').val();

        if (!password_match.test(password_val)) {
            $('#passwordValidation').show();
            $('#passwordValidation').html('Password must have atleast<br/>*one Uppercase alphabet*<br/>*one lowercase alphabet*<br/>*one special character*<br/>*one digit*<br/>*eight characters*');
            $('#passwordValidation').css('color', 'red');
            password_error = false;
            return false;
        } else {
            $('#passwordValidation').hide();
        }
    }

    $('#confirmPassword').keyup(function () {
        confirm_password_validation();
    });

    function confirm_password_validation() {
        var password_val = $('#password').val();
        var confirm_password_val = $('#confirmPassword').val();

        if (password_val != confirm_password_val) {
            $('#confirmPasswordValidation').show();
            $('#confirmPasswordValidation').html('*Password did not match*');
            $('#confirmPasswordValidation').css('color', 'red');
            confirm_password_error = false;
            return false;
        } else {
            $('#confirmPasswordValidation').hide();
        }

    }

    $('#submitValidation').click(function () {
        username_validation();
        email_validation();
        password_validation();
        confirm_password_validation();

        if (!Error && !email_error && !password_error && !confirm_password_error) {
            return false;
        } else {
            return true;
        }

    });

});