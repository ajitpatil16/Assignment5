let obj = {
    name: "Ajitrao Patil",
    email: "ajit@gmail.com",
    phone: "9111111111",
    degree: "B.E",
}

console.log(Object.keys(obj));

for(let key of Object.keys(obj))
{
    console.log(`${key} : ${obj[key]}`);
}
