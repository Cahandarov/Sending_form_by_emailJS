var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var next1 = document.querySelector("#next_step");
var next2 = document.querySelector("#next_step2");
var next3 = document.querySelector("#next_step3");
var prev1 = document.querySelector("#previus_step");
var prev2 = document.querySelector("#previus_step2");
var prev3 = document.querySelector("#previus_step3");
var inputs_page1 = document.getElementsByClassName("input");
var checkbox_of_page2 = document.getElementsByClassName("checkbox");
var radio_of_page3 = document.getElementsByClassName("radio");
var submit_btn = document.getElementById("page4_btn_sbt");
var empty_array = [];

next1.addEventListener("click", () => {
    open_page2();
})

function open_page2() {
    var fill_all_inputs = check_Page1Inputs();

    if (fill_all_inputs) {
        page1.style.display = "none";
        page2.style.display = "block";
    } else {
        alert("Please fill all inputs.");
    }
}

function check_Page1Inputs() {
    
    var input_arr = Array.from(inputs_page1);
    for (var i = 0; i < input_arr.length; i++) {
        empty_array.push(input_arr[i].value);
        if (input_arr[i].value.trim() === "") {
            return false;
        }
    }
    return true;
}

next2.addEventListener("click", () => {
    open_page3();
})

function open_page3() {
    var check_some_checkbox = check_Checkbox();
    if (check_some_checkbox) {
        page2.style.display = "none";
        page3.style.display = "block";
    } else {
        alert("Please check at least one input.");
    }
}

function check_Checkbox() {
    var checkbox_arr = Array.from(checkbox_of_page2);
    var checked = false;
    for (var i = 0; i < checkbox_arr.length; i++) {
        if (checkbox_arr[i].checked) {
            empty_array.push(checkbox_arr[i].value); 
            checked = true; 
        }
    }
    if (checked) {
        return true;
    } else {
        return false;
    }
}

next3.addEventListener("click", () => {
    open_page4();
})

function open_page4() {
    var check_radio = checkRadio();
    if (check_radio) {
        page3.style.display = "none"
        page4.style.display = "block"
    } else {
        alert("Please check the radio input.");
    }
}

function checkRadio() {
    var radio_arr = Array.from(radio_of_page3);
    for (var i = 0; i < radio_arr.length; i++) {
        if (radio_arr[i].checked) {
            empty_array.push(radio_arr[i].value);
            return true;
            
        }
    }
    return false;
}

prev1.addEventListener("click", () => {
    prevTOpage1();
})

function prevTOpage1() {
    page2.style.display = "none"
    page1.style.display = "block"
}

prev2.addEventListener("click", () => {
    prevTOpage2();
})

function prevTOpage2() {
    page3.style.display = "none"
    page2.style.display = "block"
}

prev3.addEventListener("click", () => {
    prevTOpage3();
})

function prevTOpage3() {
    page4.style.display = "none"
    page3.style.display = "block"
}

// _________________
(function(){
    emailjs.init("tGTYSMlo2xlyTrX-7");
})();

function send_mail () {
var params = {
    from: "Shamkhal",
    to:"cahandarov@gmail.com",
    message:`
    ${Array.from(empty_array).join(",")}
    `,
}
var service_id = "service_c5uj7sr";
var templateID = "template_6n9u8mf";
emailjs
.send(service_id, templateID, params)
.then((res)=>{
    console.log("email sent");
})
.catch((err)=>{
    console.log(err);
})
}

submit_btn.addEventListener("click", () => {
    send_mail ();
})