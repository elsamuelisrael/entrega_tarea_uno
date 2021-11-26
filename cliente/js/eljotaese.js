/* ************************************************************************* */

// LLAMAR A LA API DE FORMA REMOTA O LOCAL *************************

// REMOTA
var url = "https://cuatroymedio.net:8443/";

// LOCAL
//var url = "http://localhost:3000/";

/* ************************************************************************* */

var epp = 5;
var totaldepaginas = 0;

function muestradatosEmpleados(res, obj, otroobj){

    var json = JSON.parse(res);

    // console.log(json)

    var cadenab = ``;

    json.forEach(function (item, index) {

        //console.log(item)

        /* var colorbg = `bg-light`;

        if(isOdd(index)){

            colorbg = `bg-success`;

        } */

        var nombre = `${item.nombre} ${item.ap} ${item.am}`;

        cadenab += `

            <div class="accordion-item" id="acordion_${index}">
                <h2 class="accordion-header" id="heading${index}">
                    <button 
                        id="btnacordion_${index}" 
                        class="accordion-button btn btn-outline-light collapsed" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne${index}" 
                        aria-expanded="false" aria-controls="collapseOne${index}">
                        <span id="nombre_${index}">${nombre}</span>
                    </button>
                </h2>
                <div id="collapseOne${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        <div class="container">
                            
                            <div class="row text-center">

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Puesto</div>
                                </div>

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Email</div>
                                </div>

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Acciones</div>
                                </div>

                            </div>

                            <div class="row text-center">

                                <div id="puesto_${index}" class="col">
                                    ${item.puestonom}
                                </div>

                                <div id="email_${index}" class="col">
                                    ${item.email}
                                </div>

                                <div class="col">
                                    <div class="btn-group dropstart text-end">
                                        <button style="outline: none; box-shadow: none;" role="button" type="button" class="btn btn-sm btn-outline-dark border-0" data-bs-toggle="dropdown">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                                <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu">
                                            
                                            <li>
                                                <a
                                                    id="opciones_${index}"
                                                    data-elindex="${index}"
                                                    data-elid="${item.id}" 
                                                    data-nombreacordion="acordion_${index}"
                                                    data-nombrecollapse="collapseOne${index}"
                                                    data-nombre="${item.nombre}"
                                                    data-ap="${item.ap}"
                                                    data-am="${item.am}"
                                                    data-email="${item.email}"
                                                    data-puestoid="${item.puesto}"
                                                    data-puestonom="${item.puestonom}"
                                                    data-pagx="${obj.lax}"
                                                    data-pagelid="${obj.elid}"
                                                    class="dropdown-item" 
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalEditar"
                                                    href="javascript:void(0);"
                                                >
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i> Papelera
                                                </a>
                                            </li>
                                            <!-- <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> ${index}</a></li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        `;

        if(index == (json.length-1)){

            $("#divlalistaacordion").empty();
            $("#divlalistaacordion").animate({ opacity: '0.33' }, 1, function () { 

                $("#divlalistaacordion").append(cadenab);

                $("#divlalistaacordion").animate({ opacity: '1' }, 750, function () {
                    
                    $('#elcargador').hide();

                    if(otroobj!=false){

                        console.log(otroobj);

                        var elE = `#${otroobj.acordionorigen}`;

                        $(elE).animate({ opacity: '0.33' }, 500, function () {
                            $(this).animate({ opacity: '1' }, 750, function () { 
                            });
                        });

                    }
                
                });

            });

            //$("#divlalistaacordion").empty();
            //$("#divlalistaacordion").append(cadenab);

        }

    });

}

function muestradatosPuestos(res,puestoid){

    var json = JSON.parse(res);

    //console.log(json);

    var cadena = '';
    var cadenaNueva = "<option value='0' selected>Seleccionar Puesto</option>";

    json.forEach(function (item, index) {

        if(puestoid != 0){

            //console.log(item);

            var seleccionado = '';

            //console.log(puestoid + ' ' + item.id);

            if(puestoid == item.id) seleccionado = 'selected';

            cadena += `

                <option value="${item.id}" ${seleccionado}>${item.nombre}</option>

            `;

            if(index == (json.length-1)){

                $('#elcargador').hide();

                $("#selectPuestos").empty();
                $("#selectPuestos").append(cadena);

            }

        }
        else{

            cadenaNueva += `

                <option value="${item.id}">${item.nombre}</option>

            `;

            if(index == (json.length-1)){

                $('#elcargador').hide();

                $("#selectPuestosMnuevo").empty();
                $("#selectPuestosMnuevo").append(cadenaNueva);

            }

        }

    });

}

function carga_lista_puestos(puestoid){

    $('#elcargador').show();

    var link = `${url}puestos`;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => muestradatosPuestos(result,puestoid)) 
        .catch(error => console.log('error', error));

}

