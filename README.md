

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Games And Submodules
The games are inside Github submodules, to run them it is necessary to clone them:

cd repositorio-principal
git submodule update --init --recursive

git submodule update --init --recursive: This command clones all submodules, initializes any submodules inside other submodules (if any) and verifies the correct commit version for each submodule.

### Repositorios:
Clone a submodule: 
git submodule add git submodule add https://github.com/usuario/repositorio-juego.git game-3 

in the carpet of the submodule

# Configuración de los Datos de Los Juegos 
  // in src/app/dashboard-page.js
  const gameData = {
    juego1: {
      imageSrc: "img/games/arcade/game-1.png",
      titleSrc: "img/games/title/game-1.svg",
      description: "¡Defiende el Centro a toda costa! Acumula puntos para mejorar tu ataque, defensa y velocidad. Cada ola de bacterias será más desafiante, ¡prepárate para detenerlas a todas! ¿Tienes lo necesario para proteger a los pacientes y salvar el día?! ¡Descúbrelo ahora!",
    },
    juego2: {
      imageSrc: "img/games/arcade/game-2.png",
      titleSrc: "img/games/title/game-2.svg",
      description: "Esta es la descripcion de Simi Run",
    },
    juego3: {
      imageSrc: "img/games/arcade/game-3.png",
      titleSrc: "img/games/title/game-3.svg",
      description: "Esta es la descripcion de Simi Ninja",
    },
    juego4: {
      imageSrc: "img/games/arcade/game-4.png",
      titleSrc: "img/games/title/game-4.svg",
      description: "Esta es la descripción de SimiSpace",
    },
    juego5: {
      imageSrc: "img/games/arcade/game-4.png",
      titleSrc: "img/games/title/game-4.svg",
      description: "Esta es la descripción de Globito Survivor",
    },
  };


Game 3: https://github.com/IvanMarte2403/Fruit-Ninja-Game---For-DoctorSimi


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

