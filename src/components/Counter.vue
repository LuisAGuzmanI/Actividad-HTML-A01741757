<template>
    <div>
        <h1> {{ title }} </h1>
        <p>
            Este es un componente, uno muy sencillo, pero servirá para que
            te des una idea basica de como funciona una componente de Vue. <br>
            Puedes alterar el número en el centro tocando los botones para
            sumar y restar, y modificar la cantidad en los botones introduciendo
            un número en la caja de abajo. 
        </p>
        <h3> {{ counter }} </h3>
        <div>
            <button @click="decrease"> -{{ incDec }} </button>
            <button @click="increase"> +{{ incDec }} </button>
        </div>
        <form @submit.prevent="funcionVacia" style="margin-top: 15px;">
            <label> 
                Cambia la operación: 
                <input type="number" v-model="incDec" placeholder="Ingresa un Numero"> 
            </label>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        title: {
            type: String,
            default: "Counter!",
        },
        start: {
            type: Number,
            default: 10,
        }
    },
    data() {
        return {
            counter: this.start,
            incDec: 1,
        }
    },
    methods: {
        increase() {
            this.counter += !isNaN(this.incDec) ? this.incDec : 0;
        },
        decrease() {
            this.counter -= !isNaN(this.incDec) ? this.incDec : 0;
        },
        funcionVacia() {
        }
    }
}
</script>

<style>
    button {
        margin: 0 5px;
        padding: 5px;
        border-radius: 5px;
        background-color: #64BB87;
        color: white;
    }

    input[type=number] {
    background-color: #64BB87;
    color: white;
    width: 135px;
    text-align: center;
    }

    input::placeholder {
    color: rgb(235, 235, 235);
    font-size:70%em;
    }

</style>