$('#modalEditar').on('show.bs.modal', function (e) {

    // console.log(e.relatedTarget.dataset);

    $("#modalEditar #floatingInputNombre").val(e.relatedTarget.dataset.nombre);
    $("#modalEditar #floatingInputAP").val(e.relatedTarget.dataset.ap);
    $("#modalEditar #floatingInputAM").val(e.relatedTarget.dataset.am);
    $("#modalEditar #floatingInputEmail").val(e.relatedTarget.dataset.email);

    $('#btnEditar').attr('data-elid', e.relatedTarget.dataset.elid);
    $('#btnEditar').attr('data-acordionorigen', e.relatedTarget.dataset.nombreacordion);
    $('#btnEditar').attr('data-paglax', e.relatedTarget.dataset.pagx);
    $('#btnEditar').attr('data-pagelid', e.relatedTarget.dataset.pagelid);
    $('#btnEditar').attr('data-elindex', e.relatedTarget.dataset.elindex);

    carga_lista_puestos(e.relatedTarget.dataset.puestoid);

    $("#divlalistaacordion").addClass("blur");
    $("#modalEditarcontenido").css({ opacity: 0.90 });
    
});


$('#modalEditar').on('hidden.bs.modal', function (e) {
    $("#divlalistaacordion").removeClass("blur");
    $("#modalEditarcontenido").css({ opacity: 1 });
})

$('#modalNuevo').on('show.bs.modal', function (e) {

    // console.log(e.relatedTarget.dataset);

    carga_lista_puestos(0);

    $("#divlalistaacordion").addClass("blur");
    $("#modalNuevocontenido").css({ opacity: 0.90 });
    
});


$('#modalNuevo').on('hidden.bs.modal', function (e) {
    $("#divlalistaacordion").removeClass("blur");
    $("#modalNuevocontenido").css({ opacity: 1 });

    $("#modalNuevo #floatingInputNombreMnuevo").val('');
    $("#modalNuevo #floatingInputAPMnuevo").val('');
    $("#modalNuevo #floatingInputAMMnuevo").val('');
    $("#modalNuevo #floatingInputEmailMnuevo").val('');

})

function empleadoRegistradob(res) {

    var json = JSON.parse(res);

    // console.log(json);

    cargainicioB();

    $('#modalNuevo').modal('hide');

    $("#modalNuevo #floatingInputNombreMnuevo").val('');
    $("#modalNuevo #floatingInputAPMnuevo").val('');
    $("#modalNuevo #floatingInputAMMnuevo").val('');
    $("#modalNuevo #floatingInputEmailMnuevo").val('');

    $("#mensajeliveToast").text('El Empleado se agrego correctamente!');
    $("#liveToast").toast('show');


}

function muestraModalmensaje(elmensaje, campo) {

    $("#btncerrarmodalmensaje").hide();

    $("#contenidomodalmensaje").html(elmensaje);
    $("#modalmensaje").animate({ opacity: '1' }, 1, function () { });
    $("#modalmensajeheader").removeClass("bg-info text-dark");
    $("#modalmensajeheader").addClass("bg-danger text-white");

    $("#modalmensaje").modal('show');
    $("#modalNuevo").addClass("blur");

    $('#modalmensaje').animate({ opacity: '.9' }, 1500, function () {

        $(this).animate({ opacity: '0' }, 1500, function () {

            $("#modalNuevo").removeClass("blur");
            $("#modalmensaje").modal('hide');
            $(campo).focus();

        })
    })

}

function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function nuevoEmpleadob() {

    var nombre = $("#floatingInputNombreMnuevo").val();
    var ap = $("#floatingInputAPMnuevo").val();
    var am = $("#floatingInputAMMnuevo").val();
    var email = $("#floatingInputEmailMnuevo").val();
    var puesto = $("#selectPuestosMnuevo").val();

    if (nombre == null || nombre == "") {

        elmensaje = '<h5 class="text-dark">El nombre esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputNombreMnuevo");

        return false;
    }

    if (ap == null || ap == "") {

        elmensaje = '<h5 class="text-dark">El Apellido Paterno esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputAPMnuevo");

        return false;
    }

    if (am == null || am == "") {

        elmensaje = '<h5 class="text-dark">El Apellido Materno esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputAMMnuevo");

        return false;
    }

    if (email == null || email == "") {

        elmensaje = '<h5 class="text-dark">El Email esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputEmailMnuevo");

        return false;

    }

    if (!validarEmail(email)) {

        elmensaje = '<h5 class="text-dark">El Email no es valido</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputEmailMnuevo");

        return false;

    }

    if (puesto == null || puesto == "" || puesto == 0) {

        elmensaje = '<h5 class="text-dark">Debe seleccionar un puesto</h5>';
        muestraModalmensaje(elmensaje, "#selectPuestosMnuevo");

        return false;

    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    
    var raw = `{"Nombre": "${nombre}","Ap" : "${ap}","Am" : "${am}","Email": "${email}","Puesto" : ${puesto}}`;

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url + "empleado", requestOptions)
        .then(response => response.text())
        .then(result => empleadoRegistradob(result))
        .catch(error => console.log('error', error));
}

