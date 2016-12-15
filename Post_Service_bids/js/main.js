(function($) {
    
    $(document).ready(function() {        
    
    // Multiple dropdown select
    $("#langOptions").chosen();

    //character count of textarea
    var text_max = 500;
    $('#char-count').html(text_max +' '+ 'Remaining');

    $('#text-area').keyup(function() {
        var text_length = $('#text-area').val().length;
        var text_remaining = text_max - text_length;
    
    $('#char-count').html(text_remaining +'/' + text_max);
    });

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
    // Adding div in the job proposal page 
    
        var i = 3;
    $(".add-div").click(function() {
         // by default there are three divs in the page
        var domElement = $(`<div class="milestone marginThirty">
                        <div class="milestone-header">
                            <span>Milestone`+" " +(++i)+`:</span>
                            <span class="pull-right">
                                <label>For</label>
                                <input type="text" placeholder="$33.33"/>
                            </span>
                        </div>
                        <div class="milestone-description" contentEditable="true" data-text="Describe a Task..."></div>
                    </div>`);
        $('#milestone-divs').append(domElement);
    });
    // Location search
    function initialize() {
        var input = document.getElementById('searchLocation');
        var autocomplete = new google.maps.places.Autocomplete(input);
    }
    google.maps.event.addDomListener(window, 'load', initialize); 

});
})($);