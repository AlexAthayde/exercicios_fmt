fetch("./data.json", {
    method: "GET"
})
.then((resposta) => {
    return resposta.json();
})
.then((respoObjt) => {
    console.log(respoObjt);
    let elemento = document.getElementById("objetoString");
    elemento.innerHTML = JSON.stringify(respoObjt);
})
.catch((error)=>{
    console.error(error);
})