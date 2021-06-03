# Q Calculadora

## Recursos

- [Ejemplo](https://codepen.io/behnam-sn/pen/zYOPjzZ?editors=1010)
- [package/mathjs](https://www.npmjs.com/package/mathjs)
- [eval](https://dev.to/spukas/everything-wrong-with-javascript-eval-35on)

## Código

```vue
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-md-8">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Calc</div>
          </q-card-section>
          <q-card-section class="">
            <div class="text-h5 text-grey-5 text-right">
              {{ acumulador + actual }}
            </div>
            <div class="text-h3 text-right">{{ resultado }}</div>
          </q-card-section>
          <q-card-section class="bg-grey-4">
            <div class="row q-col-gutter-sm">
              <div v-for="(btn, index) in botones" :key="index" class="col-3">
                <q-btn
                  class="full-width text-h6"
                  :text-color="!isNumber(btn) ? 'white' : 'grey-8'"
                  :color="!isNumber(btn) ? 'indigo' : 'grey-2'"
                  @click="btnAccion(btn)"
                >
                  {{ btn }}
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn
                  class="full-width text-h6"
                  color="indigo"
                  @click="btnReiniciar"
                >
                  reset
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn
                  class="full-width text-h6"
                  color="orange"
                  @click="btnResultado"
                >
                  =
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <pre>{{ arrayCalculos }}</pre>
    </div>
  </q-page>
</template>

<script>
// https://codepen.io/behnam-sn/pen/zYOPjzZ?editors=1010
// https://www.npmjs.com/package/mathjs
import { evaluate, round } from "mathjs";
const botones = [7, 8, 9, "%", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*"];
import { ref } from "vue";
export default {
  setup() {
    const arrayCalculos = ref([]);
    const operadorClick = ref(true);
    const actual = ref("");
    const resultado = ref("");
    const acumulador = ref("");

    const isNumber = (btn) => !isNaN(btn);

    const btnAccion = (valor) => {
      if (!isNaN(valor)) {
        if (operadorClick.value) {
          actual.value = "";
          operadorClick.value = false;
        }
        actual.value = `${actual.value}${valor}`;
      } else {
        ejecutarOperacion(valor);
      }
    };

    const ejecutarOperacion = (valor) => {
      if (valor === "%") {
        if (actual.value !== "") {
          actual.value = `${parseFloat(actual.value) / 100}`;
        }
        return;
      }

      if (valor === ".") {
        console.log(actual.value);
        if (actual.value.indexOf(".") === -1) {
          if (operadorClick.value) {
            actual.value = "";
            operadorClick.value = false;
          }
          actual.value = `${actual.value}${valor}`;
        }
        return;
      }

      agregarOperador(valor);
    };

    const agregarOperador = (operador) => {
      // console.log(operador);
      if (!operadorClick.value) {
        acumulador.value += `${actual.value} ${operador} `;
        actual.value = "";
        operadorClick.value = true;
      }
    };

    const btnReiniciar = () => {
      actual.value = "";
      resultado.value = "";
      acumulador.value = "";
      operadorClick.value = false;
    };

    // https://dev.to/spukas/everything-wrong-with-javascript-eval-35on
    const parse = (str) => {
      return Function(`'use strict'; return (${str})`)();
    };

    const btnResultado = () => {
      if (!operadorClick.value) {
        resultado.value = evaluate(acumulador.value + actual.value);
        resultado.value = round(resultado.value, 3);
        arrayCalculos.value.push(
          `${acumulador.value} ${actual.value} = ${resultado.value}`
        );
      } else {
        resultado.value = "Error!";
      }
    };

    return {
      botones,
      btnAccion,
      btnReiniciar,
      btnResultado,
      arrayCalculos,
      resultado,
      actual,
      isNumber,
      acumulador,
    };
  },
};
</script>

<style scoped>
.text-h3 {
  height: 50px;
}
.text-h5 {
  height: 32px;
}
</style>
```
