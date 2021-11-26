package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

func dbConn() (db *sql.DB) {

	dbDriver := "mysql"
	dbUser := "balmendra"
	dbPass := "balmendra33?"
	dbName := "unir_tarea_uno"

	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@tcp(127.0.0.1)/"+dbName)

	if err != nil {
		panic(err.Error())
	}

	return db
}

type Student struct {

	// defining struct fields
	Name  string
	Marks int
	Id    string
}

type Puesto struct {
	ID     int    `json:"id"`
	Nombre string `json:"nombre"`
}

type losPuestos struct {
	Puestos []Puesto
}

type Cuantosempleados struct {
	Cuantos int `json:"cuantos"`
}

type Empleadoconpuestobuscar struct {
	ID     int    `json:"id"`
	Nombre string `json:"nombre"`
	//Cuantos        int    `json:"cuantos"`
	Nombrecompleto string `json:"nombrecompleto"`
	Ap             string `json:"ap"`
	Am             string `json:"am"`
	Email          string `json:"email"`
	Puesto         int    `json:"puesto"`
	Puestonom      string `json:"puestonom"`
	Status         int    `json:"status"`
	Creado         string `json:"creado"`
	Actualizado    string `json:"actualizado"`
}

type losEmpleadosconpuestobuscar struct {
	Empleadosconpuestobuscar []Empleadoconpuestobuscar
}

type Empleadoconpuesto struct {
	ID          int    `json:"id"`
	Nombre      string `json:"nombre"`
	Ap          string `json:"ap"`
	Am          string `json:"am"`
	Email       string `json:"email"`
	Puesto      int    `json:"puesto"`
	Puestonom   string `json:"puestonom"`
	Status      int    `json:"status"`
	Creado      string `json:"creado"`
	Actualizado string `json:"actualizado"`
}

type losEmpleadosconpuesto struct {
	Empleadosconpuesto []Empleadoconpuesto
}

type Empleado struct {
	ID          int    `json:"id"`
	Nombre      string `json:"nombre"`
	Ap          string `json:"ap"`
	Am          string `json:"am"`
	Email       string `json:"email"`
	Puesto      int    `json:"puesto"`
	Status      int    `json:"status"`
	Creado      string `json:"creado"`
	Actualizado string `json:"actualizado"`
}

type losEmpleados struct {
	Empleados []Empleado
}

type Todo struct {
	Title string
	Done  bool
	Valor int
}

type TodoPageData struct {
	PageTitle string
	MiDato    int
	Todos     []Todo
}

