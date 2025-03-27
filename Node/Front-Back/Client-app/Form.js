// function CreateForm(){
//     var promisedata=ftech("http://localhost:300/submit")
//     promisedata.then((successdata)=>{
//         return successdata.text()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

//chatgpt
document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });

    const result = await response.json();
    console.log(result)
    document.getElementById('response').innerText = result.message;
});