document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

// API FETCH
// se accede a los datos del file json
function cargarPortafolio(){
    fetch('datos.json')
    .then( respuesta => {
        return respuesta.json();
    })
    .then( datos => {
        let html = '';
        datos.portafolio.forEach( portafolio => {
            //  Crear el template
            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
                `;
        });

        // Despues de crear el template se inyecta al html
        document.querySelector('#listado').innerHTML = html;
    })
}