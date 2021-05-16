# Quasar

Cree sin esfuerzo interfaces de usuario Vue 3 de alto rendimiento y calidad en un tiempo récord.

- [https://next.quasar.dev](https://next.quasar.dev/)

## Características

- Vue JS 3
- Soporte para navegadores de escritorio y móviles (¡incluido iOS Safari!) Listo para usar
- SPA, SSR, PWA, aplicación móvil, aplicación de escritorio y extensión del navegador
- CLI propia
- Personalizable (CSS) y ampliable (JS)
- Si solo desea crear un sitio web, Quasar solo creará el código necesario para un sitio web, sin nada más. Lo mismo ocurre con los otros modos de construcción.

Puedes construir:

- SPA (aplicación de una sola página)
- SSR (aplicación renderizada del lado del servidor) (+ adquisición de cliente PWA opcional)
- PWA (aplicación web progresiva)
- BEX (extensión del navegador)
- Aplicaciones móviles (Android, iOS,…) a través de Cordova o Capacitor
- Aplicaciones de escritorio multiplataforma (usando Electron)

## Quasar CLI

- [installation](https://next.quasar.dev/quasar-cli/installation)

```
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

Primer proyecto

```
quasar create <folder_name> --branch next
```

:::warning
Actualmente npm tiene un error de compilación, por lo tanto se recomienda utilizar la configuración de yarn al momento de crear un nuevo proyecto.

Error compilación UI

- [Foro](https://www.gitmemory.com/issue/quasarframework/quasar/9092/830057188)

:::

```
quasar dev
```

## Layout

- [Construcción de maquetación](https://next.quasar.dev/layout/layout)

## Router

```js
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
```

## q-page

- [layout/page](https://next.quasar.dev/layout/page)

De forma predeterminada, su componente QPage tendrá una propiedad min-height CSS configurada para garantizar que el contenido llene la pantalla en todo momento, incluso cuando el contenido tenga solo unas pocas líneas.

```vue
<template>
  <q-page padding>
    <h1>About</h1>
  </q-page>
</template>
```

## Style

- [style/typography](https://next.quasar.dev/style/typography)
- [style/color-palette](https://next.quasar.dev/style/color-palette)

```vue
<template>
  <q-page padding>
    <h1 class="text-primary">About</h1>
    <h2 class="bg-secondary text-white">Lorem, ipsum dolor.</h2>
    <h3 class="text-deep-orange-6">Lorem, ipsum dolor.</h3>
  </q-page>
</template>
```

- [style/spacing](https://next.quasar.dev/style/spacing)

```html
<div class="q-mt-xl bg-warning q-pa-xl">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deleniti
    iusto eos sed repellat placeat modi eligendi eveniet quasi fuga aspernatur
    est atque facere, ducimus reiciendis debitis dolores libero minima!
  </p>
</div>
```

- [style/shadows](https://next.quasar.dev/style/shadows)

```html
<p class="shadow-1">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut commodi
  repellendus provident? Deleniti vel dolor neque soluta ratione quo. Eaque,
  aspernatur incidunt nihil officia cum quo ducimus et provident!
</p>
```

## Flex Grid

- [layout/grid/row](https://next.quasar.dev/layout/grid/row)

```html
<template>
  <q-page padding>
    <div class="row">
      <p class="col-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        hic tempora voluptas corrupti cumque dolorem maiores cupiditate non
        explicabo, saepe pariatur quae dicta adipisci a, officiis odit placeat
        vitae recusandae.
      </p>
    </div>
    <div class="row">
      <p class="col-12 col-sm-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
        ducimus sunt totam beatae inventore excepturi fugiat obcaecati ratione,
        deserunt, commodi nesciunt minus tenetur iure quasi ut! Iste hic rem
        non.
      </p>
      <p class="col-12 col-sm-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
        ducimus sunt totam beatae inventore excepturi fugiat obcaecati ratione,
        deserunt, commodi nesciunt minus tenetur iure quasi ut! Iste hic rem
        non.
      </p>
    </div>
    <div class="row">
      <p class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        cumque quas expedita minus ullam tempora aut reiciendis tenetur aperiam,
        vero eligendi beatae. Non, quia! Ipsam provident velit deleniti amet
        laborum.
      </p>
      <p class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        cumque quas expedita minus ullam tempora aut reiciendis tenetur aperiam,
        vero eligendi beatae. Non, quia! Ipsam provident velit deleniti amet
        laborum.
      </p>
      <p class="col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        cumque quas expedita minus ullam tempora aut reiciendis tenetur aperiam,
        vero eligendi beatae. Non, quia! Ipsam provident velit deleniti amet
        laborum.
      </p>
    </div>
    <div class="row">
      <p class="col bg-warning">Lorem, ipsum dolor.</p>
      <p>Lorem, ipsum dolor.</p>
    </div>

    <div class="row items-center bg-dark text-white" style="height: 300px">
      <div class="col bg-positive">One of three cols</div>
      <div class="col bg-positive">One of three cols</div>
      <div class="col bg-positive">One of three cols</div>
    </div>
  </q-page>
</template>
```

## Gutter

- [layout/grid/gutter](https://next.quasar.dev/layout/grid/gutter)

```html
<div class="row q-col-gutter-md">
  <p class="col-12 col-sm-4">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus
    sunt totam beatae inventore excepturi fugiat obcaecati ratione, deserunt,
    commodi nesciunt minus tenetur iure quasi ut! Iste hic rem non.
  </p>
  <p class="col-12 col-sm-4">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus
    sunt totam beatae inventore excepturi fugiat obcaecati ratione, deserunt,
    commodi nesciunt minus tenetur iure quasi ut! Iste hic rem non.
  </p>
  <p class="col-12 col-sm-4">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus
    sunt totam beatae inventore excepturi fugiat obcaecati ratione, deserunt,
    commodi nesciunt minus tenetur iure quasi ut! Iste hic rem non.
  </p>
</div>
```

```html
<div class="q-gutter-x-md">
  <q-btn color="primary">Uno</q-btn>
  <q-btn color="primary">Dos</q-btn>
  <q-btn color="primary">Tres</q-btn>
</div>
```

## Layout Gallery

- [layout/gallery](https://next.quasar.dev/layout/gallery)

## Header Picture

- [header-picture](https://next.quasar.dev/layout/drawer#example--header-picture)
- [list-and-list-items](https://next.quasar.dev/vue-components/list-and-list-items)
- [https://fonts.google.com/icons](https://fonts.google.com/icons)

```vue
<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-cyan-9">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/" exact active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Inicio </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/about" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> About </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const drawer = ref(false);
    return { drawer };
  },
};
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: $cyan-9;
}
</style>
```

## Form + Validate + Table

- [Form Quasar](https://next.quasar.dev/vue-components/form#introduction)

```vue
<template>
  <q-page padding>
    <h1 class="text-h2">Lista de compras</h1>
    <q-form
      class="row q-col-gutter-md"
      @reset="onReset"
      @submit.prevent="onSubmit"
      ref="myForm"
    >
      <q-input
        label="Producto"
        class="col-12 col-sm-6"
        v-model.trim="producto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-select
        label="Prioridad"
        class="col-12 col-sm-6"
        :options="opciones"
        v-model="seleccion"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"
      />
      <q-toggle
        label="Aceptar los las condiciones super bknes"
        v-model="condiciones"
        class="col-12"
      />
      <div class="col-12">
        <q-btn label="submit" type="submit" color="primary" />
        <q-btn
          label="reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
    <!-- <pre>{{productos}}</pre> -->

    <lista-productos :productos="productos" class="q-mt-xl" />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import ListaProductos from "src/components/ListaProductos.vue";
