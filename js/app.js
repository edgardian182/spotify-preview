$(document).ready(function(){
    function searchResults() {
        
    };
    $('input').on('keyup', function(key){
        if(key.which == 13){
            var source = $('#results-template').html();
             var template = Handlebars.compile(source);
            var search = $(this).val();
            $(this).val('');
            $.getJSON("https://api.spotify.com/v1/search",{q:search, type: "track"})
                .done(function(data){
                    console.log(data);
                    var html = template(data);
                    $('.results').html(html);
                })
                .fail(function(xhr,status,errorThrown){
                    console.error("Request status: " + status + " . Message: " + errorThrown);
                })
                .always(function(xhr, status){
                    console.log("Request complete!")
                });
        };
    });
});