function empleadoEditadob(res,obj,datos){

    var json = JSON.parse(res);

    var losdatos = JSON.parse(datos);

    // console.log(json);
    // console.log(losdatos);

    //console.log(obj);
    //console.log(datos);

    //carga_lista_empleadosb(obj.paglax,obj.pagelid,obj);

    $('#modalEditar').modal('hide');

    $("#modalNuevo #floatingInputNombre").val('');
    $("#modalNuevo #floatingInputAP").val('');
    $("#modalNuevo #floatingInputAM").val('');
    $("#modalNuevo #floatingInputEmail").val('');

    $("#mensajeliveToast").text('Los datos se editaron correctamente!');
    $("#liveToast").toast('show');

    //$(elE).css({'background-color': "green"});

    //var elE = `#btn${obj.acordionorigen}`;
    //var elEB = `#${obj.acordionorigen}`;
    //var elEP = `#puesto_${obj.elindex}`;
    //var elEM = `#email_${obj.elindex}`;

    $(`#puesto_${obj.elindex}`).addClass("bg-info text-white");
    $(`#email_${obj.elindex}`).addClass("bg-info text-white");
    $(`#nombre_${obj.elindex}`).addClass("bg-info text-white");

    $(`#btn${obj.acordionorigen}`).addClass("bg-info text-white");
    $(`#${obj.acordionorigen}`).addClass("bg-info");

    $(`#btn${obj.acordionorigen}`).animate({ opacity: '0' }, 250, function () {
        $(this).animate({ opacity: '1' }, 500, function () {

            $(this).removeClass("bg-info text-white");
            $(`#puesto_${obj.elindex}`).removeClass("bg-info text-white");
            $(`#email_${obj.elindex}`).removeClass("bg-info text-white");
            $(`#nombre_${obj.elindex}`).removeClass("bg-info text-white");

            var nombrecompleto = $("#floatingInputNombre").val() + " " + $("#floatingInputAP").val() + " " + $("#floatingInputAM").val();
            var puestoid = $("#selectPuestos").val();
            var puestonombre = $("#selectPuestos option:selected" ).text();

            $(`#email_${obj.elindex}`).html($("#floatingInputEmail").val())
            $(`#nombre_${obj.elindex}`).html(nombrecompleto)
            $(`#puesto_${obj.elindex}`).html(puestonombre)

            $(`#opciones_${obj.elindex}`).attr('data-email', $("#floatingInputEmail").val());
            $(`#opciones_${obj.elindex}`).attr('data-nombre', $("#floatingInputNombre").val());
            $(`#opciones_${obj.elindex}`).attr('data-ap', $("#floatingInputAP").val());
            $(`#opciones_${obj.elindex}`).attr('data-am', $("#floatingInputAM").val());
            $(`#opciones_${obj.elindex}`).attr('data-puestoid', puestoid);
            $(`#opciones_${obj.elindex}`).attr('data-puestonom', puestonombre);
            

            $(`#${obj.acordionorigen}`).removeClass("bg-info");
            //$(elE).css({'background-color': "white"}); 
        });
    });

    /* var elE = `#${obj.acordionorigen}`;

    console.log(elE)

    $(elE).slideUp(1250, function () { 
        $(elE).slideDown(1250, function () {
        });
    }); */

    //$(elE).animate({opacity: '0.33'}, 1, function () { 
        //$(elE).animate({ opacity: '1' }, 3000, function () {
        //});
    //});


}

function editarEmpleadob(obj){

    var nombre  = $("#floatingInputNombre").val();
    var ap      = $("#floatingInputAP").val();
    var am      = $("#floatingInputAM").val();
    var email   = $("#floatingInputEmail").val();
    var puesto  = $("#selectPuestos").val();
    
    if (nombre == null || nombre == "") {

        elmensaje = '<h5 class="text-dark">El nombre esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputNombre");

        return false;
    }

    if (ap == null || ap == "") {

        elmensaje = '<h5 class="text-dark">El Apellido Paterno esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputAP");

        return false;
    }

    if (am == null || am == "") {

        elmensaje = '<h5 class="text-dark">El Apellido Materno esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputAM");

        return false;
    }

    if (email == null || email == "") {

        elmensaje = '<h5 class="text-dark">El Email esta vacío</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputEmailMnuevo");

        return false;

    }

    if (!validarEmail(email)) {

        elmensaje = '<h5 class="text-dark">El Email no es valido</h5>';
        muestraModalmensaje(elmensaje, "#floatingInputEmail");

        return false;

    }

    if (puesto == null || puesto == "" || puesto == 0) {

        elmensaje = '<h5 class="text-dark">Debe seleccionar un puesto</h5>';
        muestraModalmensaje(elmensaje, "#selectPuestos");

        return false;

    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = `{"Nombre": "${nombre}","Ap" : "${ap}","Am" : "${am}","Email": "${email}","Puesto" : ${puesto}}`;
    var link = `${url}empleados/${obj.elid}`;

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => empleadoEditadob(result,obj,raw))
        .catch(error => console.log('error', error));

}

