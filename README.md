
# UniversalRestaurantApp

#

## Colaboradores

DANIEL EDUARDO DORADO - Desarrollador Backend y Frontend

YEISON DAVID MOSQUERA - Desarrollador Backend

RENE JALVIN NARVAEZ - Desarrollador Backend

CARLOS ALBEIRO RENDON - Desarrollador Frontend, Product Owner

BRAYAN STIVEN GARCIA - Desarrollador Frontend

#

## Contexto de la app

UniversalRestaurantApp es un proyecto de clase de la asignatura Proyecto 1 en el PIS de Unicauca. Este proyecto de software tiene como objetivo simular un trabajo real al desarrollar un proyecto desde trabajar en equipo, trabajar con repositorios y trabajar con entornos en producción. Como todo proyecto real se busca aplicar los conceptos de arquitectura de software y aplicar las mejores prácticas de programación, de arquitecturas y de diseño de software.

Cabe resaltar que las metodologías agiles se están usando mucho en proyectos reales, por ello se ha decidido desarrollar el proyecto con SCRUM como metodología de gestión del proyecto y hemos utilizado una herramienta en línea como Gira para que nos ayudara con la gestión.

El proyecto de clase desarrollado tiene la siguiente descripción: Investigadores, empresas e innovadores en todo el mundo están poniendo su granito de arena para tratar de paliar los efectos de esta crisis sanitaria global gracias a la tecnología. Desde aplicaciones para recopilar datos de la expansión del virus, hasta ventiladores impresos en 3D para los hospitales, estos son algunos de los numerosos proyectos tecnológicos que han surgido para combatir el coronavirus. El proyecto que se abordará en este semestre busca desarrollar una aplicación que permita a los usuarios de la ciudad de Popayán hacer pedidos de almuerzos a domicilio. Esto ayudará a disminuir el contacto entre personas.

La interacción básica se muestra a continuación:

1. El administrador de cada restaurante registra los diferentes platos del menú de la semana.

2. El usuario ingresa a la aplicación y visualiza los distintos restaurantes de la ciudad, su ubicación, dirección y tipos de almuerzos.

3. El usuario elige el restaurante de su preferencia.

4. El sistema le muestra los platos del día, platos especiales y costos. 5. El usuario elijen las órdenes que desea y las cantidades de cada una y hace el pedido.

6. El sistema informa el tiempo estimado de la entrega del pedido (utilizando un algoritmo que tiene en cuenta la ubicación del restaurante y de la casa). El usuario puede pagar en línea o pagar personalmente cuando le llegue el pedido.

7. El restaurante recibe el pedido en línea, prepara el producto y despacha el pedido con un mensajero.

8. El mensajero entrega el pedido y el usuario lo recibe. Si es el caso, el mensajero recibe el dinero.

9. El mensajero actualiza en el sistema que el pedido fue entregado.

La aplicación permitirá llevar el control de los pedidos, de las entregas, el dinero recaudado en cada día, la gestión de los platos del restaurante y reportes estadísticos semanales y mensuales que determinen el comportamiento por días de las ventas.

Y se plantearon algunas condiciones arquitecturales de inicio: La aplicación a desarrollar es una sola y permitirá llevar la gestión de los pedidos de varios restaurantes de la ciudad de Popayán. A este concepto se le llama Multitenencia. Esto implica que se debe plantear una arquitectura de software que soporte la escalabilidad (en el tiempo se aumentarán los restaurantes y la cantidad de usuarios) y la seguridad de los datos (el sistema, a pesar que es uno sólo, debe aislar la información de cada restaurante, como si fueran aplicaciones separadas; importante definir mecanismos de autenticación y autorización seguros). Además, la aplicación debe ser fácil de usar (usabilidad) para cada uno de los roles: usuarios del restaurante, mensajero, gerente, funcionarios del restaurante. Otra implicación de la multitenencia es decidir la arquitectura de la base de datos. Se debe analizar y decidir si se va a utilizar una sola base de datos para soportar todos los clientes (restaurantes), o una base de datos por cliente, o un modelo híbrido (una base de datos por cada cliente grande, y una base de datos compartida para los clientes pequeños).

Además, la aplicación debe ser fácil de modificar (modificabilidad) porque en el tiempo van a aparecer nuevos requerimientos (por ejemplo, ampliar el servicio al despacho de desayunos y cenas). Es imprescindible aislar la lógica del negocio, corazón de la aplicación, de la tecnología utilizada para la implementación, de tal forma que los cambios tecnológicos no afecten al dominio del sistema. Para ello se recomienda (no es obligatorio) utilizar una arquitectura hexagonal.

A nivel arquitectural, teniendo en cuenta los requisitos no funcionales (escalabilidad, seguridad, modificabilidad y usabilidad), se deben tomar las siguientes decisiones:

1. Tipo de aplicación. El tipo de aplicación elegida debe está justificada adecuadamente acorde a los requisitos funcionales y no funcionales. No siempre lo más adecuado son las aplicaciones web. Los tipos de aplicación son: aplicación enriquecida de escritorio, web, móvil nativo, móvil web, móvil híbrido, aplicación de Internet enriquecida y de servicios. Los arquitectos deben tomar las decisiones correctas para utilizar este tipo de aplicaciones.

2. Estilo arquitectónico y patrones de diseño. El estilo arquitectónico y los patrones de diseño debe estar justificado adecuadamente acorde a los requisitos funcionales y no funcionales. Se debe elegir si la aplicación es en capas, cliente/servidor, por servicios, móvil híbrido u orientado a móvil híbrido eventos (o combinaciones de éstas). Se deben elegir adecuadamente los patrones de diseño que favorezcan la multitenencia de aplicación. Podrían ser útiles patrones como: métodos de fábrica, adapter, estrategy y template. Lo anterior debido a que, con el tiempo, la aplicación debe soportar requerimientos específicos para cada restaurante (por ejemplo, maneras propias de facturar, campos específicos a utilizar en el sistema, entre otros).

3. Tecnología a utilizar. La tecnología elegida debe responder las preguntas: ¿Qué tecnologías ayudan a implementar los estilos arquitecturales seleccionados? ¿Qué tecnologías ayudan a implementar el tipo de aplicación seleccionada? ¿Qué tecnologías ayudan a cumplir con los requisitos no funcionales especificados? Las tecnologías backend, frontend y de bases de datos deben ser elegidas acorde a las anteriores preguntas. Cada equipo de trabajo puede elegir su propia tecnología.

El código fuente de la API se puede ver desde el Repositorio del BACKEND: https://gitlab.com/thebar70/restaurant 

La docuemntación de la API se encunetra desplegada en: http://54.80.11.131/api/documentation

Con la documentación podemos hacer uso de la API adecuadamente.

Repositorio del FROTEND consumidora de servicios desde: https://github.com/CarlosARendon/FRONT_UniversalRestaurant

Link de la aplicación:
http://universal-restaurant.endurance-software.com.co/

La documentación de la app se puede ver en: 
http://universalrestaurantblog.simplesite.com/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
