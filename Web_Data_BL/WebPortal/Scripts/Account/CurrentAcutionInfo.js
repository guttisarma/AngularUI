function myFunction() {
    alert("The paragraph was clicked is called.");
}
$(document).ready(function () {
    debugger;
    $("submit").click(function () {
        alert("The paragraph was clicked.");
        var AmtAuction = $("AuctionAmount").text();
        $.ajax({
            type: "POST",
            url: "http://localhost:55374/api/AuctionApi?AmtAuction=" & AmtAuction,
            data: Description,
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response != null) {

                } else {

                }
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });
    });

})