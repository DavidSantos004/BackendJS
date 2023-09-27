
//post=
const enviar= async() => {
    let config ={
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({grafica : "RTX1080TI"})
    }
    let res = await (await fetch("http://localhost:4000/hardware", config)).json();
    console.log(res)
}



//get=
const get = async() => {
    let res = await (await fetch("http://localhost:5000/hardware")).json();
    console.log(res[0].pantalla)
}


 