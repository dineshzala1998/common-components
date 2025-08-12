


$(document).ready(function () {

    
    /* Custom FAQ Accordion Js Start */
    $('#CustomAccordion .faq-item .faq-item-header').on('click', function () {
        const $this = $(this);
        const $parent = $this.parent();
        if (!$this.hasClass('active')) {
            $('#CustomAccordion .faq-item').removeClass('active');
            $('#CustomAccordion .faq-item .faq-item-header').removeClass('active').next().slideUp(400);
            $parent.addClass('active');
            $this.addClass('active').next().slideDown(400);
        } else {
            $parent.removeClass('active');
            $this.removeClass('active').next().slideUp(400);
        }
    });
    /* Custom FAQ Accordion Js End */

    /*========================================================================================================================================*/

    // Initialize Select2 SelectPicker
    $('.select2-selectpicker').select2({
        tags: "true",
        // minimumResultsForSearch: Infinity, // disables search
    });


    /*========================================================================================================================================*/

    // Label Animated Js start here...
    $('.label-animated .form-control').each(function () {
        if ($(this).val() !== '') {
            $(this).addClass('filled');
        }
    
        $(this).on('input', function () {
            if ($(this).val() !== '') {
            $(this).addClass('filled');
            } else {
            $(this).removeClass('filled');
            }
        });
    
        $(this).on('focus', function () {
            $(this).addClass('filled');
        });
    
        $(this).on('blur', function () {
            if ($(this).val() === '') {
            $(this).removeClass('filled');
            }
        });
    });
    // Label Animated Js End

    /*========================================================================================================================================*/
});
/*========================================================================================================================================*/

// Country Code & Flag Select2 Js Start here.......
function formatCountry(option) {
  if (!option.id) return option.text;
  var flagUrl = $(option.element).data('flag');
  if (!flagUrl) return option.text;
  return $(`<span><img src="${flagUrl}" alt="${option.text} flag"> ${option.text}</span>`);
}

$(document).ready(function () {
  $('#countrySelectImg, #countrySelectcode').select2({
    placeholder: 'Select a country',
    // minimumResultsForSearch: Infinity, // disables search
    templateResult: formatCountry,
    templateSelection: formatCountry
  });
});
// Country Code & Flag Select2 Js End

/*========================================================================================================================================*/

document.addEventListener("DOMContentLoaded", function () {
    // Input Type Password Hide show icon Js Start here........ 
    const toggles = document.querySelectorAll(".togglePassword");
    toggles.forEach(function(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            const passwordField = toggle.nextElementSibling;
            const eyeIcon = toggle.querySelector("img");

            const isHidden = passwordField.type === "password";
            passwordField.type = isHidden ? "text" : "password";
            eyeIcon.src = isHidden ? "assets/images/eye.svg" : "assets/images/eye-slash.svg";
        });
    });

    // Input Tel Js Start here........ 
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        initialCountry: "in", // default India
        nationalMode: false,  // shows country code
        separateDialCode: true, // show dial code separately
        dropdownContainer: document.body, // keeps dropdown in body
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
});



