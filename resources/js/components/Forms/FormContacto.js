import React from "react"
import { Alert, AlertTitle } from '@material-ui/lab'
import url from '../../url'

export default class Contacto extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            mensaje: "",
            enviando: false,
            alertExit: false,
            alertError: false,
            alertError2: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault()

        if(this.state.nombre == '' || this.state.correo == '' || this.state.mensaje == '') {
          this.setState({
              alertError2: true,
              enviando: false
          })

        }else{

          this.setState({
              alertError2: false,
              enviando: true
          })

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }

             fetch(`${url}/api/contacto`, config)
             .then((res) => {
              let json = res.json()

              if(res.status == 201 ){
                this.setState({
                    nombre: "",
                    correo: "",
                    mensaje: "",
                    alertExit: true,
                    enviando: false
                })
              }else{
                this.setState({
                    alertError: true,
                    enviando: false
                })
              }

            }).catch((err) => {
              this.setState({
                  err,
                  alertError: true
              })
            })
        }


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <div className="relative w-full mb-3 mt-8">
                <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                >
                    Nombre Completo
                </label>
                <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Nombre Completo"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                />
                </div>

                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                >
                    Correo
                </label>
                <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Correo"
                    name="correo"
                    value={this.state.correo}
                    onChange={this.handleChange}
                />
                </div>

                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                >
                    Mensaje
                </label>
                <textarea
                    rows="4"
                    cols="80"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Escribe un mensaje..."
                    name="mensaje"
                    value={this.state.mensaje}
                    onChange={this.handleChange}
                />
                </div>

                <div className="text-center mt-6">
                  { this.state.enviando ? (
                    <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        disabled
                    >
                        Enviando...
                    </button>
                  ) : (
                     <button

                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Enviar Mensaje
                    </button>
                   ) }
                </div>

                <div className="mt-5">

                    { this.state.alertExit ? (
                       <Alert severity="success">
                            <AlertTitle>Éxito</AlertTitle>
                            Tu mensaje fue enviado con éxito— <strong>nos comunicaremos pronto contigo!</strong>
                        </Alert>
                    ) : null }

                    { this.state.alertError ? (
                        <Alert variant="outlined" severity="error">
                        Ha ocurrido un error — intente mas tarde!
                        </Alert>
                    ) : null }

                    { this.state.alertError2 ? (
                        <Alert variant="outlined" severity="error">
                          Ingrese los datos que faltan
                        </Alert>
                    ) : null }


                </div>


            </form>

        )
    }


}
