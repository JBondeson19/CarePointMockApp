
//////////////////////////////////// DATA FOR GRID/////////////////////////////////////

$(function () { 
    var people =
   [{ name: "John Doe", doctor: "10", time:"9:00 am", date: "04/21/21", id:"1"},
    { name: "Jane Doe", doctor: "22", time:"10:00 am", date: "05/1/21", id:"2"},
    { name: "Jake Doe", doctor: "31", time:"9:30 am", date: "04/23/21", id:"3"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "05/5/21", id:"4"},
    { name: "Justin Doe", doctor: "52", time:"8:30 am", date: "04/24/21", id:"5"},
    { name: "Jill Doe", doctor: "14", time:"9:30 am", date: "04/27/21", id:"6"},
    { name: "John Doe", doctor: "10", time:"11:00 am", date: "04/25/21", id:"7"},
    { name: "Jane Doe", doctor: "22", time:"9:30 am", date: "04/28/21", id:"8"},
    { name: "Jake Doe", doctor: "31", time:"10:30 am", date: "04/27/21", id:"9"},
    { name: "Jordan Doe", doctor: "32", time:"9:00 am", date: "04/28/21", id:"10"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/30/21", id:"11"},
    { name: "Jill Doe", doctor: "14", time:"11:00 am", date: "05/1/21", id:"12"},
    { name: "John Doe", doctor: "10", time:"8:00 am", date: "05/11/21", id:"13"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/24/21", id:"14"},
    { name: "Jake Doe", doctor: "31", time:"11:00 am", date: "04/21/21", id:"15"},
    { name: "Jordan Doe", doctor: "32", time:"7:30 am", date: "04/21/21", id:"16"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/21/21", id:"17"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"18"},
    { name: "John Doe", doctor: "10", time:"7:00 am", date: "04/21/21", id:"19"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/21/21", id:"20"},
    { name: "Jake Doe", doctor: "31", time:"10:00 am", date: "04/21/21", id:"21"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "04/21/21", id:"21"},
    { name: "Justin Doe", doctor: "52", time:"11:00 am", date: "04/21/21", id:"22"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"23"}

   
]
var people2 = 
[{ id:"1", firstName:"John", lastName:"Doe", dateOfBirth:"05/4/2021", active: "Yes", weight: "150lbs", height: "5'11", temperature:"97.1", bloodPressure:"145/78", pulse: 68 },
{ id:"2", date:"05/4/2021", weight: "160lbs", height: "5'10", temperature:"98.1", bloodPressure:"146/78", pulse: 78  },
{ id:"3", date:"05/4/2021", weight: "170lbs", height: "5'9", temperature:"99.1", bloodPressure:"144/78", pulse: 66  },
{ id:"4", date:"05/4/2021", weight: "180lbs", height: "5'8", temperature:"98.1", bloodPressure:"143/78", pulse: 64  },
{ id:"5", date:"05/4/2021", weight: "190lbs", height: "5'7", temperature:"96.1", bloodPressure:"142/78", pulse: 61  }]
 
var people3 = 
    [{ id:"1", date:"05/4/2021", weight: "150lbs", height: "5'11", temperature:"97.1", bloodPressure:"145/78", pulse: 68 },
    { id:"2", date:"05/4/2021", weight: "160lbs", height: "5'10", temperature:"98.1", bloodPressure:"146/78", pulse: 78  },
    { id:"3", date:"05/4/2021", weight: "170lbs", height: "5'9", temperature:"99.1", bloodPressure:"144/78", pulse: 66  },
    { id:"4", date:"05/4/2021", weight: "180lbs", height: "5'8", temperature:"98.1", bloodPressure:"143/78", pulse: 64  },
    { id:"5", date:"05/4/2021", weight: "190lbs", height: "5'7", temperature:"96.1", bloodPressure:"142/78", pulse: 61  }]
///////////////////////////      GRID  ///////////////////////////////////////////////////

    $("#grid").kendoGrid({
        toolbar: ["excel", "pdf"],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
        columns: [
        { title: "ID", field: "id" },
        { title: "Date", field:"date" },
        { title: "Time", field:"time" },
        { title: "Patient", field: "name"},
        { title: "Doctor", field: "doctor" } ],

    dataSource: {
        data: people,
        pageSize: 10
    },
    height: 500,
    scrollable: true,
    pageable: true,
    sortable: {
        mode: "multiple"
    },
    groupable: true
    }); 



/////////////////////////////////// NAV TREE /////////////////////////////////////////////////////////////

$(document).ready(function() {
    $("#treeView").kendoTreeView();
});  




//////////////////////////////////////// APPOINTMENT SEARCH FORM////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "John Doe",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        },
        height: 485 ,
        items: [{
            type: "group",
            label: "Filters",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
                { field: "Time", label: "Time:", validation: { required: true} },
                { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
                { field: "Reason", label: "Reason:", validation: { required: true} },
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});

////////////////////////////////////////////////////// APPOINTMENT DETAIL FORM //////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform2").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "John Doe",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        items: [{
            type: "group",
            label: "Appointment Detail",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
                { field: "Time", label: "Time:", validation: { required: true} },
                { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
                { field: "Reason", label: "Reason:", validation: { required: true} },
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});


/////////////////////////////////////////////// Patient Seach Form //////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform3").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Search",
            items: [
                {field: "Id", label: "ID:",validation: { required: true } },
                { field: "FirstName", label: "First Name", validation: { required: true} },
                { field: "LastName", label: "Last Name", validation: { required: true} },
                { field: "ActivePatient",label: "Active Patient?", validation: { required: true} 
            }
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "Time", editor: "TimePicker", label: "Time", validation: { required: true} },
                { field: "Reason", label: "Reason", validation: { required: true} },
                { field: "PrimaryInsurance", label: "Primary Insurance", validation: { required: true} },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} }]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});

//////////////////////////////////////////////////////////// PATIENT DETAIL FORM ///////////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform4").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Detail",
            items: [
                {field: "ActivePatient", label: "Active Patient?", validation: { required: true } },
                {field: "Birth", label: "Date of Birth *", validation: { required: true } },
                { field: "FirstName", label: "First Name *", validation: { required: true} },
                { field: "LastName", label: "Last Name *", validation: { required: true} }, 
                {field: "Adress", label: "Street Address *", validation: { required: true } },
                {field: "Apartment", label: "Apartment *", validation: { required: true } },
                {field: "City", label: "City *", validation: { required: true } },
                {field: "Zip", label: "Zip Code *", validation: { required: true } },
                {field: "PrimaryInsurance", label: "Primary Insurance *", validation: { required: true } },
                {field: "PrimaryInsuranceNumber", label: "Primary Insurance  ID Number *", validation: { required: true } },
                {field: "PrimaryInsuranceHolder", label: "Primary Insurance Holder *", validation: { required: true } },

             
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "SocialSecurity", label: "Social Security Number", validation: { required: true} },
                {field: "MiddleName", label: "Middle Name", validation: { required: true } },
                {field: "Suffix", label: "Suffix", validation: { required: true } },
                {field: "State", label: "State", validation: { required: true } },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} },
                { field: "SecondaryInsuranceID", label: "Secondary Insurance ID Number", validation: { required: true} },
                { field: "SecondaryInsuranceHolder", label: "Secondary Insurance Holder", validation: { required: true} }
            ]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});
