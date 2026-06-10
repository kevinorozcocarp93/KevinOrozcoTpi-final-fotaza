# 📸 Fotaza 2 - Red Social de Fotografías

Le dejo 2 perfiles para poder entrar y probar la app, aunque puede crear su propia cuenta registrandose.

Cuenta1: kevin@mail.com
contraseña: 1234

Cuenta2: juan@mail.com
contraseña: 12345

## 📖 Descripción

Fotaza 2 es una aplicación web desarrollada con Node.js, Express, Sequelize, PostgreSQL y Pug que permite a los usuarios compartir publicaciones con imágenes, interactuar mediante comentarios, likes, valoraciones y seguir a otros usuarios.

El proyecto fue desarrollado como Trabajo Práctico Integrador aplicando conceptos de desarrollo web, bases de datos relacionales, patrones MVC y gestión de usuarios.

---

# 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* Pug
* Bootstrap 5
* Express Session
* Multer
* Dotenv
* Git y GitHub

---

# 📂 Estructura del proyecto

```text
controllers/
middlewares/
migrations/
models/
public/
  uploads/
routes/
views/
config/
```

---

# 👤 Gestión de usuarios

## Registro

Los usuarios pueden registrarse proporcionando:

* Nombre
* Email
* Contraseña

La contraseña se almacena de forma segura utilizando hash.

## Inicio de sesión

Los usuarios autenticados pueden acceder a todas las funcionalidades de la plataforma mediante sesiones.

## Perfil de usuario

Cada usuario posee:

* Foto de perfil
* Nombre
* Email
* Biografía
* Estadísticas

Las estadísticas muestran:

* Cantidad de publicaciones
* Cantidad de comentarios
* Cantidad de likes realizados

---

# 🖼️ Publicaciones

Cada usuario puede:

* Crear publicaciones
* Editarlas
* Eliminarlas
* Visualizarlas en el Feed General

Cada publicación contiene:

* Título
* Descripción
* Imagen
* Fecha de publicación

Las imágenes son almacenadas utilizando Multer dentro de:

```text
public/uploads
```

---

# ❤️ Sistema de Likes

Los usuarios pueden dar "Me gusta" a las publicaciones.

Características:

* Un usuario solo puede dar un like por publicación.
* Se muestra la cantidad total de likes.

---

# 💬 Sistema de Comentarios

Los usuarios pueden comentar publicaciones.

Cada comentario almacena:

* Usuario que comenta
* Contenido
* Publicación asociada

Los comentarios aparecen debajo de cada publicación.

---

# ⭐ Sistema de Valoraciones

Se implementó un sistema de puntuación de publicaciones.

Características:

* Valoración de 1 a 5 estrellas.
* Cada usuario puede modificar su valoración.
* Se calcula automáticamente el promedio.
* Se muestra la cantidad total de votos.

Ejemplo:

```text
⭐⭐⭐⭐☆ 4.3/5 (10 votos)
```

---

# 👥 Sistema de Seguidores

Los usuarios pueden seguir y dejar de seguir a otros usuarios.

Se muestran:

* Cantidad de seguidores
* Cantidad de usuarios seguidos

---

# 🔔 Sistema de Notificaciones

Se desarrolló un sistema de notificaciones automáticas.

Se generan notificaciones cuando:

* Un usuario comienza a seguir a otro.
* Un usuario comenta una publicación.
* Un usuario da like a una publicación.

Las notificaciones se almacenan en la base de datos y pueden visualizarse desde el menú principal.

---

# 🔎 Sistema de Búsqueda

Se agregó un buscador global en el Navbar.

Permite buscar:

* Usuarios por nombre.
* Publicaciones por título.

Resultados mostrados en una página específica de búsqueda.

---

# 🎨 Mejoras de interfaz

Se realizaron varias mejoras visuales:

* Navbar fijo.
* Perfil con fotografía.
* Estadísticas visuales.
* Feed organizado.
* Diseño responsive mediante Bootstrap.
* Eliminación de botones redundantes.
* Integración del buscador global.

---

# 🔐 Seguridad

Se implementó:

* Middleware de autenticación.
* Protección de rutas privadas.
* Gestión de sesiones mediante Express Session.
* Hash de contraseñas.

---

# 🛠 Problemas encontrados durante el desarrollo

## 1. Problemas de indentación en Pug

Durante el desarrollo aparecieron múltiples errores relacionados con:

```text
unexpected token "indent"
```

La solución consistió en revisar cuidadosamente la indentación y respetar la estructura jerárquica de Pug.

---

## 2. Problemas con rutas inexistentes

Se presentó el error:

```text
Cannot find module './routes/notificationRoutes'
```

La solución fue crear correctamente el archivo de rutas y registrarlo en app.js.

---

## 3. Problemas con variables de sesión

Al actualizar el perfil, algunos cambios no se reflejaban inmediatamente.

La solución fue actualizar los datos de la sesión luego de modificar el usuario.

---

## 4. Problemas con Sequelize y atributos calculados

El promedio de valoraciones inicialmente no se mostraba correctamente.

Se solucionó agregando atributos personalizados a cada publicación antes de renderizar la vista.

---

## 5. Problemas con subida de imágenes

Inicialmente las imágenes se guardaban correctamente pero no se visualizaban.

La solución consistió en configurar correctamente:

```text
public/uploads
```

y utilizar:

```js
app.use(express.static(...))
```

---

# ▶️ Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Configurar variables de entorno:

```env
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
SESSION_SECRET=
```

Ejecutar migraciones:

```bash
npx sequelize-cli db:migrate
```

Iniciar servidor:

```bash
npm start
```

o

```bash
nodemon app.js
```

---

# 👨‍💻 Autor

Proyecto desarrollado por Kevin Orozco como Trabajo Práctico Integrador para la materia de Desarrollo Web.

---

# 📌 Estado actual

✅ Registro de usuarios

✅ Login y sesiones

✅ Perfil editable

✅ Fotos de perfil

✅ Publicaciones con imágenes

✅ Comentarios

✅ Likes

✅ Valoraciones con estrellas

✅ Seguidores

✅ Notificaciones

✅ Buscador global

✅ Feed General

✅ Diseño responsive

✅ Integración con PostgreSQL
