function Verinfo() {

    let api = "https://randomuser.me/api/"

    fetch(api) //URL
        .then(response => response.json()) //Formato sepador por funcion de flecha =>
        .then(data => {

            alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API
            console.log(data);

        });

}

function verTabla() {

    let url = "https://jsonplaceholder.typicode.com/todos/";
    let contenidoTabla = document.getElementById("contenidoTabla");
    let misDatos;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {

            misDatos += 

            `
            <tr>

            <td>${element.userID}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed ? "Activo" : "Inactivo"}</td>

            </tr>
            `

            contenidoTabla.innerHTML = misDatos;
            
        });
    })
    
}
