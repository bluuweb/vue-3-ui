# Ant Design Vue

- [AntDV](https://2x.antdv.com/docs/vue/introduce)

Conjunto de componentes y demostraciones de alta calidad para crear interfaces de usuario interactivas y ricas.

- Soporte con Vue 3 Composition API

:::warning
Ojo que estaremos trabajando con la versión 2.x, por lo tanto la url cambia:

```
https://2x.antdv.com/docs/vue/introduce
```

:::

## Getting Started

Vue 3, Babel, Router

```
vue create antd-demo-1
```

```
npm i --save ant-design-vue@next @ant-design/icons-vue
npm i babel-plugin-import --save-dev
```

babel.config.js

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
      },
    ], // `style: true` for less
  ],
};
```

main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Button } from "ant-design-vue";

const app = createApp(App);

app.use(Button);

app.use(router).mount("#app");
```

About.vue

- [components/button](https://2x.antdv.com/components/button)

```vue
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">botón</a-button>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
```

## Icon

- [components/icon](https://2x.antdv.com/components/icon)

```vue
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">
      <SearchOutlined />
      botón
    </a-button>
  </div>
</template>

<script>
import { SearchOutlined } from "@ant-design/icons-vue";
export default {
  components: { SearchOutlined },
  setup() {},
};
</script>
```

## Textos

```js
import { Button, Typography, Divider } from "ant-design-vue";

const app = createApp(App);

app.use(Button);
app.use(Typography);
app.use(Divider);
```

```vue
<template>
  <a-typography>
    <a-typography-title>h1. Ant Design Vue</a-typography-title>
    <a-typography-title :level="2">h2. Ant Design Vue</a-typography-title>
    <a-typography-title :level="3">h3. Ant Design Vue</a-typography-title>
    <a-typography-title :level="4">h4. Ant Design Vue</a-typography-title>
    <a-typography-title :level="5">h5. Ant Design Vue</a-typography-title>

    <a-typography-paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab dolore
      praesentium laboriosam sed hic provident ratione quisquam id in cupiditate
      ex voluptate consectetur iure, deleniti assumenda eum. Quod, consequuntur.
    </a-typography-paragraph>

    <a-typography-title :level="2">Guidelines and Resources</a-typography-title>

    <a-divider />

    <a-typography-text type="secondary"
      >Ant Design Vue (secondary)</a-typography-text
    >
    <a-typography-text type="success"
      >Ant Design Vue (success)</a-typography-text
    >
    <a-typography-text type="warning"
      >Ant Design Vue (warning)</a-typography-text
    >
    <a-typography-text type="danger">Ant Design Vue (danger)</a-typography-text>
    <a-typography-link href="https://antdv.com" target="_blank">
      Ant Design Vue (Link)
    </a-typography-link>
  </a-typography>
</template>
```

## Row

- [components/grid](https://2x.antdv.com/components/grid)
- Se basa en 24 bloques.

```vue
<template>
  <a-row>
    <a-col :span="12">
      <a-card>12</a-card>
    </a-col>
    <a-col :span="12">
      <a-card>12</a-card>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="8">
      <a-card>8</a-card>
    </a-col>
    <a-col :span="8">
      <a-card>8</a-card>
    </a-col>
    <a-col :span="8">
      <a-card>8</a-card>
    </a-col>
  </a-row>

  <!-- responsive -->
  <a-row>
    <a-col :xs="24" :sm="12" :md="6">
      <a-card>6</a-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="6">
      <a-card>6</a-card>
    </a-col>
    <a-col :xs="24" :md="12">
      <a-card>12</a-card>
    </a-col>
  </a-row>
</template>
```

## Space, Badge, Avatar

```vue
<template>
  <a-space direction="vertical">
    <a-badge :count="count" :number-style="{ backgroundColor: '#52c41a' }">
      <a-avatar :size="64" shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>

    <a-button-group>
      <a-button @click="count++">
        <PlusOutlined />
      </a-button>
      <a-button @click="count--">
        <MinusOutlined />
      </a-button>
    </a-button-group>
  </a-space>
</template>

<script>
import {
  MinusOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
export default {
  components: { MinusOutlined, PlusOutlined, UserOutlined },
  setup() {
    const count = ref(1);

    return { count };
  },
};
</script>
```
