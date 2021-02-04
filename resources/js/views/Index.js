/*eslint-disable*/
import React, { useEffect }  from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Element, Link } from 'react-scroll'
import Carousel from 'react-elastic-carousel'

import AOS from 'aos'
import "aos/dist/aos.css"

//componentes
import IndexNavbar from "../components/Navbars/IndexNavbar.js"
import Footer from "../components/Footers/Footer.js"
import FormContacto from "../components/Forms/FormContacto.js"

function Index() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
                <h2 data-aos="fade-left" className="font-semibold text-4xl text-gray-700">
                 Rétame con tu imaginación.
                </h2>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                ¿Te gustaría tener presencia en internet? informando sobre tus
                servicios/productos, o ¿un sistema interno? para aumentar tu productividad
                automatizando los diferentes procesos de tu empresa, ya sea gestión de empleados o clientes,
                gestión de facturas, almacen, entre otros.
                <br/>
                <strong>Ya tienes un proyecto en mente</strong> y, ¿te falta la mano de obra? o, ¿no tienes bien claro que proyecto
                se adapta mejor a tu negocio?
                <br/>
                No te preocupes, para eso cuentas conmigo.
              </p>

              <div className="mt-12">
                <Link
                  smooth={true}
                  to="contactame"
                  className="get-started cursor text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contáctame
                </Link>
              </div>

            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px forma-img"
          src={require("../../assets/img/zm.jpg")}
          alt="..."
          data-aos="flip-left"
        />

      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                <img
                  alt="..."
                  src={require("../../assets/img/zm-engineer.jpg")}
                  className="w-full align-middle rounded-t-lg"

                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 data-aos="fade-up" className="text-xl font-bold text-white">
                    Hola, soy
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Ziuling Macayo López, Ingeniero de Sistemas, Jóven Profesional que entiende
                    la importancia de abordar cada trabajo de manera
                    integral y cree, que la innovación e inclusión de la tecnología en las empresas
                    se traduce en mejores resultados de negocio.
                    <br/>
                    <br/>
                    Con 3 años de experiencia en el
                    mundo de desarrollo de software usando tecnologías que permitirán que tu proyecto
                    sea robusto, seguro y además muy bien documentado.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
             <h3 className="text-3xl mb-2 font-semibold leading-normal" data-aos="fade-up-left">
                Tu proyecto con buen diseño, adaptado a tu necesidad y documentado
              </h3>

              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div data-aos="flip-left" className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-grip-horizontal"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold" data-aos="flip-right">Interfaces</h6>
                      <p className="mb-4 text-gray-600">
                      Ventanas gráficas muy amigables para tu proyecto, con las que el usuario se sentirá
                      muy cómodo al interactuar con ellas.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div data-aos="flip-right" className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-html5"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold" data-aos="flip-left">
                        HTML Y CSS
                      </h6>
                      <p className="mb-4 text-gray-600">Código para maquetar y dar estilo a tu proyecto.
                      Contestará a preguntas del tipo: ¿Cómo hago el texto, rojo o negro? ¿grande o pequeño?
                      ¿la imagen cuadrada o redonda? ¿El contenido a la derecha o a la izquierda?
                      </p>
                    </div>
                  </div>

                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0  mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div data-aos="flip-left" className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold" data-aos="flip-right">
                        Robusto y Seguro
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Un proyecto con capacidad para enfrentar errores mientras se ejecuta y evitar pérdida o
                        acceso no deseado a tu información.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div data-aos="flip-right" className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fab fa-js"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold" data-aos="flip-left">
                        JavaScript
                      </h6>
                      <p className="mb-4 text-gray-600">
                      Se usa como complemento de HTML y CSS, contando con componentes muy dinámicos,
                      y amigables para el usuario.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                    <div data-aos="fade-right" className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/requerimientos1.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Análisis de software
                      </p>
                    </div>
                    <div data-aos="fade-left" className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/sitio.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Sitio web
                      </p>
                    </div>

                    <div data-aos="fade-right" className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/app.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Aplicación móvil
                      </p>
                    </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <div data-aos="fade-left" className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/intranet.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Intranet, CRM
                      </p>
                    </div>

                    <div data-aos="fade-right" className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/mantenimiento.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Mantenimiento
                      </p>
                    </div>

                    <div data-aos="fade-left" className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/documentation.jpg')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Documentación Técnica y de Usuario
                      </p>
                    </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-project-diagram text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Mis servicios
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Aquí estoy, para ti, para ayudarte y atender a todas tus necesidades,
                en caso de que no cuentes con un <strong>Sistema digitalizado (Sistema de información, Intranet, Extranet, CRM)</strong>,
                puedo desarrollartelo con un análisis previo y captación de requerimientos para que de ésta manera
                pódamos obtener un mínimo producto viable excelente, y
                posteriormente tu producto final con pruebas que garantizen su buen funcionamiento.
                Ahora, si ya tienes un sistema en marcha, puedo mantenertelo o
                añadir nuevas funcionalidades, teniendo en cuenta que mi especialidad es el lenguaje de programación PHP.
                <br/>
                <br/>
                <strong>¿Una Página web? (informativo y de contacto, corporativo, tienda online, y todo lo que se te
                  ocurra) </strong>
                Con buena estrategia de Posicionamiento SEO, de contenidos…
                Conseguirás que poco a poco (con tiempo, paciencia e inversión) escales resultados en las búsquedas de Google
                por las palabras claves designadas y trabajadas.
                <br/>
                <br/>
                <Link
                  smooth={true}
                  to="app"
                >
                <strong >¿Una Aplicación móvil? <span style={{ cursor: 'pointer' }}> Clic aquí </span> </strong>
                </Link>
              </p>

            </div>
          </div>
        </div>

        <Element name="app">
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-12/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-mobile-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold" data-aos="fade-down">
                  <strong>¡Te lo tengo!</strong>
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Con una aplicación móvil podrás ofrecer beneficios adicionales a tus clientes.
                  <br/>
                  Un reciente estudio realizado por IAB Spain  dice que el 97% de la población española
                  internauta tiene un Smartphone, esto significa que hay unas 29.440.000 personas que
                  tienen acceso a aplicaciones móviles.
                  <br/>
                  <br/>
                  Entonces, ¿tú te quedarías atrás? ¿no verdad?
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Las aplicaciones móviles las desarrollo multi-plataforma, usando el framework Ionic.
                  Para ofrecer la app tanto en plataformas como Play Store o App Store es necesario comprar una licencia,
                  por lo que te explicaría con mas detalle a la hora de presupuestar.
                  <br/>
                  <br/>
                  Si te decides a encargar tu propia app, ésta debe estar en consonancia con los valores de tu empresa,
                  debe ser segura, amigable o intuitiva, cuantos menos clics tenga para que tu cliente encuentre lo que busca, mejor.
                  Todo esto y muchas cosas más que debes tener en cuenta en su desarrollo.
                  <br/>
                  Invertir en la experiencia del usuario final es una de las mejores apuestas que puedes hacer en tu empresa.
                </p>

              </div>
            </div>
          </div>
        </div>
        </Element>

      </section>

        <section className="bg-gray-700 overflow-hidden">
            <div className="container mx-auto pb-64">
              <Element name="contactame">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                        <div className="flex-auto p-5 lg:p-10">
                          <h4 data-aos="fade-down" className="text-2xl font-semibold">
                            ¿Tienes un proyecto en mente?
                          </h4>
                          <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Detállame lo que quieres sin ningún compromiso y me comunicaré contigo en 24 horas.
                          </p>

                          <FormContacto />

                        </div>
                    </div>
                  </div>
                </div>
              </Element>
            </div>
        </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <Carousel itemsToShow={1}>
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="font-semibold text-3xl">
                  ¿Qué dicen de mí?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                  "Mediante este comunicado queremos reafirmar nuevamente la grata experiencia que ha
                  sido culminar este proyecto con tan dedicado profesional y con quién esperamos poder
                  seguir trabajando en el futuro."
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="files/testimonio.pdf"
                    target="_blank"
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <span>Comunicado</span>
                  </a>
                  <a
                    href="https://ofirchile.com/"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Ofir Chile
                  </a>

                </div>
                <div className="text-center mt-16"></div>
              </div>
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="font-semibold text-3xl">
                  ¿Qué dicen de mí?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                  "Para IT7 Lounge Club el trabajo realizado por ZM Engineer ha sido fundamental para el desarrollo de nuestra actividad económica, excelente profesional y muy atenta en todo momento."
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.it7loungeclub.mobile"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    It7 Lounge Club
                  </a>
                </div>
                <div className="text-center mt-16"></div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index;
