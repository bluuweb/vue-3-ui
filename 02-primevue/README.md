# Fundamentos

- [PrimeVue](https://primefaces.org/primevue/)

Vue UI Component Library: Biblioteca de componentes de interfaz de usuario de Vue potente pero fácil de usar, versátil y de alto rendimiento para ayudarlo a crear interfaces de usuario impresionantes.

- Soporte con Vue 3 Composition API

## Setup

Cree un proyecto con vue CLI

```
vue create prime-vue-1
```

Instale:

```
npm install primevue@^3.3.5 --save
npm install primeicons --save
npm install primeflex --save
```

main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/nova-vue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(router).mount("#app");
```

## Ejemplo

- [card doc](https://primefaces.org/primevue/showcase/#/card)

App.vue

```vue
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap");
body {
  font-family: "Montserrat", sans-serif;
}
</style>
```

About.vue

```vue
<template>
  <div>
    <h1>This is an about page</h1>
    <div class="p-row">
      <div class="p-col-4">
        <Card>
          <template #title> Card Title </template>
          <template #content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            consequatur maxime, laborum nulla at vitae enim dolorum eius soluta,
            atque autem culpa doloremque necessitatibus tempora, a quibusdam
            provident dicta assumenda.
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary p-ml-2"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  components: { Card, Button },
  setup() {},
};
</script>
```
