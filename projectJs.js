function displayContactInfo(){
    var person = {
        name: form1.name.value,
        physicalAddress: form1.address.value,
        telephoneNumber: form1.telephone.value,
        emailAddress: form1.email.value,
     }
    var contactInfo = "<address>" + person.name.toUpperCase() + 
                   "<br>" + person.physicalAddress + 
                   "<br>" + person.emailAddress + " / " + person.telephoneNumber + "</address> <br> <hr>";   
    return contactInfo;
}

function displayCarrerObjective(){
    var objective = form1.objective.value;    
    var carrerObjective = "<section><p>CAREER OBJECTIVES</p><p>" + objective + "</p></section>"; 
    return carrerObjective;
}

function displayPersonalData(){
    var data = form1.personalData.value;
    var personalData = "<section><p>PERSONAL DATA</p><p>" + data + "</p></section>";
    return personalData;
}

function displayEducation(){
    var schooling = form1.education.value;
    var education = "<section><p>EDUCATION</p><p>" + schooling + "</p></section>";
    return education;
}

function displayReferences(){
    var businessReference = form1.reference.value; 
    var references = "<section><p>CHARACTER<br>REFERENCES</p><p>Upon Request</p></section>";
    references += "<section><p>BUSINESS<br>REFERENCES</p><p>" + businessReference + "</p></section>"; 
    return references;
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
    var employment = "<section><p>EMPLOYMENT <br> EXPERIENCE</p></section> ";
    for(var index = 0; index < recordsArray.length; ++index){
        employment += "<section><p>" + recordsArray[index].startDate + " - " + recordsArray[index].endDate + "</p><p>" + recordsArray[index].description + "</p></section>";
    }
    return employment;
}

function displayResume() {
    var form1 = document.form1;
    var resume = displayContactInfo() + displayCarrerObjective() + displayPersonalData() + displayEducation() + displayEmployment() + displayReferences();      
    var myWindow = window.open();
    myWindow.document.write(resume);

  }


  
 
  




    
    




















