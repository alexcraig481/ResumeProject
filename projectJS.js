
var header = "<h1 class = \"final-project\">Alexandra Craig</h1> ";
header += "<h2 class = \"final-project\">WEB 115 - 0001</h2>";
document.getElementById("name-and-class").innerHTML = header;


function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

function handleEvent(e){
    var email = e.target.value;
    if(emailIsValid(email)){
        document.form1.setAttribute("onsubmit", "return true");
        document.getElementById("submit").disabled = false;
        e.target.parentElement.parentElement.style.backgroundColor = "#C2DFE3";
    }else{
        alert("Email address entered is incorrect.\nForm will not allow submission until correction is complete.");
        e.target.parentElement.parentElement.style.backgroundColor = "#ffc0cb";
        document.form1.setAttribute("onsubmit", "return false");
        document.getElementById("submit").disabled= true;
    }
}




function startDoc(){
    var docStart = "<!DOCTYPE html><html lang = \"en\"><head><title>WEB 115 Final Project</title><link rel = \"stylesheet\" href = \"projectCSS.css\"><body><div class = \"resume-container\"><main class = \"resume\">";
    return docStart;
}

function displayContactInfo(){
    var person = {
        name: form1.name.value,
        physicalAddress: form1.address.value,
        telephoneNumber: form1.telephone.value,
        emailAddress: form1.email.value,
     }
    var contactInfo = "<address>" + "<span>" + person.name.toUpperCase() + 
                   "</span><div class = \"address-split\"><div>" + person.physicalAddress + "</div><div>" + person.emailAddress + " / " + person.telephoneNumber + "</div></div></address> <br> <hr>";   
    return contactInfo;
}


function displayCarrerObjective(){
    var objective = form1.objective.value;    
    var carrerObjective = "<section><p class = \"label\">CAREER OBJECTIVES</p><p>" + objective + "</p></section>"; 
    return carrerObjective;
}

function displayPersonalData(){
    var data = form1.personalData.value;
    var personalData = "<section><p class = \"label\">PERSONAL DATA</p><p>" + data + "</p></section>";
    return personalData;
}

function displayEducation(){
    var schooling = form1.education.value;
    var education = "<section><p class = \"label\">EDUCATION</p><p>" + schooling + "</p></section>";
    return education;
}

function getRecords(){
    function Record(startDate, endDate, description){
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
    record0 = new Record(
        form1.startDate0.value,
        form1.endDate0.value,
        form1.description0.value
    );
    record1 = new Record(
        form1.startDate1.value,
        form1.endDate1.value,
        form1.description1.value
    );
    record2 = new Record(
        form1.startDate2.value,
        form1.endDate2.value,
        form1.description2.value
    );
    record3 = new Record(
        form1.startDate3.value,
        form1.endDate3.value,
        form1.description3.value
    );
    var recordsArray = [record0, record1, record2, record3];
    return recordsArray;
}

function displayEmployment(){
   var recordsArray = getRecords();
    var employment = "<section><p class = \"label\">EMPLOYMENT EXPERIENCE</p></section> ";
    for(var index = 0; index < recordsArray.length; ++index){
        employment += "<section><p class = \"employ-dates\">" + recordsArray[index].startDate + "    -    " + recordsArray[index].endDate + "</p><p>" + recordsArray[index].description + "</p></section>";
    }
    return employment;
}

function displayReferences(){
    var businessReference = form1.reference.value; 
    var references = "<section class = \"char-references\"><p class = \"label\">CHARACTER REFERENCES</p><p>Upon Request</p></section>";
    references += "<section class = \"bus-references\"><p class = \"label\">BUSINESS REFERENCES</p><p>" + businessReference + "</p></section>"; 
    return references;
}

function endDoc(){
    var docEnd = "</main></div></body></html>"
    return docEnd;
}

function displayResume() {
    var form1 = document.form1;
    var resume = startDoc()+ displayContactInfo() + displayCarrerObjective() + displayPersonalData() + displayEducation() + displayEmployment() + displayReferences() + endDoc();    
    var myWindow = window.open();
    myWindow.document.write(resume);
  
}

document.getElementById("email").addEventListener("change",handleEvent);
document.getElementById("submit").addEventListener("click",displayResume);

  
  
  
  
  













