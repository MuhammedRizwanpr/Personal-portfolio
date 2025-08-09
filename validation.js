function namevalidation(){
    let name = document.getElementById("name-mail").value
    const nameregex = /^[A-Z][a-z\sA-Z]{3,}$/
    let result = nameregex.test(name);
    
    if(result){
        document.getElementById("name-message").textContent="valid name"
        document.getElementById("name-message").style.color="green"
        
    }else{
        document.getElementById("name-message").textContent="invald name..!(First letter must Capital and more than three letter need..!)"
         document.getElementById("name-message").style.color="red"
    }

}
function emailvalidation(){
    let email = document.getElementById("email-mail").value
    const regex = /^[a-z0-9][a-zA-Z0-9]*@gmail\.com$/
    let result = regex.test(email);
    
    if(result){
        document.getElementById("email-message").textContent="valid email"
        document.getElementById("email-message").style.color="green"
        
    }else{
        document.getElementById("email-message").textContent="invald email..!"
         document.getElementById("email-message").style.color="red"
    }
}
function numbervalidation(){
    let number = document.getElementById("number-mail").value
    const regex = /^[0-9]{10,}$/
    let result = regex.test(number);
    
    if(result){
        document.getElementById("number-message").textContent="valid number"
        document.getElementById("number-message").style.color="green"
        
    }else{
        document.getElementById("number-message").textContent="invald number..!"
         document.getElementById("number-message").style.color="red"
    }

}