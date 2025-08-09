
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

    // Initialize Select2 SelectPicker
    $('.select2-selectpicker').select2({
        tags: "true",
        minimumResultsForSearch: Infinity, // disables search
    });
});

function formatCountry(option) {
  if (!option.id) return option.text;
  var flagUrl = $(option.element).data('flag');
  if (!flagUrl) return option.text;
  return $(`<span><img src="${flagUrl}" alt="${option.text} flag"> ${option.text}</span>`);
}

$(document).ready(function () {
  $('#countrySelectImg, #countrySelectcode').select2({
    placeholder: 'Select a country',
    templateResult: formatCountry,
    templateSelection: formatCountry
  });
});


