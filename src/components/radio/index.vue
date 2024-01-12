<template>
  <div :class="[this.class, 'component-radio']" :style="this.style">
    <input
      v-model="data"
      type="radio"
      :id="value"
      :name="name"
      :disabled="disabled"
      @change="change()"
      :value="value"
    />
    <label :for="value">{{ label ? label : value }}</label>
  </div>
</template>

<script>
export default {
  name: "component-radio",
  data() {
    return {
      data: this.modelValue,
    };
  },
  props: ["name", "modelValue", "disabled", "class", "style", "value", "label"],
  methods: {
    change() {
      this.$emit("update:modelValue", this.data);
    },
  },
  mounted() {
    if (this.modelValue) {
      this.$emit("update:modelValue", this.modelValue);
    }
  },
  watch: {
    modelValue() {
      this.data = this.modelValue;
      this.$emit("changeValue", this.modelValue);
    },
  },
};
</script>

<style scoped lang="scss">
.component-radio {
  display: flex;
  height: 30px;

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    line-height: 22px;
    display: inline-block;

    font-size: 16px;
    font-weight: 400;
    color: #101828;
  }
  [type="radio"]:checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 6px solid #3b85de;
    border-radius: 100%;
    background: #ffffff;
  }
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #e4e7ec;
    border-radius: 100%;
    background: #fff;
  }

  input:disabled + label:before {
    background-color: #f2f4f7 !important;
    opacity: 0.8;
    cursor: default;
  }

  input:disabled + label {
    cursor: default !important;
  }
}
</style>
