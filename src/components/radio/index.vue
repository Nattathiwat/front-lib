<template>
  <div :class="[this.class, 'component-radio']" :style="this.style">
    <input  v-model="data" 
            type="radio" 
            :id="value" 
            :name="name" 
            :disabled="disabled" 
            @change="change()"
            :value="value"
            />
    <label :for="value">{{label ? label : value}}</label>
  </div>

</template>

<script>
export default {
  name: 'component-radio',
  data() {
    return {
      data: this.modelValue
    }
  },
  props: ['name', 'modelValue', 'disabled', 'class', 'style', 'value', 'label'],
  methods: {
    change() {
      this.$emit('update:modelValue', this.data)
    }
  },
  mounted () {
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue)
    }
  },
  watch: {
    'modelValue'() {
      this.data = this.modelValue
    }
  },
}
</script>

<style scoped lang="scss">
  .component-radio {
    display: flex;
    height: 30px;

    input:disabled ~ label{
      border-color: 1px solid #ececec;
      opacity: 0.8;
      cursor: default;
    } 

    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      line-height: 26px;
      display: inline-block;

      font-size: 16px;
      font-weight: 400;
      color: #101828;
    }
    [type="radio"]:checked + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        border: 1px solid #3B85DE;
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        border: 1px solid #E4E7EC;
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 15px;
        height: 15px;
        background: #3B85DE;
        position: absolute;
        top: 5px;
        left: 5px;
        border-radius: 100%;
        border-color: #3B85DE;
    }
    [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

  }
</style>
