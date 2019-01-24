
$(document).ready(function () {

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("btnCreateUser");
    alert('btnCreateUser');
    // Get the button that opens the modal
    var btnSubmit = document.getElementById("submit");
    btnSubmit.onclick = function btnSubmit() {

        var Sent2Server = new Object();
        debugger;
        Sent2Server["FirstName"] = document.getElementById("fname").value;
        Sent2Server["MiddleName"] = document.getElementById("mname").value;
        Sent2Server["LastName"] = document.getElementById("lname").value;
        Sent2Server["PhoneNumber"] = document.getElementById("Phone").value;
        Sent2Server["Email"] = document.getElementById("Email").value;
        Sent2Server["Address1"] = document.getElementById("address1").value;
        Sent2Server["Address2"] = document.getElementById("address2").value;
        Sent2Server["Address3"] = document.getElementById("address3").value;
        //Sent2Server["AddressProofType"] = document.getElementById("submit")
        //Sent2Server["AddressID"] = document.getElementById("submit")
        Sent2Server["Dob"] = document.getElementById("Dob").value;
        $.ajax({
            type: "POST",
            url: "http://localhost:55374/api/NewUserRegistration",
            data: JSON.stringify(Sent2Server),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response !== null) {
                    alert('Successfull');
                }
                else {
                    alert("May be created");
                    modal.style.display = "none";
                }
            },
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);
            }
        });

        console.log(Sent2Server)
        alert(Sent2Server)

    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
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



    var productmodal = document.getElementById('myModalProdut');
    // Get the button that opens the modal
    var btnproduct = document.getElementById("btnProduct");
    // Get the button that opens the modal
    var btnSubmitProduct = document.getElementById("submitproduct");
    btnSubmitProduct.onclick = function btnSubmitProduct() {
        alert('submit clicked');
        var Sent2Server = new Object();
        debugger;
        Sent2Server["ProductName"] = document.getElementById("fname").value;
        Sent2Server["Price"] = document.getElementById("mname").value;
        Sent2Server["Quantity"] = document.getElementById("lname").value;
        Sent2Server["ProductType"] = document.getElementById("Phone").value;
        Sent2Server["Description"] = document.getElementById("Email").value;


        // Checking whether FormData is available in browser  
        if (window.FormData !== undefined) {

            var fileUpload = $("#FileUpload1").get(0);
            var files = fileUpload.files;

            // Create FormData object  
            var fileData = new FormData();

            // Looping over all files and add it to FormData object  
            for (var i = 0; i < files.length; i++) {
                fileData.append(files[i].name, files[i]);
            }
            alert($("#tableButton").text());
            fileData.append("ProductName", document.getElementById("productname").value);
            fileData.append("Price", document.getElementById("price").value);
            fileData.append("Quantity", document.getElementById("quantity").value);
            fileData.append("ProductType", $("#tableButton").text());
            fileData.append("Description", document.getElementById("description").value);

            // Adding one more key to FormData object  


            $.ajax({
                url: 'http://localhost:55374/Home/NewProduct',
                type: "POST",
                contentType: false, // Not to set any content header  
                processData: false, // Not to process data  
                data: fileData,
                success: function (result) {
                    alert(result);
                },
                error: function (err) {
                    alert(err.statusText);
                }
            });
        } else {
            alert("FormData is not supported.");
        }

        console.log(Sent2Server)
        alert(Sent2Server)

    }

    $("#producttype a").click(function (e) {
        e.preventDefault(); // cancel the link behaviour
        var selText = $(this).text();
        $("#tableButton").text(selText);
        //alert(selText);
    });


    // When the user clicks the button, open the modal
    btnproduct.onclick = function () {
        productmodal.style.display = "block";
    }

    // Get the <span> element that closes the modal
    var spanproduct = document.getElementById("Productclose");


    // When the user clicks on <span> (x), close the modal
    spanproduct.onclick = function () {
        productmodal.style.display = "none";
    }

});
        
       