func indexRoute(w http.ResponseWriter, r *http.Request) {

	//fmt.Fprintf(w, "hola!")

	str := `
			<!doctype html>
			<html lang="en" class="h-100">
				
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>hola</title>

					<link href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

					<link rel="icon" type="image/png" sizes="192x192" href="https://cuatroymedio.net/test/maestria/icon.png">
					<meta name="theme-color" content="#7952b3">		
					<link href="https://cuatroymedio.net/test/maestria/cover.css" rel="stylesheet">
				</head>

				<body class="d-flex h-100 text-center text-white bg-dark">
					
					<div id="idcover" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
						<header class="mb-auto">
							<div>
							<h3 class="float-md-start mb-0">unir</h3>
							<nav class="nav nav-masthead justify-content-center float-md-end">
								<a class="nav-link active" aria-current="page" href="#">inicio</a>
								<a class="nav-link" href="#">opciónx</a>
								<a class="nav-link" href="#">opcióny</a>
							</nav>
							</div>
						</header>

						<main class="px-3">
							<h1>Lorem Ipsum.</h1>
							<p class="lead">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño</p>
							<p class="lead">
								<a href="#" data-bs-toggle="modal" data-bs-target="#modalenviarpape" class="btn btn-lg btn-secondary fw-bold border-white bg-white"> click aquí </a>
							</p>
						</main>

						<footer class="mt-auto text-white-50">
							<p> Lorem Ipsum es simplemente el texto de relleno </p>
						</footer>

					</div>

					<div class="modal fade" id="modalenviarpape" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true" aria-labelledby="modalmensajeLabel222">
						<div class="modal-dialog modal-dialog-centered">
							<div id="divcontenidomodalpape" class="modal-content">
					
								<div id="modalenviarpapeheader" class="modal-header bg-danger text-white">
									<h5 class="modal-title" id="modalmensajeLabel222"><i class="bi bi-info-circle-fill"></i>unir</h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>

								<div id="contenidomodalenviarpape" class="modal-body text-center">
									<h5 class="text-dark"> ¿Realmente desea eliminar a ??</h5>
								</div>
					
								<!-- <div class="modal-footer">
									<button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">No</button>
									<button 
										id="btnEnviarpapelera"
										data-datos="0"
										onclick="estaesunaprueba(this.dataset);" 
										type="button" 
										class="btn btn-primary">
										Si
									</button>
								</div> -->

								<br />
								<br />
        
                			</div>
            			</div>
        			</div>
					

					<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
					<script src="https://getbootstrap.com/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
					<script src="https://cuatroymedio.net/test/maestria/mijotaese.js"></script>

					<script>
						$(document).ready(function() {
							// console.log( "ready!" );
							$("#modalenviarpape").modal('show');
						});
					</script>

				</body>
			</html>
		`

	fmt.Printf("comando: HOME \n")

	w.Write([]byte(str))

}

func nuevoEmpleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	var elq string

	//vars := mux.Vars(r)
	//empleadoID, err := strconv.Atoi(vars["id"])
	var nuevoEmpleado Empleado

	fmt.Printf("comando: NUEVO \n")

	/* if err != nil {
		fmt.Fprintf(w, "Invalid ID")
	} */

	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Los datos no son validos")
	}

	//fmt.Printf("comando: %s \n", reqBody)

	json.Unmarshal(reqBody, &nuevoEmpleado)

	fmt.Println("nuevoEmpleado con los datos: ", nuevoEmpleado)

	db := dbConn()

	defer db.Close()

	elq = `
		INSERT INTO empleados (nombre, ap, am, email, puesto) VALUES (?,?,?,?,?)
	`

	results, err := db.Query(elq, nuevoEmpleado.Nombre, nuevoEmpleado.Ap, nuevoEmpleado.Am, nuevoEmpleado.Email, nuevoEmpleado.Puesto)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(nuevoEmpleado)

}