function muestradatosEmpleadosb(res, obj, otroobj){

    var json = JSON.parse(res);

    //console.log(json)

    var cadenab = ``;

    json.Empleadosconpuesto.forEach(function (item, index) {

        // console.log(item)

        /* var colorbg = `bg-light`;

        if(isOdd(index)){

            colorbg = `bg-success`;

        } */

        var nombre = `${item.nombre} ${item.ap} ${item.am}`;

        cadenab += `

            <div class="accordion-item" id="acordion_${index}">
                <h2 class="accordion-header" id="heading${index}">
                    <button 
                        id="btnacordion_${index}"
                        class="accordion-button btn btn-outline-light collapsed"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne${index}"
                        aria-expanded="false" aria-controls="collapseOne${index}">
                        <span id="nombre_${index}">${nombre}</span>
                    </button>
                </h2>
                <div id="collapseOne${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        <div class="container">
                            
                            <div class="row text-center">

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Puesto</div>
                                </div>

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Email</div>
                                </div>

                                <div class="col">
                                    <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Acciones</div>
                                </div>

                            </div>

                            <div class="row text-center">

                                <div id="puesto_${index}" class="col">
                                    ${item.puestonom}
                                </div>

                                <div id="email_${index}" class="col">
                                    ${item.email}
                                </div>

                                <div class="col">
                                    <div class="btn-group dropstart text-end">
                                        <button style="outline: none; box-shadow: none;" role="button" type="button" class="btn btn-sm btn-outline-dark border-0" data-bs-toggle="dropdown">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                                <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu">
                                            
                                            <li>
                                                <a 
                                                    id="opciones_${index}"
                                                    data-elindex="${index}"
                                                    data-elid="${item.id}"
                                                    data-nombreacordion="acordion_${index}"
                                                    data-nombrecollapse="collapseOne${index}"
                                                    data-nombre="${item.nombre}"
                                                    data-ap="${item.ap}"
                                                    data-am="${item.am}"
                                                    data-email="${item.email}"
                                                    data-puestoid="${item.puesto}"
                                                    data-puestonom="${item.puestonom}"
                                                    data-pagx="${obj.lax}"
                                                    data-pagelid="${obj.elid}"
                                                    class="dropdown-item"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalEditar"
                                                    href="javascript:void(0);"
                                                >
                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar
                                                </a>
                                            </li>

                                            <li>
                                                <a 
                                                    data-nombre="${nombre}"
                                                    data-elid="${item.id}"
                                                    data-nombreacordion="acordion_${index}"
                                                    data-nombrecollapse="collapseOne${index}"
                                                    class="dropdown-item"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalenviarpape"
                                                    href="javascript:void(0);"
                                                >
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i> Papelera
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        `;

        if(index == (json.Empleadosconpuesto.length-1)){

            $("#divlalistaacordion").empty();
            $("#divlalistaacordion").animate({ opacity: '0.33' }, 1, function () { 

                $("#divlalistaacordion").append(cadenab);

                $("#divlalistaacordion").animate({ opacity: '1' }, 750, function () {
                    
                    $('#elcargador').hide();

                    if(otroobj!=false){

                        // console.log(otroobj);

                        var elE = `#btn${otroobj.acordionorigen}`;
                        var elEB = `#${otroobj.acordionorigen}`;

                        //$(elE).css({'background-color': "green"});

                        $(elE).addClass("bg-success text-white");
                        $(elEB).addClass("bg-success");

                        $(elE).animate({ opacity: '0.125' }, 750, function () {
                            $(this).animate({ opacity: '1' }, 1000, function () {
                                $(elE).removeClass("bg-success text-white");
                                $(elEB).removeClass("bg-success");
                                //$(elE).css({'background-color': "white"}); 
                            });
                        });

                        /* $(elE).slideUp(750, function () { 
                            $(elE).slideDown(1250, function () {
                            });
                        }); */

                    }
                
                });

            });

            //$("#divlalistaacordion").empty();
            //$("#divlalistaacordion").append(cadenab);

        }

    });

}

function carga_lista_empleadosb(x,id,obj){

    var elobj = {"lax":x, "elid":id}

    $('#elcargador').show();

    var link = `${url}empleadospaginacion/${x}`;

    for (var i = 1; i <= totaldepaginas; i++) {

        var elEbtna = `#btnpagina${i}`;
        $(elEbtna).removeClass('active');

    }
    
    elEbtna = `#btnpagina${id}`;
    $(elEbtna).addClass('active');

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => muestradatosEmpleadosb(result,elobj,obj)) // .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function creapaginasb(epp, cuantostotal, carga){

    //var cuantostotal = json[0].cuantos;

    var paginas = cuantostotal / epp;
    var resto = cuantostotal % epp;
    totaldepaginas = 0;

    //console.log(parseInt(paginas) + ' - ' + (resto));

    if (resto == 0) {
        totaldepaginas = parseInt(paginas)
    }
    else {
        totaldepaginas = parseInt(paginas) + 1;
    }

    //console.log(totaldepaginas)

    var lacadena = '';

    for (var i = 1; i <= totaldepaginas; i++) {

        var cuantospaginacion = (i - 1) * epp;

        lacadena += `
            <li id="btnpagina${i}" class="page-item">
                <a id="linkpaginacion${i}"
                    onclick="carga_lista_empleadosb(${cuantospaginacion},${i},false)"
                    data-btnnumero = "${i}"
                    data-nombreid = "#btnpagina${i}"
                    data-cuantos="${cuantospaginacion}" 
                    data-epp="${epp}" 
                    class="page-link" href="javascript:void(0);">
                    ${i}
                </a>
            </li>
        `;

        //console.log(i + ' ' + totaldepaginas);

        if (i == totaldepaginas) {

            $("#listadepaginas").empty();
            $("#listadepaginas").append(lacadena);

            if(carga){
                carga_lista_empleadosb(0,1,false);
            }else{

            }

            //var elEbtna = `#btnpagina${obj.btnnumero}`;
            //$(elEbtna).addClass('active');

            //$('#elcargador').hide();

        }

    }

}

