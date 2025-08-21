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

    /*========================================================================================================================================*/

    // Bootstrap Datepicker Js Code here...
    $('.datepickerInput').each(function() {
        $(this).datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            todayHighlight: true,
            container: $(this).parent(), // હવે દરેક input માટે અલગ
            templates: {
                    leftArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>',
                    rightArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
                }
        });
    });
    
    /*========================================================================================================================================*/
    // Daterangepicker Js Code here...
    $(function(){
        $('#daterange').daterangepicker({
            singleDatePicker: true,
            autoApply: true,
            autoUpdateInput: false,
            locale: {
                format: 'DD/MM/YYYY'
            },
            parentEl: '.daterange-wrapper' // calendar આ div અંદર append થશે
        }, function(start, end, label){
            // Manually set the value when user selects date
            $('#daterange').val(start.format('DD/MM/YYYY'));
        });
    });
    

});
/*========================================================================================================================================*/

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
            eyeIcon.src = isHidden ? "assets/images/eye-slash.svg" : "assets/images/eye.svg";
        });
    });

    // Input Tel Js Start here........ 
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        initialCountry: "in",
        nationalMode: false,
        separateDialCode: true,
        showSelectedDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.3.2/js/utils.min.js"
    });
});



