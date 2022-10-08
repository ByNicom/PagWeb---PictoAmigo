
<template>  
   <div id="app" class="app">
      <div class="img-container">
            <img src="\src\assets\images\main.png" alt="">
        </div>
        <div class="form" @submit.prevent="HandleSubmit">
            <p class="label">Iniciar sesion</p>
            <div class="input-container">
                <custom-input
                v-for="(input, i) in inputs"
                :key="i"
                v-model="input.value"
                :type="input.type"
                :label="input.label"/>
            </div>
            <p class="space"><a href="#">¿Olvidaste tu contraseña?</a></p>
            <button class="login-button">Ingresar</button>
            <p><a href="#">Registrate aca!!</a></p>
        </div>
    </div>
</template>

<script>

    </script>