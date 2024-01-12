<template>
  <div class="component-input">
    <div class="d-flex">
      <Field
        v-model="value"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :name="name"
        :type="type"
        :rules="rules"
        :autocomplete="type == 'password' ? 'new-password' : 'off'"
        :class="['form-control', Class]"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :validateOnBlur="true"
        :validateOnChange="true"
        :validateOnInput="true"
        @keypress="keypress"
        @keyup.enter="enter(value)"
      />
      <button
        :disabled="disabled"
        v-show="searchFlag"
        @click="search(value)"
        class="button-search"
        type="button"
      >
        <img src="@/assets/icon/general/search.svg" class="icon-search" />
        ค้นหา
      </button>
      <i
        class="bi bi-eye pointer icon-eye"
        @click="type = 'password'"
        v-show="icon == 'eye' && type == 'text'"
      ></i>
      <i
        class="bi bi-eye-slash pointer icon-eye"
        @click="type = 'text'"
        v-show="icon == 'eye' && type == 'password'"
      ></i>
    </div>
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
  name: "component-input",
  data() {
    return {
      value: this.modelValue,
      Class: this.class,
    };
  },
  methods: {
    keypress(evt) {
      if (this.isNumber) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        } else {
          return true;
        }
      }
    },
    enter(data) {
      this.search(data);
      this.$emit("enterValue", data);
    },
    search(data) {
      if (this.searchFlag) {
        this.$emit("searchClick", data);
      }
    },
  },
  mounted() {
    if (this.modelValue) {
      this.$emit("update:modelValue", this.modelValue);
    }
  },
  watch: {
    modelValue() {
      this.value = this.modelValue?.toString() || "";
    },
    value(newValue) {
      if (newValue && this.numberFormatComma) {
        this.$nextTick(() => {
          this.$emit(
            "update:modelValue",
            this.assetsUtils.numberFormatComma(newValue)
          );
        });
      }
      if (newValue && this.phoneFormatDash) {
        this.$nextTick(() => {
          this.$emit(
            "update:modelValue",
            this.assetsUtils.phoneFormatDash(newValue)
          );
        });
      }
    },
  },
  props: [
    "modelValue",
    "rules",
    "name",
    "type",
    "disabled",
    "placeholder",
    "class",
    "errorMessage",
    "searchFlag",
    "isNumber",
    "maxlength",
    "numberFormatComma",
    "phoneFormatDash",
    "icon",
  ],
};
</script>

<style lang="scss">
$color-disabled: #f2f4f7;
$color-text: #101828;
$color-placeholder: #98a2b3;
$color-border: #e4e7ec;
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
    background-color: #3b85de;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    min-width: 100px;
    max-width: 100px;
    height: 44px;
    border: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -5px;
    padding-top: 5px;
  }

  .icon-search {
    margin-top: -5px;
    font-size: 18px;
    margin-right: 10px;
  }

  .form-control:disabled,
  .form-control[readonly] {
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

  ::-webkit-input-placeholder {
    line-height: normal;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px $color-background inset;
  }
}
</style>
