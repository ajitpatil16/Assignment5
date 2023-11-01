let obj = {
    name: "Ajitrao Patil",
    email: "ajit@gmail.com",
    phone: "9111111111",
    degree: "B.E",
}


let myObj = Object.keys(obj)

myObj.forEach((values)=>{
    console.log(obj[values])
})
