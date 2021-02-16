const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

$('#submit').click(e => {
    if (!validateInput())
        return false;

    e.preventDefault();
    //disable submit button
    $('#submit').prop('disabled', true);

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbykXplcnDPrwKw9kUhlbnCpnEGR9NdtxCXAhKokNyBh77XPkA/exec",
        method: "POST",
        dataType: "json",
        data: $("#contact-form").serialize(),
        success: (response) => {
            if(response.result === "success") {
                $('#contact-form')[0].reset();
                alert('Thank you for contacting. I will get back to you as soon as possible.');
                //enable submit button
                $('#submit').prop('disabled', false);
            }
            else {
                alert("Something went wrong. Please try again.");
                //enable submit button
                $('#submit').prop('disabled', false);
            }
        },
        error: (err) => {
            alert("Error: " + err);
            //enable submit button
            $('#submit').prop('disabled', false);
        }
    })
});

const validateInput = () => {
    //hide all error indicators
    let error = false;
    $('#contact-form i').hide();

    if ($('#name').val().trim() === '') {
        $('#name').next().show();   //show error indicator
        $('#name').next().attr('data-content', 'Please enter your name');
        error = true;
    }

    if ($('#email').val().trim() === '') {
        $('#email').next().show();
        $('#email').next().attr('data-content', 'Please enter an email address');
        error = true;
    }
    else if (!EMAIL_REGEX.test($('#email').val())) {
        $('#email').next().show();
        $('#email').next().attr('data-content', 'Invalid email address');
        error = true;
    }   

    if ($('#phone').val().trim() === '') {
        $('#phone').next().show();
        $('#phone').next().attr('data-content', 'Please enter a contact number');
        error = true;
    }
    else if (!PHONE_REGEX.test($('#phone').val())) {
        $('#phone').next().show();
        $('#phone').next().attr('data-content', 'Invalid phone number');
        error = true;
    }   

    if ($('#message').val().trim() === '') {
        $('#message').next().show();
        $('#message').next().attr('data-content', 'Please enter a message');
        error = true;
    }

    if (error) 
        return false;
    else
        return true;
}