import { ref } from "vue";
export default {
  components: { ListaProductos },
  setup() {
    const $q = useQuasar();
    const myForm = ref(null);

    const productos = ref([]);

    const producto = ref(null);
    const seleccion = ref(null);
    const opciones = ["Máxima", "Moderada", "Mínima"];
    const condiciones = ref(false);

    const onSubmit = () => {
      if (condiciones.value === false) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });

        myForm.value.resetValidation();
        productos.value = [
          ...productos.value,
          {
            producto: producto.value,
            prioridad: seleccion.value,
          },
        ];
        onReset();
      }
    };

    const onReset = () => {
      producto.value = null;
      seleccion.value = null;
      condiciones.value = false;
    };

    return {
      producto,
      seleccion,
      opciones,
      condiciones,
      onSubmit,
      onReset,
      myForm,
      productos,
    };
  },
};
</script>
```

components/ListaProductos.vue

```vue
<template>
  <q-table
    title="Productos"
    :columns="columns"
    :rows="productos"
    no-data-label="Sin productos para mostrar"
  />
  <!-- <pre>{{productos}}</pre> -->
</template>

<script>
const columns = [
  {
    name: "producto",
    align: "left",
    label: "Producto",
    field: "producto",
    sortable: true,
  },
  { name: "prioridad", label: "Prioridad", field: "prioridad", sortable: true },
];

const row = [
  {
    producto: "fsad",
    prioridad: "Máxima",
  },
];
export default {
  props: {
    productos: Array,
  },
  setup() {
    return {
      columns,
      row,
    };
  },
};
</script>
```
