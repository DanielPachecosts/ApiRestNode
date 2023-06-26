const description =
  "API Node.js Express y MongoDB aplicando los principios de la Clean Architecture. Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) de usuarios, además de autenticación tanto local como a través de Facebook. Las sesiones se gestionan utilizando JSON Web Tokens (JWT). La aplicación sigue una estructura modularizada con capas separadas (Infrastructure, application, Domain) lo que facilita el mantenimiento, la prueba y la escalabilidad de la API.";

const message = {
  description: description,
  endpoints: [
    {
      method: "POST",
      path: "/api/v1/auth/login",
      description: "Inicia sesión de un usuario.",
      request: {
        parameters: [
          {
            name: "email",
            type: "string",
            description: "Formato de correo electrónico válido",
          },
          {
            name: "password",
            type: "string",
            description: "Mínimo 6 caracteres",
          },
        ],
        response: {
          type: "string",
          description: "Retorna el token de autenticación",
        },
      },
    },
    {
      method: "GET",
      path: "/api/v1/auth/login-facebook",
      description: "Inicia sesión utilizando la autenticación de Facebook.",
      response: { type: "object", description: "Retorna datos del usuario" },
    },
    {
      method: "POST",
      path: "/api/v1/users",
      description: "Crea un nuevo usuario.",
      request: {
        parameters: [
          { name: "name", type: "string", description: "Mínimo 3 caracteres" },
          {
            name: "email",
            type: "string",
            description: "Formato de correo electrónico válido",
          },
          {
            name: "password",
            type: "string",
            description: "Mínimo 6 caracteres",
          },
        ],
        response: { type: "object", description: "Retorna el usuario creado" },
      },
    },
    {
      method: "GET",
      path: "/api/v1/users",
      description: "Obtiene todos los usuarios.",
      auth: true,
      response: { type: "array", description: "Retorna una lista de usuarios" },
    },
    {
      method: "GET",
      path: "/api/v1/users/current",
      description: "Obtiene el usuario actualmente autenticado.",
      auth: true,
      response: {
        type: "object",
        description: "Retorna los datos del usuario autenticado",
      },
    },
    {
      method: "PUT",
      path: "/api/v1/users",
      description: "Actualiza los datos del usuario autenticado.",
      auth: true,
      request: {
        parameters: [
          {
            name: "name",
            type: "string",
            description: "Mínimo 3 caracteres (opcional)",
          },
          {
            name: "email",
            type: "string",
            description: "Formato de correo electrónico válido (opcional)",
          },
          {
            name: "password",
            type: "string",
            description: "Mínimo 6 caracteres (opcional)",
          },
        ],
        response: {
          type: "object",
          description: "Retorna el usuario actualizado",
        },
      },
    },
    {
      method: "DELETE",
      path: "/api/v1/users",
      description: "Elimina un usuario.",
      auth: true,
      response: {
        type: "boolean",
        description: "Retorna true si se eliminó el usuario correctamente",
      },
    },
  ],
};

module.exports = message;