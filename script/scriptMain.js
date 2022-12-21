function testaSeEhString(valueInput){
    if(typeof valueInput.value  === Number){
        return "numero"
    }else{
        return ""
    }
}

console.log(testaSeEhString(10))