function llamaDatosB(res){

    var json = JSON.parse(res);

    // console.log(json.cuantos);

    creapaginasb(epp, json.cuantos, true);

}

function cargainicioB(){

    var link = `${url}cuantosempleados`;

    $("#campobuscar").val("");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => llamaDatosB(result))
        .catch(error => console.log('error', error));

}

function cargainicioC(){

    var link = `${url}cuantosempleadospapelera`;

    $("#campobuscar").val("");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => datosdepapelera(result))
        .catch(error => console.log('error', error));

}

function datosdepapelera(res){

    var json = JSON.parse(res);

    //console.log(json);

    $("#contadorpape").text(json.cuantos)

}

function creapaginasc(epp, cuantostotal, str, inicio){

    //var cuantostotal = json[0].cuantos;

    var paginas = cuantostotal / epp;
    var resto = cuantostotal % epp;
    totaldepaginas = 0;

    //console.log(parseInt(paginas) + ' - ' + (resto));

    if (resto == 0) {
        totaldepaginas = parseInt(paginas)
    }
    else {
        totaldepaginas = parseInt(paginas) + 1;
    }

    //console.log(totaldepaginas) 
    //console.log({'cuantospaginacion': ${cuantospaginacion}, 'indice' : ${i}, 'str': '${str}', 'epp': ${epp}})

    var lacadena = '';

    for (var i = 1; i <= totaldepaginas; i++) {

        var cuantospaginacion = (i - 1) * epp;

        lacadena += `
            <li id="btnpagina${i}" class="page-item">
                <a id="linkpaginacion${i}"
                    onclick="cargaBusqueda('${str}', ${cuantospaginacion}, ${i}, false); "
                    data-btnnumero = "${i}"
                    data-nombreid = "#btnpagina${i}"
                    data-cuantos="${cuantospaginacion}" 
                    data-epp="${epp}" 
                    class="page-link" href="javascript:void(0);">
                    ${i}
                </a>
            </li>
        `;

        //console.log(i + ' ' + totaldepaginas);

        if (i == totaldepaginas) {

            $("#listadepaginas").empty();
            $("#listadepaginas").append(lacadena);

            if(inicio){
                var elEbtna = `#btnpagina1`;
                $(elEbtna).addClass('active');
            }

        }

    }

}

$("#campobuscar").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        
        // console.log(e)

        if(e.target.value == "" || e.target.value == null){

            $(e).focus();
        }
        else{

            cargaBusqueda(e.target.value, 0, 0, true);
            
        }

    }
});

function veabuscar() {

    if($("#campobuscar").val() == "" || $("#campobuscar").val() == null){
        $("#campobuscar").focus();
    }
    else{
        var quebuscas = $("#campobuscar").val();
        cargaBusqueda(quebuscas, 0, 0, true);
    }
}

