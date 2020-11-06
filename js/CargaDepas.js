
window.onload = function() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        
console.log(id);
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}





