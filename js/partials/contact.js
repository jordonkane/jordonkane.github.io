/*----------- Contact -----------*/

$('.contact-form').on('submit', function(event) {
  var form = $(this);
  var submitBtn = form.find('#contact-submit');
  var submitBtnText = submitBtn.text();
  var feedbackEl = form.find('.contact-feedback');
  event.preventDefault();
  // Waiting for the response from the server
  submitBtn.html('Wait...').addClass('wait').prop('disabled', true);
  setTimeout(function() {
    // Posts the Form's data to the server using Ajax
    $.ajax({
        url: form.attr('action'),
        type: 'POST',
        data: form.serialize(),
      })
      // Getting a response from the server
      .done(function(response) {
        // If the PHP file succeed sending the message
        if (response == 'success') {
          // Feedback to the user
          submitBtn.removeClass('wait').html('Success').addClass('success');
          feedbackEl.addClass('success').html('Thank you for your message. It has been sent.').fadeIn(200);
          setTimeout(function() {
            submitBtn.html(submitBtnText).removeClass('success').prop('disabled', false);
            feedbackEl.fadeOut(200).removeClass('success').html('');
          }, 6000);
          // Clears the Form
          form[0].reset();
          // If something is wrong
        } else {
          // Feedback to the user
          console.log(response);
          submitBtn.removeClass('wait').html('Error').addClass('error');
          feedbackEl.addClass('error').html('Server error! Please check your browser console log for more details.').fadeIn(200);
          setTimeout(function() {
            submitBtn.html(submitBtnText).removeClass('error').prop('disabled', false);
            feedbackEl.fadeOut(200).removeClass('error').html('');
          }, 6000);
        }
      });
  }, 1000);
});
