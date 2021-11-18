
    $('#btnLoadData').click(function() {
       
        let jsonURL = "./js/demo.json";
    
        $.ajax({
            url: jsonURL,
            dataType: "json",
            success: function(data) {

                $.each(data, function(key, val) {//iterates through the jsonURL
                    $(`#${key}`).val(val);// checks to see if a key matches an id of the same name
                });
            }
        });
    });