////////////////////////////////////// Patient Search Grid //////////////////////////////////////
$("#grid2").kendoGrid({
    toolbar: ["excel","pdf"],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    { title: "ID", field: "id" },
    { title: "First Name", field:"firstName" },
    { title: "Last Name", field:"lastName" },
    { title: "Active Patient?", field: "active"},
    { title: "Date of Birth", field: "dateOfBirth" },
    { title: "City", field: "city" },
    { title: "Primary Insurance", field: "primaryInsurance" },
    { title: "Secondary Insurance", field: "secondaryInsurance"}
     ],

dataSource: {
    data: people2,
    pageSize: 10
},
height: 500,
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 


///////////////////////////////////// PATIENT DETAIL GRID ///////////////////////////////////////////////

$("#grid3").kendoGrid({
    toolbar: ["excel","pdf"],
            excel: {
                fileName: "Kendo UI Grid Export.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
    columns: [
    { title: "ID", field: "id" },
    { title: "Date", field:"date" },
    { title: "Weight", field:"weight" },
    { title: "Height", field: "height"},
    { title: "Temperature", field: "temperature" },
    { title: "Blood Pressure", field: "bloodPressure" },
    { title: "Pulse", field: "pulse" }
     ],

dataSource: {
    data: people2,
    pageSize: 10
},
height: 500,
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 
});
