### Colección de postman para el lector Zebra RFID ZIOTC

https://zebradevs.github.io/rfid-ziotc-docs/_downloads/9befffd338c6c2efa5cd13e14c6c8b7d/IoT%20Reader%20API%20Collection.postman_collection.json

Pasos para conectarse al lector RFID ZIOTC con Postman:

1. Descargar e instalar Postman: https://www.postman.com/downloads/
2. Descargar la colección de Postman
3. Importar la colección de Postman en Postman
4. Configurar el lector RFID ZIOTC
5. Configurar el entorno de Postman con la IP del lector RFID ZIOTC
6. Hacer un get (localRestLogin) para obtener el token usando autenticación básica con el usuario y contraseña del lector RFID ZIOTC
7. Hacer cualquier otra petición usando el token obtenido en el paso 6 como Bearer Token

Se puede usar este código en Tests de postman para obeter el token y guardarlo en una variable de entorno:

```javascript
// Parse the JSON response body
var responseData = pm.response.json();

// Extract the token from the response
var token = responseData.message;

// Check if the token exists
if (token) {
  // Set the token as an environment variable
  pm.environment.set("accessToken", token);
  console.log("Token set successfully");
} else {
  console.log("No token found in response");
}
```

Esta variable se puede usar como Bearer Token en las peticiones siguientes. Usandola en el header de la petición con el nombre Authorization y el valor Bearer {{accessToken}}

En el punto 4 es importante que el lector este configurado para que se pueda conectar a el, para esto se puede usar el siguiente código en el lector RFID ZIOTC:
