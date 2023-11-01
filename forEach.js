let obj = {
    name: "Ajitrao Patil",
    email: "ajit@gmail.com",
    phone: "9561448626",
    degree: "B.E",
}


let myObj = Object.keys(obj)

myObj.forEach((values)=>{
    console.log(obj[values])
})