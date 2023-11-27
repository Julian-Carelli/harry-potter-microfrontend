# harry-potter-microfrontend

A microfrontend project that works with the Harry Potter API.

API Link: https://hp-api.onrender.com/

### Prerequisites 📋

```
node -v >=v18
docker (optional)

Have these ports available:
  - 3000 ==> aggregated-microfrontends-hub (host)
  - 3005 ==> rick-and-morty-microfrontend (microfrontend)
  - 3006 ==> harry-potter-microfrontend (microfrontend)
```

### Installation 🔧

#### aggregated-microfrontends-hub (HOST)

Clone project:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Enter the folder:

```
cd aggregated-microfrontends-hub
```

Install all project dependencies:

```
npm i
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Enter the folder:

```
cd rick-and-morty-microfrontend 
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANT)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Enter the folder:

```
cd harry-potter-microfrontend
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANT)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

When all environments are running, you should access http://localhost:3000 to see the complete application.

------------------------------------------------------


### Installation with Docker (DOCKER MUST BE INSTALLED GLOBALLY)

#### aggregated-microfrontends-hub (HOST)

Clone project:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Enter the folder:

```
cd aggregated-microfrontends-hub
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it aggregated-microfrontends-hub-container sh
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANT)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Enter the folder:

```
cd rick-and-morty-microfrontend
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it rick-and-morty-microfrontend-container sh
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANT)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Enter the folder:

```
cd harry-potter-microfrontend
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it harry-potter-microfrontend-container sh
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANT)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

When all environments are running, you should access http://localhost:3000 to see the complete application.

------------------------------------------------------

To run tests:

```
npm run test
```
