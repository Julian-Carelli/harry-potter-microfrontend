# harry-potter-microfrontend

Un proyecto microfrontend que trabaja con la API de Harry Potter

Link de la API: https://hp-api.onrender.com/

### Pre-requisitos 📋

```
node -v >=v18
docker (opcional)

Tener estos puertos libres:
  - 3000 ==> aggregated-microfrontends-hub (host)
  - 3005 ==> rick-and-morty-microfrontend (microfrontend)
  - 3006 ==> harry-potter-microfrontend (microfrontend)
```

### Instalación 🔧

#### aggregated-microfrontends-hub (HOST)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Entrar a la carpeta:

```
cd aggregated-microfrontends-hub
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Entrar a la carpeta:

```
cd rick-and-morty-microfrontend 
```

instalar todas las dependencias del proyecto:

```
npm i
```

Buildear la aplicacion:

```
npm run build (IMPORTANTE)
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Entrar a la carpeta:

```
cd harry-potter-microfrontend
```

instalar todas las dependencias del proyecto:

```
npm i
```

Buildear la aplicacion:

```
npm run build (IMPORTANTE)
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

Cuando todos los ambientes esten corriendo, se deberia acceder a http://localhost:3000 para poder ver la aplicacion completa

------------------------------------------------------


### Instalación con docker (SE REQUIRE TENER INSTALADO DOCKER DE FORMA GLOBAL)

#### aggregated-microfrontends-hub (HOST)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Entrar a la carpeta:

```
cd aggregated-microfrontends-hub
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it aggregated-microfrontends-hub-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Entrar a la carpeta:

```
cd rick-and-morty-microfrontend
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it rick-and-morty-microfrontend-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Entrar a la carpeta:

```
cd harry-potter-microfrontend
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it harry-potter-microfrontend-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

Cuando todos los ambientes esten corriendo, se deberia acceder a http://localhost:3000 para poder ver la aplicacion completa

------------------------------------------------------

Para correr los tests:

```
npm run test
```