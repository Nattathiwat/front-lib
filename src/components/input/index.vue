<template>
  <div class="component-input">
    <div class="d-flex">
      <Field  v-model="value"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              :name="name"
              :type="type" 
              :rules="rules"
              :autocomplete="type=='password' ? 'new-password' : 'off'"
              :class="['form-control', this.class]"
              :disabled="disabled"
              :placeholder="placeholder"
              :maxlength="maxlength"
              :validateOnBlur="true"
              :validateOnChange="true"
              :validateOnInput="true"
              @keypress="keypress"
              @keyup.enter="search(value)" />
      <button :disabled="disabled" v-show="searchFlag" @click="search(value)" class="button-search"><i class="bi bi-search icon-search"></i> ค้นหา</button>
      <i class="bi bi-eye pointer icon-eye" @click="type = 'password'" v-show="icon == 'eye' && type == 'text'"></i>
      <i class="bi bi-eye-slash pointer icon-eye" @click="type = 'text'" v-show="icon == 'eye' && type == 'password'"></i>
    </div>
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>
</template>
<script>
export default {
  name: 'component-input',
  data() {
    return {
      value: this.modelValue,
    }
  },
  methods: {
    keypress(evt) {
      if (this.isNumber) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();
        } else {
          return true;
        }
      }
    },
    search(data) {
      if (this.searchFlag) {
        this.$emit('searchClick', data)
      }
    },
  },
  mounted () {
    if (this.modelValue) {
      this.$emit('update:modelValue', this.modelValue.toString())
    }
  },
  watch: {
    'modelValue'() {
      this.value = this.modelValue
    },
    'value'(newValue) {
      if (newValue && this.numberFormatComma) {
        this.$nextTick(() => {
          this.$emit('update:modelValue', this.assetsUtils.numberFormatComma(newValue))
        })
      }
      if (newValue && this.phoneFormatDash) {
        this.$nextTick(() => {
          this.$emit('update:modelValue', this.assetsUtils.phoneFormatDash(newValue))
        })
      }
    }
  },
  props: ['modelValue', 'rules', 'name', 'type', 'disabled', 'placeholder', 'class', 'errorMessage', 'searchFlag', 'isNumber', 'maxlength', 'numberFormatComma', 'phoneFormatDash', 'icon']
};
</script>

<style lang="scss">
  $color-disabled: #F2F4F7;
  $color-text: #101828;
  $color-placeholder: #98A2B3;
  $color-border: #E4E7EC;
  $color-background: #ffffff;

  .component-input {
    position: relative;
    width: 100%;

    .d-flex {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .form-control {
      font-size: 16px;
      color: $color-text;
      border: 1px solid $color-border;
      border-radius: 8px;
      background-color: $color-background;
      width: 100%;
      height: 44px;
      padding: 11px 16px 10px;
    }

    .icon-eye {
      position: absolute;
      right: 15px;
      color: $color-primary;
      font-size: 22px;
    }

    .button-search {
      background-color: #1a456b;
      font-size: 18px;
      font-weight: 500;
      color: #ffffff;
      min-width: 118px;
      max-width: 118px;
      height: 44px;
      border: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -5px;
    }

    .icon-search {
      width: 23px;
      height: 23px;
      margin-right: 15px;
    }

    .form-control:disabled, .form-control[readonly] {
      background-color: $color-disabled;
      opacity: 0.7;
    }
    
    .button-search:disabled {
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

    ::-webkit-input-placeholder { line-height: normal; }
    
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px $color-background inset;
    }
  }
</style>