function muestraDatosdebusqueda(res, str, indice, inicio){

    var json = JSON.parse(res);

    if(json.Info[0].cuantos > 0){

        if(inicio)
            $("#divlalista").slideUp(250, function () {});

        // console.log(json);
        // console.log(json.Info);

        if(inicio){
            creapaginasc(epp, json.Info[0].cuantos, str, inicio);
        }
        else{
            
            for (var i = 1; i <= totaldepaginas; i++) {

                var elEbtna = `#btnpagina${i}`;
                $(elEbtna).removeClass('active');
        
            }
            
            elEbtna = `#btnpagina${indice}`;
            $(elEbtna).addClass('active');
        }
    
        // console.log(json.Empleados);

        var cadenab = ``;

        json.Empleados.forEach(function (item, index) {

            // console.log(item);

            //var nombre = `${item.nombre} ${item.ap} ${item.am}`;

            var nombre = item.nombrecompleto;
            var nombreconformato = colorString(nombre, str);

            cadenab += `

                <div class="accordion-item" id="acordion_${index}">
                    <h2 class="accordion-header" id="heading${index}">
                        <button 
                            id="btnacordion_${index}" 
                            class="accordion-button btn btn-outline-light collapsed" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne${index}" 
                            aria-expanded="false" aria-controls="collapseOne${index}">
                            <span id="nombre_${index}">${nombreconformato}</span>
                        </button>
                    </h2>
                    <div id="collapseOne${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            <div class="container">
                                
                                <div class="row text-center">

                                    <div class="col">
                                        <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Puesto</div>
                                    </div>

                                    <div class="col">
                                        <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Email</div>
                                    </div>

                                    <div class="col">
                                        <div style="--bs-bg-opacity: .25;" class="shadow-none p-2 mb-4 bg-primary rounded-4">Acciones</div>
                                    </div>

                                </div>

                                <div class="row text-center">

                                    <div id="puesto_${index}" class="col">
                                        ${item.puestonom}
                                    </div>

                                    <div id="email_${index}" class="col">
                                        ${item.email}
                                    </div>

                                    <div class="col">
                                        <div class="btn-group dropstart text-end">
                                            <button style="outline: none; box-shadow: none;" role="button" type="button" class="btn btn-sm btn-outline-dark border-0" data-bs-toggle="dropdown">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>
                                            </button>
                                            <ul class="dropdown-menu">
                                                
                                                <li>
                                                    <a 
                                                        id="opciones_${index}"
                                                        data-elindex="${index}"
                                                        data-elid="${item.id}" 
                                                        data-nombreacordion="acordion_${index}"
                                                        data-nombrecollapse="collapseOne${index}"
                                                        data-nombre="${item.nombre}"
                                                        data-ap="${item.ap}"
                                                        data-am="${item.am}"
                                                        data-email="${item.email}"
                                                        data-puestoid="${item.puesto}"
                                                        data-puestonom="${item.puestonom}"
                                                        class="dropdown-item" data-bs-toggle="modal" 
                                                        href="javascript:void(0);"
                                                        data-bs-target="#modalEditar"
                                                    >
                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar
                                                    </a>
                                                </li>

                                                <li>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i> Papelera
                                                    </a>
                                                </li>
                                                <!-- <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> ${index}</a></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            `;

            if(index == (json.Empleados.length-1)){

                $("#divlalistaacordion").animate({ opacity: '0' }, 0, function () {

                    $("#divlalistaacordion").animate({ opacity: '1' }, 250, function () { 

                        $("#divlalistaacordion").empty();
                        $("#divlalistaacordion").append(cadenab);

                        $('#elcargador').hide();

                        if(inicio)
                            $("#divlalista").slideDown(250, function () {});

                    });

                });
            }
        });
    }
    else{

        //alert(' NO HAY! ');

        elmensaje = '<h5 class="text-dark"> NO se encontraron resultados :( </h5>';

        $("#contenidomodalmensaje").html(elmensaje);
        $("#modalmensaje").animate({ opacity: '1' }, 1, function () { });
        $("#modalmensajeheader").removeClass("bg-info text-dark");
        $("#modalmensajeheader").addClass("bg-danger text-white");

        $("#modalmensaje").modal('show');
        $("#divlalista").addClass("blur");
        $("#paginacion").addClass("blur");

        $('#modalmensaje').animate({ opacity: '.9' }, 1500, function () {

            $(this).animate({ opacity: '0' }, 1500, function () {

                $("#divlalista").removeClass("blur");
                $("#paginacion").removeClass("blur");
                $("#modalmensaje").modal('hide');
                //$(campo).focus();

            })
        })

        $('#elcargador').hide();
    }

}

function colorString(str, find) {
    var reg = new RegExp('('+find+')', 'gi');
    return str.replace(reg, "<strong style='color:red;'>$1</strong>");
}

function cargaBusqueda(str, cuantos, indice, inicio){

    $('#elcargador').show();

    /* if(inicio)
        $("#divlalista").slideUp(250, function () {}); */

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw = `{"Cuantos": ${cuantos}}`;
    var link = `${url}empleadosbuscarpornombredos/${str}`;

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => muestraDatosdebusqueda(result, str, indice, inicio))
        .catch(error => console.log('error', error));
}

function limpiar(){

    $("#campobuscar").val("");
    $("#campobuscar").focus();

    cargainicioB();

}

$('#modalenviarpape').on('show.bs.modal', function (e) {

    // console.log(e.relatedTarget.dataset);

    $('#btnEnviarpapelera').attr('data-elid', e.relatedTarget.dataset.elid);
    $('#btnEnviarpapelera').attr('data-acordionorigen', e.relatedTarget.dataset.nombreacordion);
    $('#btnEnviarpapelera').attr('data-nombrecollapse', e.relatedTarget.dataset.nombrecollapse);

    $("#divlalistaacordion").addClass("blur");
    $("#paginacion").addClass("blur");
    $("#contenidomodalenviarpape").css({ opacity: 0.90 });

    var mensaje = `<h5 class="text-dark">¿Realmente desea enviar a la papelera a <strong><p>${e.relatedTarget.dataset.nombre} ?</p></strong></h5>`;

    $("#contenidomodalenviarpape").empty();
    $("#contenidomodalenviarpape").append(mensaje);
    
});

$('#modalenviarpape').on('hidden.bs.modal', function (e) {
    $("#divlalistaacordion").removeClass("blur");
    $("#paginacion").removeClass("blur");
    $("#contenidomodalenviarpape").css({ opacity: 1 });
})

function enviarApapelera(obj){

    // console.log(obj);

    $("#modalenviarpape").modal('hide');

    var elE = `#${obj.acordionorigen}`;
    var elEE = `#${obj.nombrecollapse}`;

    $(elEE).collapse('hide');
    //$(elE).delay(0).effect("transfer", { to: "#menupapelera", className: "ui-effects-transfer" }, 500, elcallback);

    $(elE).animate({opacity: '0'}, 500, function () { 

        var link = `${url}enviarapapelera/${obj.elid}`;

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(link, requestOptions)
            .then(response => response.text())
            .then(result => actualiza(result, elE))
            .catch(error => console.log('error', error));

    });

    //$(elE).delay(750).effect("bounce", 250, function() {});
    //$(elE).effect("bounce", 250, function() {});

    // console.log(elEE)

    /* $(elE).slideUp(500, function () {
        $("#contadorpape").effect("bounce", 250, function() {});
    }); */

}

