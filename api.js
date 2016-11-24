var key = '0cde55ce933147b7b48183931161811';
var city ;

var weather = {
    getWeather: function(){

        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.apixu.com/v1/current.json",
            data: {
                key : key,
                q: city
                },
            success: function( result ) {
                dfd.resolve(result);
            }
        });
        return dfd.promise();
    }

};
