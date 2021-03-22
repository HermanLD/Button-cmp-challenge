<template>
  <button :class="setStyles()">
    <slot>Default</slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },
    variant: {
      type: String
    },
    size: {
      type: String,
      default: "md"
    },
    disableShadow: {
      type: Boolean
    }
  },
  methods: {
    setStyles() {
      const classArr = ["btn", `btn-${this.size}`];

      if (this.color !== undefined) {
        classArr.push(`btn-${this.color}`);
      }
      if (this.variant !== undefined) {
        classArr.push(`btn-${this.variant}`);
      }
      if (this.disableShadow) {
        classArr.push(`btn-shadowless`);
      }
      return classArr;
    }
  }
};
</script>

<style>
@layer components {
  .btn {
    @apply font-noto rounded-md text-appBlack text-sm bg-default-1 shadow-btn focus:outline-none hover:bg-default-2 focus:bg-default-2;
  }

  .btn > * {
    margin: 0 3px;
  }

  .btn:disabled,
  .btn-outline:disabled {
    @apply border-none text-disabledGray bg-default-1 shadow-none pointer-events-none;
  }

  .btn-text:disabled {
    @apply bg-opacity-0;
  }

  .btn-primary,
  .btn-secondary,
  .btn-danger {
    color: white;
  }

  .btn-primary {
    @apply bg-primary-1 hover:bg-primary-2 focus:bg-primary-2;
  }

  .btn-secondary {
    @apply bg-secondary-1 hover:bg-secondary-2 focus:bg-secondary-2;
  }

  .btn-danger {
    @apply bg-danger-1 hover:bg-danger-2 focus:bg-danger-2;
  }

  .btn-outline {
    @apply border-solid border border-altBlue bg-opacity-0 text-altBlue shadow-none hover:bg-transparent focus:bg-transparent;
  }

  .btn-text {
    @apply text-altBlue bg-opacity-0 shadow-none hover:bg-transparent focus:bg-transparent;
  }

  .btn-shadowless {
    @apply shadow-none;
  }

  .btn-sm {
    @apply px-3 py-1.5;
  }

  .btn-md {
    @apply px-4 py-2;
  }

  .btn-lg {
    padding: 11px 22px;
  }
}
</style>
