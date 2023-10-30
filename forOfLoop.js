let obj = {
    name: "Ajitrao Patil",
    email: "ajit@gmail.com",
    phone: "9561448626",
    degree: "B.E",
}

console.log(Object.keys(obj));

for(let key of Object.keys(obj))
{
    console.log(`${key} : ${obj[key]}`);
}