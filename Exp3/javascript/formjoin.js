
function valid()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["Email"];    
    var phone = document.forms["RegForm"]["phone"];  
    var what =  document.forms["RegForm"]["marketing"];  
    var ask = document.forms["RegForm"]["ask"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (ask.value == "")                               
    { 
        window.alert("Please fill out everything."); 
        ask.focus(); 
        return false; 
    } 
       
    
   
   
   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please Select Option."); 
        what.focus(); 
        return false; 
    } 
   
    return true; 
}