function actualiza(res, e){

    // console.log(JSON.parse(res))

    $(e).slideUp(500, function () {
        $("#contadorpape").effect("bounce", 250, function() {});
    });

    cargainicioC();

}

function cargarpapelera() {

    $('#menupapelera').addClass("disabled");

    if ($("#divpapalera").is(":visible")) {
        $("#divpapalera").slideUp(750, function () {

            $('#titulomenupape').text('Papelera');
            $('#bolsamenupape').show();
            $('#menunuevo').removeClass("disabled");

            $("#divlalista").slideDown(750, function () {

            });

            $("#divbuscador").slideDown(750, function () {

            });

            $("#paginacion").slideDown(750, function () {

                $('#menupapelera').removeClass("disabled");

            });

        });
    }

    if ($("#divlalista").is(":visible")) {
        $("#divlalista").slideUp(750, function () {
            $("#divbuscador").slideUp(250, function () {
            });
            $("#paginacion").slideUp(250, function () {

                $('#elcargador').show();

                $('#titulomenupape').text('Regresar');
                $('#bolsamenupape').hide();
                //$("#menunuevo").prop("disabled", true);
                $('#menunuevo').addClass("disabled");

                var link = `${url}empleadosconpuestopapelera`;

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(link, requestOptions)
                    .then(response => response.text())
                    .then(result => creapapelera(result))
                    .catch(error => console.log('error', error));

            });
            /* $(elE).slideDown(1250, function () {
            }); */
        });
    }


}

function creapapelera(res){

    //console.log(res)

    var json = (JSON.parse(res))

    // console.log(json)

    if(json.Empleadosconpuesto!=null){

        var cadena = ``;

        json.Empleadosconpuesto.forEach(function (item, index) {

            // console.log(item);

            var nombre = `${item.nombre} ${item.ap} ${item.am}`;

            cadena += `
                <div id="colcard${index}" style="margin-top: 30px;" class="col">
                    <div style="border: 30px;" class="card">
                        <div class="card-header bg-secondary">
                            <div class="float-end">
                                <button 
                                    data-colcard="#colcard${index}"
                                    data-index="${index}"
                                    data-elid="${item.id}"
                                    data-nombre="${nombre}"
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalmensajeeliminar"
                                    title="Eliminar">
                                    <i class="fa fa-ban" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="float-start">
                                <button
                                    data-colcard="#colcard${index}"
                                    data-index="${index}"
                                    data-elid="${item.id}"
                                    data-nombre="${nombre}"
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalmensajerecuperar"
                                    title="Recuperar">
                                    <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text"><strong>${index+1}.</strong> ${nombre}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${item.puestonom}</li>
                            <li class="list-group-item">${item.email}</li>
                        </ul>
                        <div class="card-footer">
                            <small class="text-muted">${item.actualizado}</small>
                        </div>
                    </div>
                </div>
            `;

            if(index == (json.Empleadosconpuesto.length-1)){

                $("#divtarjetaspapalera").empty();
                $("#divtarjetaspapalera").append(cadena);

                $("#divpapalera").slideDown(750, function () {
                    $('#elcargador').hide();
                    $('#menupapelera').removeClass("disabled");
                });

            }

        });
    }
    else{

        //alert('NO HAY!');
        $('#elcargador').hide();

        var elmensaje = `<h5 class="text-dark"> Ho hay lementos en la papelera, para mostrar</h5>`;
        $("#contenidomodalmensaje").html(elmensaje);
        $("#btncerrarmodalmensaje").show();
        $("#modalmensaje").animate({ opacity: '1' }, 1, function () { });
        $("#modalmensaje").modal('show');

    }

}

$('#modalmensajeeliminar').on('show.bs.modal', function (e) {

    // console.log(e.relatedTarget.dataset);

    $("#divpapalera").addClass("blur");
    $("#contenidomodalmensajeeliminar").css({ opacity: 0.90 });

    var elmensaje = `<h5 class="text-dark">Esta acción eliminara los datos de <br><strong><span>${e.relatedTarget.dataset.nombre}</span></strong><br> de forma permanente, ¿de acuerdo?</h5>`;
    $("#contenidomodalmensajeeliminar").html(elmensaje);

    $('#btnConfirmaeliminar').attr('data-elid', e.relatedTarget.dataset.elid);
    $('#btnConfirmaeliminar').attr('data-index', e.relatedTarget.dataset.index);
    $('#btnConfirmaeliminar').attr('data-colcard', e.relatedTarget.dataset.colcard);
    $('#btnConfirmaeliminar').attr('data-nombre', e.relatedTarget.dataset.nombre);
    
});


$('#modalmensajeeliminar').on('hidden.bs.modal', function (e) {
    
    $("#divpapalera").removeClass("blur");
    $("#contenidomodalmensajeeliminar").css({ opacity: 1 });

})

