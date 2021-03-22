<template>
  <div>
    <div class="flex-row-between">
      <div>
        <h2>Default Button</h2>
        <app-btn></app-btn>
      </div>
      <div>
        <h2>Primary Button</h2>
        <app-btn color="primary"></app-btn>
      </div>
      <div>
        <h2>Secondary Button</h2>
        <app-btn color="secondary"></app-btn>
      </div>
      <div>
        <h2>Danger Button</h2>
        <app-btn color="danger"></app-btn>
      </div>
    </div>

    <div class="flex-row-between">
      <div>
        <h2>Outline Button</h2>
        <app-btn variant="outline"></app-btn>
      </div>
      <div>
        <h2>Text Button</h2>
        <app-btn variant="text"></app-btn>
      </div>
      <div>
        <h2>Disabled Button</h2>
        <app-btn disabled></app-btn>
      </div>
      <div>
        <h2>Disabled Text Button</h2>
        <app-btn variant="text" disabled></app-btn>
      </div>
    </div>

    <div class="flex-row-between">
      <div>
        <h2>Disabled Shadow</h2>
        <app-btn color="primary" disableShadow></app-btn>
      </div>
      <div>
        <h2>Start Icon Button</h2>
        <app-btn color="danger">
          <i class="fas fa-user-astronaut"></i>
          To The Moon!
        </app-btn>
      </div>
      <div>
        <h2>End Icon Button</h2>
        <app-btn color="primary">
          Test Flight
          <i class="fas fa-user-astronaut"></i>
        </app-btn>
      </div>
    </div>

    <div class="flex-row-between">
      <div>
        <h2>Size Small</h2>
        <app-btn color="secondary" size="sm"></app-btn>
      </div>
      <div>
        <h2>Size Medium</h2>
        <app-btn color="secondary" size="md"></app-btn>
      </div>
      <div>
        <h2>Size Large</h2>
        <app-btn color="secondary" size="lg"></app-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from "./components/AppBtn.vue";

export default {
  name: "App",
  components: {
    AppBtn
  }
};
</script>

<style>
@layer utilities {
  .flex-row-between {
    @apply flex flex-row justify-between justify-items-center mb-10;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 60px auto;
  max-width: 600px;
}
</style>
