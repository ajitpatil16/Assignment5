let obj = {
    name: "Ajitrao Patil",
    email: "ajit@gmail.com",
    phone: "111111111111",
    degree: "B.E",
}

let myObj = Object.keys(obj);

for(let i=0;i<myObj.length;i++)
{   
    let currentKey = myObj[i];
    console.log(obj[currentKey]);
}