function confirmaEliminar(obj) {

    // console.log(obj)

    var link = `${url}eliminar/${obj.elid}`;

    var requestOptions = {
        method: 'OPTIONS',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => despuesdeEliminar(result, obj))
        .catch(error => console.log('error', error));

}

function despuesdeEliminar(res, obj){

    // console.log(obj)

    var elE = obj.colcard

    $('#modalmensajeeliminar').modal('hide');

    $(elE).animate({opacity: '0'}, 1250, function () { 
        
        $(this).remove();
        cargainicioB();
        cargainicioC();

        var link = `${url}cuantosempleadospapelera`;

        $("#campobuscar").val("");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(link, requestOptions)
            .then(response => response.text())
            .then(result => obtenerDatosJson(result))
            .catch(error => console.log('error', error));

        function obtenerDatosJson(res) {

            var json = JSON.parse(res);

            //console.log(json)

            if(json.cuantos==0){

                $("#divpapalera").slideUp(750, function () {

                    $('#titulomenupape').text('Papelera');
                    $('#bolsamenupape').show();
                    $('#menunuevo').removeClass("disabled");
        
                    $("#divlalista").slideDown(750, function () {
        
                    });
        
                    $("#divbuscador").slideDown(750, function () {
        
                    });
        
                    $("#paginacion").slideDown(750, function () {
        
                        $('#menupapelera').removeClass("disabled");
        
                    });
        
                });

            }
            else{
                
            }
            
        }

    });

}

$('#modalmensajerecuperar').on('show.bs.modal', function (e) {

    // console.log(e.relatedTarget.dataset);

    $("#divpapalera").addClass("blur");
    $("#contenidomodalmensajeeliminar").css({ opacity: 0.90 });

    var elmensaje = `<h5 class="text-dark">Se van a recuperar los datos de <br><strong><span>${e.relatedTarget.dataset.nombre}</span></strong><br>¿de acuerdo?</h5>`;
    $("#contenidomodalmensajerecuperar").html(elmensaje);

    $('#btnConfirmarecuperar').attr('data-elid', e.relatedTarget.dataset.elid);
    $('#btnConfirmarecuperar').attr('data-index', e.relatedTarget.dataset.index);
    $('#btnConfirmarecuperar').attr('data-colcard', e.relatedTarget.dataset.colcard);
    $('#btnConfirmarecuperar').attr('data-nombre', e.relatedTarget.dataset.nombre);
    
});


$('#modalmensajerecuperar').on('hidden.bs.modal', function (e) {
    
    $("#divpapalera").removeClass("blur");
    $("#contenidomodalmensajerecuperar").css({ opacity: 1 });

})

function confirmaRecuperar(obj) {

    // console.log(obj)

    var link = `${url}sacardelapapelera/${obj.elid}`;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => despuesdeEliminarB(result, obj))
        .catch(error => console.log('error', error));

}

function despuesdeEliminarB(res, obj){

    // console.log(obj)

    var elE = obj.colcard

    $('#modalmensajerecuperar').modal('hide');

    $(elE).animate({opacity: '0'}, 500, function () { 
        
        $(this).remove();
        
        cargainicioB();
        cargainicioC();

        var link = `${url}cuantosempleadospapelera`;

        $("#campobuscar").val("");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(link, requestOptions)
            .then(response => response.text())
            .then(result => obtenerDatosJson(result))
            .catch(error => console.log('error', error));

        function obtenerDatosJson(res) {

            var json = JSON.parse(res);

            //console.log(json)

            if(json.cuantos==0){

                $("#divpapalera").slideUp(750, function () {

                    $('#titulomenupape').text('Papelera');
                    $('#bolsamenupape').show();
                    $('#menunuevo').removeClass("disabled");
        
                    $("#divlalista").slideDown(750, function () {
        
                    });
        
                    $("#divbuscador").slideDown(750, function () {
        
                    });
        
                    $("#paginacion").slideDown(750, function () {
        
                        $('#menupapelera').removeClass("disabled");
        
                    });
        
                });

            }
            else{
                
            }
            
        }
        
    });

}


$('#modalmensaje').on('show.bs.modal', function (e) {

    //console.log(e.relatedTarget.dataset);

    $("#divlalista").addClass("blur");
    $("#paginacion").addClass("blur");
    $("#divbuscador").addClass("blur");
    
    $("#contenidomodalmensaje").css({ opacity: 0.90 });
    
});


$('#modalmensaje').on('hidden.bs.modal', function (e) {
    
    $("#divlalista").removeClass("blur");
    $("#paginacion").removeClass("blur");
    $("#divbuscador").removeClass("blur");
    $("#contenidomodalmensaje").css({ opacity: 1 });

    $("#divpapalera").slideUp(750, function () {

        $('#titulomenupape').text('Papelera');
        $('#bolsamenupape').show();
        $('#menunuevo').removeClass("disabled");

        $("#divlalista").slideDown(750, function () {

        });

        $("#divbuscador").slideDown(750, function () {

        });

        $("#paginacion").slideDown(750, function () {

            $('#menupapelera').removeClass("disabled");

        });

    });

})

/* function elcallback(){
    $("#menupapelera").effect("bounce", 250, function() {});
} */