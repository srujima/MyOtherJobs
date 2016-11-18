$(document).ready(function() {

    // Multiple dropdown select
    $(".chosen-select").chosen();

    //Range slider change of color on drag
    $('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val + ', #00ccff), '
        + 'color-stop(' + val + ', #C5C5C5)'
        + ')'
        );
    });
    // Location search
    function initialize() {
        var input = document.getElementById('searchLocation');
        var autocomplete = new google.maps.places.Autocomplete(input);
    }
    //google.maps.event.addDomListener(window, 'load', initialize);  


});