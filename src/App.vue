<template>
  <div class="home-view">
  <nav>
      <a href="Login.vue">Iniciar sesion</a>
    </nav>
    <div class="container">
        <div class="menu">
            <div class="logo">
                <img src="..\src\assets\logo.png" alt="">
            </div>
            <div class="options-container">
                <div class="option">
                    <a href="#">
                        <img src="..\src\assets\horario.png" alt="">
                    <p>Horario</p>
                    </a>
                </div>
                <div class="option">
                    <a href="#">
                        <img src="..\src\assets\pictogramas.png" alt="">
                        <p>Pictogramas</p>
                    </a>
                </div>
                <div class="option">
                    <a href="#">
                        <img src="..\src\assets\juegos.png" alt="">
                        <p>juegos</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="pictures">
            <div class="">
                <img src="..\src\assets\niños1.png" alt=""> 
            </div>
            <div class="">
                <img src="..\src\assets\niños2.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default{

  name: "HomeView"
}

</script>


<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            background: rgb(173,250,243);
            background: linear-gradient(126deg, rgba(173,250,243,1) 8%, rgba(17,238,150,1) 87%);
        }

        nav {
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: flex-end;
            padding: 5px 20px;
            background-color: #a6dbf4;
        } 

        nav a {
            height: fit-content;
            width: fit-content;
            color: white;
            background-color: blueviolet;
            text-decoration: none;
            padding: 8px 15px;
            border: 3px solid darkblue;
            border-radius: 30px;
        }

        .container {
            width: 100%;
            max-width: 1000px;
            height: 93vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }
        
        .menu {
            position: relative;
            padding: 50px 20px 30px 20px;
            width: 80%;
            background-color: grey;
            border: 3px dashed rgb(63, 60, 60);
            border-radius: 25px;
            margin: 50px 0;
        }

        .logo {
            display: flex;
            justify-content: center;
            position: absolute;
            top: -40px;
            left: calc(28%);
        }

        .options-container {
            display: flex;
            justify-content: space-around;
            color: black;
            font-size: 24px;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
        }

        .option a{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: black;
        }

        .options-container img {
            width: 75px;
            height: 75px;
        }

        .pictures {
            display: flex;
            height: 50%;
            width: 100%;
            justify-content: space-between;
            padding: 0 100px;
        }
    </style>
