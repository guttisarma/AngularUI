function myFunction(UserID) {
    document.getElementById("PopupCaption").innerHTML = "User Approve Reason";
    localStorage.setItem("UserID", UserID);
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}
$(document).ready(function () {

    var modal = document.getElementById('myModal');


    // Get the button that opens the modal
    //var btnApproved = document.getElementById("btnApproved");
    var btnReject = document.getElementById("btnReject");


    // Get the button that opens the modal
    var btnSubmit = document.getElementById("PopUpsubmit");
    btnSubmit.onclick = function btnSubmit(values, vals) {
        var strin = "Approval Reason is submitted" + localStorage.getItem("UserID") + ".";
        var Description = document.getElementById("txtdescription").value;
        var Id = localStorage.getItem("UserID");

        var form = {};
        form.Description = document.getElementById("txtdescription").values;
        form.companyName = localStorage.getItem("UserID");

        $.ajax({
            type: "POST",
            url: "http://localhost:55374/api/NewUserRegistration/ApproveUser?Id=" + Id + "&Description=" + Description,
            data: Description,
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response !== null) {
                    alert("response is not null");

                } else {
                    alert("response is  null");
                }
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });
        modal.style.display = "none";
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    window.onload = function () {

        // When the user clicks the button, open the modal
        //btnApproved.onclick = function () {
        //    document.getElementById("PopupCaption").innerHTML = "User Approve Reason";
        //    localStorage.setItem("lastname", "Smith");
        //    modal.style.display = "block";
        //}


    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // debugger;
    // alert("about to change")
    $('#SubjectList').change(function () {

        var selectIndex = $('#SubjectList').val();
        alert("chnaged value " + selectIndex)
        $.ajax({
            type: " POST",
            url: "http://localhost:55374/api/ManageAdmin",
            data: selectIndex,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response !== null) {
                    debugger;
                    
                }
                else {
                    alert(" Something went wrong");
                }
            },
            failure: function (response) {
                debugger;
                alert(response.responseText);
            },
            error: function (response) {
                debugger;
                alert(response.responseText);
            }
        });
    });
});