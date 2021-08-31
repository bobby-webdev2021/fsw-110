function myFunction(){
    var first = document.getElementById("name").value
    var last = document.getElementById("last").value
    var age = document.getElementById("age").value
    
    let option = document.getElementById("referal").value 
    
    
   
 

    const rbs = document.querySelectorAll('input[name="radbut"]');
    
    
    let createdWallet;
    for (const rb of rbs) {
        if (rb.checked) {
            createdWallet = rb.value;
            break;
        }
       
    }
   // var el = document.getElementById('intrest')[0];

    
    const form = document.form
    const checked = []
    for(let i = 0; i < form.intrest.length; i++){
        if(form.intrest[i].checked){
            checked.push(form.intrest[i].value)
        }
   }
    alert("First Name: "+ first + "\n" + "Last Name: " + last + "\n" + "Age: " + age  + "\n" + "Have you created a wallet before?: " + createdWallet + "\n" + "Would you recomend: " + option + "\n" + "What crypto currencies intrest you: " + checked);
}

