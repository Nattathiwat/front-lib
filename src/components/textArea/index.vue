<template>
  <div class="component-text-area">
    <Field
      v-model="value"
      as="textarea"
      autocomplete="off"
      :style="this.style"
      :class="[this.class, 'form-control']"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :rows="rows"
      @keydown="handleKeydown"
      :rules="rules"
      :validateOnBlur="true"
      :validateOnChange="true"
      :validateOnInput="true"
      @keyup.enter="enter(value)"
      ref="textArea"
    />
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="message-error">
        {{
          this?.errorMessage || (message ? message : this.defaultMessageError)
        }}
      </p>
    </ErrorMessage>
  </div>
</template>

<script>
export default {
  name: "component-text-area",
  data() {
    return {
      value: this.modelValue,
    };
  },
  props: [
    "name",
    "placeholder",
    "modelValue",
    "class",
    "style",
    "disabled",
    "rules",
    "rows",
    "errorMessage",
  ],
  methods: {
    enter(data) {
      this.$emit("enterValue", data);
    },
    handleKeydown(data) {
      let area = data.target;
      if (area.value) {
        setTimeout(function () {
          // area.style.height = 'auto';
          // area.style.padding = '9px 16px 8px';
          // area.style.height = area.scrollHeight + 'px';
        }, 0);
      }
    },
  },
  watch: {
    modelValue() {
      this.value = this.modelValue;
    },
  },
};
</script>

<style scoped lang="scss">
$color-disabled: #f2f4f7;
$color-text: #101828;
$color-placeholder: #98a2b3;
$color-border: #e4e7ec;
$color-background: #ffffff;
.component-text-area {
  .form-control {
    // resize: vertical;
    resize: none;
    font-size: 16px;
    line-height: 24px;
    color: $color-text;
    border: 1px solid $color-border;
    border-radius: 8px;
    background-color: $color-background;
    width: 100%;
    min-height: 44px;
    padding: 9px 16px 8px;
  }

  .form-control:disabled,
  .form-control[readonly] {
    background-color: $color-disabled;
    opacity: 0.7;
  }

  .form-control:focus {
    outline: none;
    box-shadow: 0px 0px;
  }

  ::-webkit-input-placeholder {
    font-size: 16px;
    color: $color-placeholder;
    opacity: 0.7;
    text-align: left;
    font-weight: 400;
    line-height: 24px;
  }

  :-ms-input-placeholder {
    font-size: 16px;
    color: $color-placeholder;
    opacity: 0.7;
    text-align: left;
    font-weight: 400;
    line-height: 24px;
  }

  ::placeholder {
    font-size: 16px;
    color: $color-placeholder;
    opacity: 0.7;
    text-align: left;
    font-weight: 400;
    line-height: 24px;
  }

  ::-webkit-input-placeholder {
    line-height: normal;
  }
}
</style>
