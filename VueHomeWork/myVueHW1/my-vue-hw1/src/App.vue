<template>
  <!-- <div>
    <h1 v-once>{{message}}</h1>
    <h2>{{age}}</h2>
    <p>{{sayHello()}}</p>
    <p>
      <a v-bind:href="link">GOOGLE</a>
    </p>
    <span v-html="finishedLink"></span>
  </div>-->

  <!-- <div>
    <button v-on:click="increase(2)">Click me</button>
    <p>{{counter}}</p>
  </div>-->

  <div>
    <p v-on:mousemove="updateCoordinates">
      Coordinates: {{x}} {{y}}
      <span v-on:mousemove.stop>Dead spot</span>
    </p>
    <input type="text" v-on:keyup.enter="alert" />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      // message: "Hello World!!!",
      // age: 33,
      // link: "http://google.com",
      // finishedLink: '<a href="http://google.com">GOOGLE</a>',

      counter: 0,
      x: 0,
      y: 0,
    };
  },

  methods: {
    // sayHello() {
    //   return (this.message = "hello");
    // },
    increase(step) {
      this.counter += step;
    },

    updateCoordinates(event) {
      console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    },

    Dead(event) {
      event.stopPropagation();
    },

    alert() {
      alert("alert!!!");
    },
  },
};
</script>

<style>
</style>