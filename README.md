# Portafolio · Iván Palomino Fernández

Web de presentación personal de un desarrollador backend: quién soy, qué he hecho y cómo contactar conmigo.

🔗 **Demo en vivo:** https://portafolio-ivan-palomino-fernandez.netlify.app


---

## ✨ Qué incluye

- **Inicio**: presentación con foto y acceso directo a contacto.
- **Sobre mí**: trayectoria, formación (DAM + SMR) y datos destacados.
- **Proyectos**: tarjetas con descripción, tecnologías y enlaces al repositorio.
- **Skills**: tecnologías agrupadas por categorías (Backend, Frontend, Bases de datos, Herramientas).
- **Contacto**: formulario con validación de campos.
- **Diseño responsive**: menú hamburguesa en móvil y tema oscuro.

## 🧰 Tecnologías

| Parte | Tecnologías |
|---|---|
| Frontend | React 19, TypeScript, Vite, CSS, react-icons |
| Backend (opcional, en local) | ASP.NET Core (Minimal API), Entity Framework Core, PostgreSQL, MailKit |
| Base de datos | PostgreSQL (Neon) |
| Despliegue | Netlify (frontend) |
| Formulario de contacto | Web3Forms |

## 🏗️ Arquitectura

El proyecto es un monorepo con dos partes:

```
Portafolio/
├── frontend/          # SPA en React + TypeScript (desplegada en Netlify)
│   ├── public/
│   └── src/
│       ├── assets/
│       └── components/
│           ├── css/   # Estilos por componente
│           ├── Navbar.tsx
│           ├── Home.tsx
│           ├── AboutMe.tsx
│           ├── Projects.tsx
│           ├── Habilities.tsx
│           ├── Contact.tsx
│           └── Footer.tsx
└── backend/           # API en ASP.NET Core (se ejecuta en local)
    ├── Data/          # DbContext de EF Core
    ├── Models/        # Entidades
    ├── Services/      # Envío de email con MailKit
    └── Program.cs     # Endpoints y configuración
```

**Decisiones de diseño**

- La navegación entre secciones se controla con estado de React (`useState`), sin librería de rutas: la web es de una sola pantalla y el menú cambia la sección visible.
- La versión desplegada es **100 % frontend**: los proyectos se definen en el propio código y el formulario envía los mensajes a través de Web3Forms, así no depende de ningún servidor propio.
- El backend se mantiene en el repositorio como API funcional (proyectos desde PostgreSQL y envío de email con MailKit) y puede ejecutarse en local.

## 📬 Contacto

- **GitLab:** https://gitlab.com/ipalominof3
- **LinkedIn:** https://www.linkedin.com/in/iv%C3%A1n-palomino-fern%C3%A1ndez-8344353a3/

---

Hecho por **Iván Palomino Fernández** · Terrassa, Barcelona