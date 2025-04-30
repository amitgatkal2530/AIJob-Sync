const singnupValidation=(name:string,value:string)=>{
    switch(name){
        case "name":
            if(value.length==0) return "Name is required."
            return"";
        case "email":
            if (value.length == 0) return "Email is Required.";
            if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/.test(value)) 
            return "Email is invalid.";
            return"";  
        case "password":
            if (value.length === 0) return "Password is Required.";
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,15}$/.test(value)) 
            return "Password must be 8-15 characters long and include at least one uppercase, one lowercase, one number, and one special character.";
            return "";
        default:
            return"";
    }
}

const loginValidation=(name:string,value:string)=>{
    switch (name){
        case "email":
            if (value.length == 0) return "Email is Required.";
            return "";
        case "password":
           if (value.length === 0) return "Password is Required.";
           return "";

    }
}

export {singnupValidation,loginValidation};