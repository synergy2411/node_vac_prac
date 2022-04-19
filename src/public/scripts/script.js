window.onload = function(){
   console.log("inside script js");
    const btnSave = document.getElementById("save")
    const btnCancel = document.getElementById("cancel")
    const txtName = document.getElementById("name")
    const txtDOB = document.getElementById("dob")
    const txtGender = document.getElementById("gender")
    const txtPOB = document.getElementById("pob")
    const txtBloodGrp = document.getElementById("bloodGroup")
    const txtHeight = document.getElementById("height")
    const txtWeight = document.getElementById("weight")

    btnSave.addEventListener("click", event => {
        event.preventDefault();
        fetch("http://localhost:9000/patient/creation",{
            method : "POST",
            body : JSON.stringify({
                name : txtName.value,
                DateOfBirth :txtDOB.value,
                Gender : txtGender.value,
                PlaceOfBirth : txtPOB.value,
                BloodGroup : txtBloodGrp.value,
                Height : txtHeight.value,
                Weight : txtWeight.value
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);

        })
        .catch(console.error)
    })


   

}