/*eslint-disable*/
import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Element, Link } from 'react-scroll'
import Carousel from 'react-elastic-carousel'

import IndexNavbar from "../components/Navbars/IndexNavbar.js"
import Footer from "../components/Footers/Footer.js"
import FormContacto from "../components/Forms/FormContacto.js"

export default function Index() {

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
               Rétame con tu imaginación.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Cuentame que proyecto tienes en mente, y te indicaré cual sería el mejor desarrollo tecnológico después de un análisis bajo metodología de estudio de tu sistema actual sea digitalizado o aún no, de acuerdo a tus necesidades y según los requerimientos obtenidos tanto funcionales como no funcionales.
              <br/>
              Tal vez, ¿Un sistema a medida? ¿una aplicación web o móvil? ¿Tienes una tienda y te gustaría comenzar a vender online y aumentar tus ingresos? o algún otro?
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

        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px forma-img"
            src={require("../../assets/img/zm.jpg")}
            alt="..."
          />
        </ReactCSSTransitionGroup>

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
                  <h4 className="text-xl font-bold text-white">
                    Hola, soy
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Ziuling Macayo López, Ingeniera de Sistemas, Jóven Profesional que entiende la importancia de abordar cada trabajo de manera
                    integral y cree, que la innovación e inclusión de la tecnología en las empresas se traduce en mejores resultados de negocio. Con 3 años de experiencia en el
                    mundo de desarrollo de software usando tecnologías que permitirá que su proyecto sea robusto,
                    seguro y además muy bien documentado.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
             <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Tu proyecto con buen diseño, muy dinámico y documentado
              </h3>

              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS
                      </h6>
                      <p className="mb-4 text-gray-600">Código para dar estilo a tu proyecto.
                      Contestará a preguntas del tipo: ¿Cómo hago el texto, rojo o negro?
                      ¿Cómo hago que el contenido se muestre en tal y tal lugar de la pantalla?
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Interfaces</h6>
                      <p className="mb-4 text-gray-600">
                      Ventanas gráficas muy amigables para tu proyecto, con las que se interactúa.
                      </p>
                    </div>
                  </div>

                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0  mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          JavaScript
                        </h6>
                        <p className="mb-4 text-gray-600">
                        Se usa como complemento de HTML y CSS, contando con componentes muy dinámicos, para Frameworks como React, Vue y Angular.
                        </p>
                      </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentación
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Un bitácora a la mano, desde el inicio hasta que finaliza tu proyecto.
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
                  <a
                    href="https://laravel.com/"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require('../../assets/img/laravel.png')}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Laravel
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://es.reactjs.org/"
                    target="_blank"
                  >
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://ionicframework.com/"
                    target="_blank"
                  >
                    <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://ionicframework.com/img/meta/logo.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Ionic
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://jquery.com/"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="data:image/png;base64,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"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        jQuery
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://angular.io/"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                  >
                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Las mejores tecnologías para tu proyecto
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Para crear una gran experiencia de usuario con interfaces amigables, se necesitan
                de algunos componentes que requieren JavaScript,
                y para ello el uso de tecnologías como React, jQuery, Angular, o Vue.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Creando un conjunto de componentes que son dinámicos y dependiendo de tus necesidades.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alertas
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Listas desplegables
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menú
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Ventanas Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navegadores
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pestañas
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Información sobre herramientas
                </span>
              </div>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Y para que tu sistema sea seguro y robusto, tenemos Laravel.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Documentación completa
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  La importancia de la documentación para desarrolladores radica en el hecho de que la primera
                  contiene información sobre las operaciones del sistema de software.
                  Esta información posibilita la reproducción del software o su adaptación para mantenimiento.
                  Dicha información podría perderse si no se documenta, ya que los desarrolladores van y vienen.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Los manuales de usuario final facilitan la interacción de dicho usuario con la computadora.
                  Un manual de capacitación es un ejemplo de un manual orientado al usuario.
                  Reduce el tiempo de aprendizaje para el uso productivo del software,
                  ahorrando al usuario final muchísimo dinero. Los documentos del usuario final
                  también pueden ser un manual de referencia, que detalle el funcionamiento del sistema,
                  o una guía para administradores de sistema, que detalle la forma de operar y
                  dar mantenimiento al sistema.
                </p>

              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("../../assets/img/documentacion-software.png")}
              />
            </div>
          </div>
        </div>

      </section>

      <section className="bg-gray-700 overflow-hidden">
        <Element name="contactame">
          <div className="container mx-auto pb-64">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      ¿Tienes un proyecto en mente?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Detállame lo que quieres y me comunicaré contigo en 24 horas.
                    </p>

                    <FormContacto />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
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
