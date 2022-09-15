
const myFunc = ()=>{
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTYVWXYZ';
    let numbers   = '0123456789';
    let symbols   = '!@#$%^&*(){}[]-_=+';
   
    let myPassword = numbers + lowerCase + upperCase + numbers + symbols;
    let password = "";
    for(let i = 0; i < 8; i++){
        let passwordIndex = Math.floor((Math.random() * myPassword.length));
        password  += myPassword[passwordIndex];

    }
    document.getElementById("input").value = password;
    
    
    

     
}
const copyFunc = ()=>{
    let generatedPass = document.getElementById("input").value 
    
    navigator.clipboard.writeText(generatedPass)
}