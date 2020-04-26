
var employmentArray = [];

function Address(streetAddress, city, state, zipCode){
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.completeAddress = this.streetAddress + ", " + this.city + ", " + this.state + " " + this.zipCode;   
}


function Person(name, address, emailAddress, telephoneNumber, personalData){
    this.name = name;
    this.address = address;
    this.emailAddress = emailAddress;
    this.telephoneNumber = telephoneNumber;
    this.personalData = personalData;
}

Person.prototype.displayPerson = function(){
    document.write("<address>" + this.name.toUpperCase() + 
                   "<br>" + this.address.completeAddress + 
                   "<br>" + this.emailAddress + " / " + this.telephoneNumber + "</address> <br> <hr>"); 
      
}

Person.prototype.displayPersonalData = function(){
    document.write("<section><p>PERSONAL DATA</p><p>" + this.personalData + "</p></section>");
}

function Employment(startDate, endDate, description){
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;  
}

function Resume(person, carrerObjectives, education, employment, businessReferences){
    this.person = person;
    this.carrerObjectives = carrerObjectives;
    this.education = education;
    this.employment = employment;
    this.businessReferences = businessReferences;
    
}

Resume.prototype.displayResume = function(){
    this.person.displayPerson();
    document.write("<section><p>CAREER OBJECTIVES</p><p>" + this.carrerObjectives + "</p></section>");
    this.person.displayPersonalData();
    document.write("<section><p>EDUCATON</p><p>" + this.education + "</p></section>");
    this.resume
    
}

Resume.prototype.addToEmploymentArray = function(employmentEntry){ 
    employmentArray.push(employmentEntry);
}

Resume.prototype.displayEmployment = function(array){
    document.write("<section>");
    for(var index = 0; index < array.length; ++index){
        document.write("<p>" + array[index].startDate + " - " + array[index].endDate + "</p>" +
         "<p>" + array[index].description + "</p>");    
    }
    document.write("</section>");
}


var streetAddress = "4100 Spruce Drive";
var city =  "Raleigh";
var state = "NC";
var zipCode = "27615";

var name = "Mary Johnson";
var emailAddress = "alexandra.craig@gmail.com";
var telephoneNumber = "(984-999-1488)"
var personalData = "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var startDate = "1/12/2014";
var endDate = "4/25/2015";
var description = "description stuff";

let address1 = new Address(streetAddress, city, state, zipCode);
let user1 = new Person(name, address1, emailAddress, telephoneNumber, personalData);
var education = "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";
var careerObj = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. "


let resume1 = new Resume(user1,careerObj , education, "employment","business references");
resume1.displayResume();


let emp1 = new Employment (startDate, endDate, description);


let emp2 = new Employment("12/3/1204", "4/6/2345", "foobar" );

resume1.addToEmploymentArray(emp1);
resume1.addToEmploymentArray(emp2);
resume1.displayEmployment(employmentArray);













