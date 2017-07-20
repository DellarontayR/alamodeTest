(function () {
  /**
   * Element, where ajax response will be printed.
   * @type {*|jQuery|HTMLElement}
   */

  var contactForm = $('.ajax-form');
  var responseHolder = $('.ajax-form .status-message');

  function mailer_response_success(form, data) {
      data = data || 'Your email was sent successfully!';
      responseHolder.addClass('success').html(data + '<br><div class="done-btn">Done</div>');
      form.addClass('validated');
  }

  function mailer_response_error(form, data) {
      var message = ('string' == typeof data) ? data : 'Sorry, AJAX error occurred';
      // If data not a scalar string
      if ('object' == typeof data) {
          var a = [];

          $.each(data, function(key, value) {
              a.push(value);
          });
          message = a.join('<br>');
      }
      responseHolder.addClass('error').html(message + '<br><div class="back-btn">Back</div>');
      form.addClass('validated');
  }

  // Mailer form handler
  $(document).on('submit', '.ajax-form', function (e) {
      // Stop form submitting
      e.preventDefault();
      var form = $(this);
      formdata = form.serializeArray();
      responseHolder.html('');
      responseHolder.removeClass('success error');

      // Data validation here?
      $.ajax({
          url: 'mailer/mailer.php',
          type: 'POST',
          dataType: 'json',
          data: formdata,
          error: function(xhr, status, error) {
              console.log(['mstore.mailer.error', status, error, xhr.responseText]);
          },
          success: function(response) {
              console.log(response);
              if (response.success.length !== 0 && true == response.success) {
                  mailer_response_success(form);
              } else {
                  mailer_response_error(form, response.data);
              }
          }
      });
  });

  // Back / Done Button
  $(document).on('click', '.ajax-form .back-btn', function(){
		contactForm.removeClass('validated');
	});
	$(document).on('click', '.ajax-form .done-btn', function(){
		contactForm[0].reset();
		contactForm.removeClass('validated');
	});
})();