func getEmpleadosporNombredos(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	type Datos struct {
		Cuantos int `json:"cuantos"`
	}

	vars := mux.Vars(r)
	lavariable := vars["str"]
	lacadena := "'%" + lavariable + "%'"

	fmt.Printf("buscando: %s \n", lacadena)

	var misDatos Datos

	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Los datos no son validos")
	}

	fmt.Println("body: ", reqBody)

	json.Unmarshal(reqBody, &misDatos)

	fmt.Println("misDatos es: ", misDatos)
	fmt.Println("misDatos.Cuantos: ", misDatos.Cuantos)

	dba := dbConn()

	defer dba.Close()

	var elq = `
		SELECT
			E.id, E.nombre, CONCAT_WS(" ", E.nombre, E.ap, E.am) as nombrecompleto, 
			E.ap, E.am, E.email, E.puesto,
			(SELECT nombre FROM puestos P WHERE P.id = E.puesto) as nombrepuesto,  
			E.status, E.creado, E.actualizado 
		FROM empleados E 
		WHERE (E.nombre LIKE ` + lacadena + ` OR E.ap LIKE ` + lacadena + ` OR E.am LIKE ` + lacadena + `) AND E.status = 1
		ORDER BY E.nombre
		LIMIT ?, 5
	`

	results, err := dba.Query(elq, misDatos.Cuantos)

	if err != nil {
		panic(err.Error())
	}

	var elqb = `
		SELECT
			COUNT(E.id) as cuantos
			FROM empleados E
			WHERE (E.nombre LIKE ` + lacadena + ` OR E.ap LIKE ` + lacadena + ` OR E.am LIKE ` + lacadena + `) AND E.status = 1
	`

	err = dba.QueryRow(elqb).Scan(&misDatos.Cuantos)

	if err != nil {
		panic(err.Error())
	}

	fmt.Println("# de Resultados: ", misDatos.Cuantos)

	cuantosResultados := misDatos.Cuantos

	var losEmple losEmpleadosconpuestobuscar

	defer results.Close()

	for results.Next() {

		var empleado Empleadoconpuestobuscar

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Nombrecompleto, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Puestonom, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		/* re := regexp.MustCompile(`(?i)` + lavariable)

		Cuantos: cuantosResultados

		nombreFormato := re.ReplaceAllString(empleado.Nombrecompleto, "<class='text-danger'>"+lavariable+"</strong>") */
		/* nombreFormatob := re.ReplaceAllString(empleado.Ap, "<class='text-danger'>"+lavariable+"</strong>")
		nombreFormatoc := re.ReplaceAllString(empleado.Am, "<class='text-danger'>"+lavariable+"</strong>")

		nombreconformato := nombreFormato + " " + nombreFormatob + " " + nombreFormatoc */

		fmt.Println("Nombrecompleto: ", empleado.Nombrecompleto)

		losEmple.Empleadosconpuestobuscar = append(losEmple.Empleadosconpuestobuscar, Empleadoconpuestobuscar{ID: empleado.ID, Nombre: empleado.Nombre, Nombrecompleto: empleado.Nombrecompleto, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Puestonom: empleado.Puestonom, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	type datosFinal struct {
		Info      []Datos
		Empleados []Empleadoconpuestobuscar
	}

	losDatos := &datosFinal{
		Info:      []Datos{{Cuantos: cuantosResultados}},
		Empleados: losEmple.Empleadosconpuestobuscar,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losDatos)

}

func getEmpleadosporNombre(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	vars := mux.Vars(r)
	lavariable := vars["str"]
	lacadena := "'%" + lavariable + "%'"

	fmt.Printf("buscando: %s \n", lacadena)

	/*if err != nil {
		return
	}*/

	db := dbConn()

	defer db.Close()

	// (E.nombre LIKE ` + lacadena + `)

	elq = `
		SELECT 
			E.id, E.nombre, CONCAT_WS(" ", E.nombre, E.ap, E.am) as nombrecompleto, 
			E.ap, E.am, E.email, E.puesto,
			(SELECT nombre FROM puestos P WHERE P.id = E.puesto) as nombrepuesto,  
			E.status, E.creado, E.actualizado 
		FROM empleados E 
		WHERE (E.nombre LIKE ` + lacadena + ` OR E.ap LIKE ` + lacadena + ` OR E.am LIKE ` + lacadena + `) AND E.status = 1
		ORDER BY E.nombre
	`

	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	var losEmple losEmpleadosconpuestobuscar

	defer results.Close()

	for results.Next() {

		var empleado Empleadoconpuestobuscar

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Nombrecompleto, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Puestonom, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		/* re := regexp.MustCompile(`(?i)` + lavariable)

		nombreFormato := re.ReplaceAllString(empleado.Nombrecompleto, "<class='text-danger'>"+lavariable+"</strong>") */
		/* nombreFormatob := re.ReplaceAllString(empleado.Ap, "<class='text-danger'>"+lavariable+"</strong>")
		nombreFormatoc := re.ReplaceAllString(empleado.Am, "<class='text-danger'>"+lavariable+"</strong>")

		nombreconformato := nombreFormato + " " + nombreFormatob + " " + nombreFormatoc */

		losEmple.Empleadosconpuestobuscar = append(losEmple.Empleadosconpuestobuscar, Empleadoconpuestobuscar{ID: empleado.ID, Nombre: empleado.Nombre, Nombrecompleto: empleado.Nombrecompleto, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Puestonom: empleado.Puestonom, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple)

}

func getEmpleadosconPuestopapelera(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	/* db, err := sql.Open("mysql", "balmendra:balmendra33?@tcp(127.0.0.1)/node_mysql_crud_db")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	} */

	defer db.Close()

	elq = `
		SELECT 
			E.id, E.nombre, E.ap, E.am, E.email, E.puesto,
			(SELECT nombre FROM puestos P WHERE P.id = E.puesto) as nombrepuesto,  
			E.status, E.creado, E.actualizado 
		FROM empleados E 
		WHERE E.status = 2
		ORDER BY E.actualizado DESC
	`

	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	var losEmple losEmpleadosconpuesto

	defer results.Close()

	for results.Next() {

		var empleado Empleadoconpuesto

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Puestonom, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		losEmple.Empleadosconpuesto = append(losEmple.Empleadosconpuesto, Empleadoconpuesto{ID: empleado.ID, Nombre: empleado.Nombre, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Puestonom: empleado.Puestonom, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple)
}

func getEmpleadosconPuesto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	/* db, err := sql.Open("mysql", "balmendra:balmendra33?@tcp(127.0.0.1)/node_mysql_crud_db")
	if err != nil {
		fmt.Fprintf(w, err.Error())
	} */

	defer db.Close()

	elq = `
		SELECT 
			E.id, E.nombre, E.ap, E.am, E.email, E.puesto,
			(SELECT nombre FROM puestos P WHERE P.id = E.puesto) as nombrepuesto,  
			E.status, E.creado, E.actualizado 
		FROM empleados E 
		WHERE E.status = 1
		ORDER BY E.nombre
	`

	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	var losEmple losEmpleadosconpuesto

	defer results.Close()

	for results.Next() {

		var empleado Empleadoconpuesto

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Puestonom, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		losEmple.Empleadosconpuesto = append(losEmple.Empleadosconpuesto, Empleadoconpuesto{ID: empleado.ID, Nombre: empleado.Nombre, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Puestonom: empleado.Puestonom, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple)
}

func getEmpleadosconpuestoPaginacion(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	vars := mux.Vars(r)
	cuantos, err := strconv.Atoi(vars["cuantos"])

	if err != nil {
		return
	}

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT 
			E.id, E.nombre, E.ap, E.am, E.email, E.puesto,
			(SELECT nombre FROM puestos P WHERE P.id = E.puesto) as nombrepuesto,  
			status, creado, actualizado 
		FROM empleados E 
		WHERE status = 1
		ORDER BY nombre 
		LIMIT ?, 5
	`

	results, err := db.Query(elq, cuantos)

	if err != nil {
		panic(err.Error())
	}

	var losEmple losEmpleadosconpuesto

	defer results.Close()

	for results.Next() {

		var empleado Empleadoconpuesto

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Puestonom, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		losEmple.Empleadosconpuesto = append(losEmple.Empleadosconpuesto, Empleadoconpuesto{ID: empleado.ID, Nombre: empleado.Nombre, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Puestonom: empleado.Puestonom, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple)

}

func getCuantosEmpleados(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT COUNT(id) FROM empleados WHERE status = 1;
	`
	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	if results.Next() {

		var cemp Cuantosempleados

		err = results.Scan(&cemp.Cuantos)
		if err != nil {
			panic(err.Error())
		}

		cuantosempleados := &Cuantosempleados{
			Cuantos: cemp.Cuantos,
		}

		fmt.Printf("cuantos normal : %d \n", cemp.Cuantos)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(cuantosempleados)

	} else {
		fmt.Println("No hay nada aqui!")
	}

}

func getEmpleados(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT 
			id, nombre, ap, am, email, puesto, status, creado, actualizado 
		FROM empleados 
		WHERE status = 1 
		ORDER BY nombre
	`

	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	var losEmple losEmpleados

	defer results.Close()

	for results.Next() {

		var empleado Empleado

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		losEmple.Empleados = append(losEmple.Empleados, Empleado{ID: empleado.ID, Nombre: empleado.Nombre, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple.Empleados)
	//json.NewEncoder(w).Encode(losEmple)
}

func getCuantosEmpleadospapelera(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT COUNT(id) FROM empleados WHERE status = 2;
	`
	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	if results.Next() {

		var cemp Cuantosempleados

		err = results.Scan(&cemp.Cuantos)
		if err != nil {
			panic(err.Error())
		}

		cuantosempleados := &Cuantosempleados{
			Cuantos: cemp.Cuantos,
		}

		fmt.Printf("cuantos hay en papelera : %d \n", cemp.Cuantos)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(cuantosempleados)

	} else {
		fmt.Println("No hay nada aqui!")
	}

}

func regresaPuestos(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT id, nombre FROM puestos P ORDER BY nombre
	`
	results, err := db.Query(elq)

	if err != nil {
		panic(err.Error())
	}

	var losP losPuestos

	defer results.Close()

	for results.Next() {

		var puesto Puesto

		err = results.Scan(&puesto.ID, &puesto.Nombre)

		if err != nil {
			panic(err.Error())
		}

		losP.Puestos = append(losP.Puestos, Puesto{ID: puesto.ID, Nombre: puesto.Nombre})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losP.Puestos)

}

func getUnEmpleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	vars := mux.Vars(r)
	empleadoID, err := strconv.Atoi(vars["id"])

	if err != nil {
		return
	}

	db := dbConn()

	defer db.Close()

	elq = `
		SELECT * FROM empleados WHERE id = ? AND status = 1
	`

	results, err := db.Query(elq, empleadoID)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	var losEmple losEmpleados

	for results.Next() {

		var empleado Empleado

		err = results.Scan(&empleado.ID, &empleado.Nombre, &empleado.Ap, &empleado.Am, &empleado.Email, &empleado.Puesto, &empleado.Status, &empleado.Creado, &empleado.Actualizado)

		if err != nil {
			panic(err.Error())
		}

		losEmple.Empleados = append(losEmple.Empleados, Empleado{ID: empleado.ID, Nombre: empleado.Nombre, Ap: empleado.Ap, Am: empleado.Am, Email: empleado.Email, Puesto: empleado.Puesto, Status: empleado.Status, Creado: empleado.Creado, Actualizado: empleado.Actualizado})

	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losEmple)

}

func papeleraSacarempleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	vars := mux.Vars(r)
	empleadoID, err := strconv.Atoi(vars["id"])

	fmt.Printf("comando: SACAR DE LA PAPELERA empleadoID: %d \n", empleadoID)

	if err != nil {
		fmt.Fprintf(w, "Invalid ID")
	}

	/* reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Los datos no son validos")
	}

	fmt.Printf("body: %s \n", reqBody)*/

	db := dbConn()

	defer db.Close()

	elq = `
		UPDATE empleados SET status = 1 WHERE id = ?
	`

	results, err := db.Query(elq, empleadoID)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	type Datos struct {
		Resultado int `json:"resultado"`
	}

	type datosFinal struct {
		Info []Datos
	}

	losDatos := &datosFinal{
		Info: []Datos{{Resultado: 1}},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losDatos)

}

func papeleraEmpleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var elq string

	vars := mux.Vars(r)
	empleadoID, err := strconv.Atoi(vars["id"])

	fmt.Printf("comando: ENVIAR A LA PAPELERA empleadoID: %d \n", empleadoID)

	if err != nil {
		fmt.Fprintf(w, "Invalid ID")
	}

	/* reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Los datos no son validos")
	}

	fmt.Printf("body: %s \n", reqBody)*/

	db := dbConn()

	defer db.Close()

	elq = `
		UPDATE empleados SET status = 2 WHERE id = ?
	`

	results, err := db.Query(elq, empleadoID)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	type Datos struct {
		Resultado int `json:"resultado"`
	}

	type datosFinal struct {
		Info []Datos
	}

	losDatos := &datosFinal{
		Info: []Datos{{Resultado: 1}},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losDatos)

}

func eliminarEmpleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	var elq string

	vars := mux.Vars(r)
	empleadoID, err := strconv.Atoi(vars["id"])

	fmt.Printf("comando: ELIMINAR %d \n", empleadoID)

	if err != nil {
		fmt.Fprintf(w, "Invalid ID")
	}

	db := dbConn()

	defer db.Close()

	elq = `
		DELETE FROM empleados WHERE id = ?
	`

	results, err := db.Query(elq, empleadoID)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	type Datos struct {
		Resultado int `json:"resultado"`
	}

	type datosFinal struct {
		Info []Datos
	}

	losDatos := &datosFinal{
		Info: []Datos{{Resultado: 1}},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(losDatos)

}

func updateEmpleado(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	var elq string

	vars := mux.Vars(r)
	empleadoID, err := strconv.Atoi(vars["id"])
	var updatedEmpleado Empleado

	fmt.Printf("comando: ACTUALIZAR empleadoID: %d \n", empleadoID)

	if err != nil {
		fmt.Fprintf(w, "Invalid ID")
	}

	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Los datos no son validos")
	}

	//fmt.Printf("comando: %s \n", reqBody)

	json.Unmarshal(reqBody, &updatedEmpleado)

	db := dbConn()

	defer db.Close()

	elq = `
		UPDATE empleados SET nombre = ?, ap = ?, am = ?, email = ?, puesto = ? WHERE id = ?
	`

	results, err := db.Query(elq, updatedEmpleado.Nombre, updatedEmpleado.Ap, updatedEmpleado.Am, updatedEmpleado.Email, updatedEmpleado.Puesto, empleadoID)

	if err != nil {
		panic(err.Error())
	}

	defer results.Close()

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(updatedEmpleado)

}

func main() {

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", indexRoute)

	router.HandleFunc("/empleados", getEmpleados).Methods("GET")
	router.HandleFunc("/empleados/{id}", getUnEmpleado).Methods("GET")
	router.HandleFunc("/empleadosbuscarpornombre/{str}", getEmpleadosporNombre).Methods("GET")
	router.HandleFunc("/empleadospaginacion/{cuantos}", getEmpleadosconpuestoPaginacion).Methods("GET")
	router.HandleFunc("/cuantosempleados", getCuantosEmpleados).Methods("GET")
	router.HandleFunc("/cuantosempleadospapelera", getCuantosEmpleadospapelera).Methods("GET")
	router.HandleFunc("/enviarapapelera/{id}", papeleraEmpleado).Methods("GET")
	router.HandleFunc("/sacardelapapelera/{id}", papeleraSacarempleado).Methods("GET")

	router.HandleFunc("/empleadosconpuesto", getEmpleadosconPuesto).Methods("GET")
	router.HandleFunc("/empleadosconpuestopapelera", getEmpleadosconPuestopapelera).Methods("GET")
	router.HandleFunc("/puestos", regresaPuestos).Methods("GET")

	router.HandleFunc("/empleados/{id}", updateEmpleado).Methods("OPTIONS", "PUT")

	router.HandleFunc("/eliminar/{id}", eliminarEmpleado).Methods("OPTIONS", "DELETE")

	router.HandleFunc("/empleadosbuscarpornombredos/{str}", getEmpleadosporNombredos).Methods("OPTIONS", "PUT")

	router.HandleFunc("/empleado", nuevoEmpleado).Methods("POST")

	// API LOCAL
	log.Fatal(http.ListenAndServe(":3000", router))

	// API REMOTA CON SSL
	// log.Fatal(http.ListenAndServeTLS(":8443", "cert.pem", "privkey.pem", router))
}
