"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    // if ( day > 31 ) { return false; }
    else {
        switch( month ) {
            case 2:
                if ( day > 28 ) { return false; } // doesn't handle leap year
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if ( day > 30 ) { return false; }
                break;
            default:
                if ( day > 31 ) { return false; }
                break;
        }
    }
    return true;
};

$( document ).ready( () => {

    $( "#food" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
       // const email = $("#email").val();
        //const phone = $("#phone").val();
        const zip = $("#zip").val();
        const foo = $("#foo").val();

        // regular expressions for validity testing
       // const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        //const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        // const fooPattern = /^[a-zA-Z]$/;
        
        // check user entries for validity
        let isValid = true;
        //if ( email === "" || !emailPattern.test(email) ) {
          //  isValid = false;
            //$("#email").next().text("Please enter a valid email.");
        //}
        //if ( phone === "" || !phonePattern.test(phone) ) {
            //isValid = false;
          //  $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        //}
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( foo === "" || !isNaN(foo) ) {
            isValid = false;
            $("#foo").next().text("Please enter a valid food.");
        }
        
        if ( isValid ) { 
            $("#profile_form").submit();
        }
        
        //$("#email").focus(); 
    });
    
    // set focus on initial load
    //$("#email").focus();
});
