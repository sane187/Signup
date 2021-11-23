function handleChange(event){
    let pass=document.getElementById("password")
    const val=event.target.value
    if(val.length<8 || val.length==0) pass.style.border="3px solid red"
    else{
        pass.style.border="3px solid green" 
    }
console.log(val)
}