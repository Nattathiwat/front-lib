<template>
  <div class="component-auto-complete">
    <div class="component-input" ref="dropdownAutoComplete">
      <Field
        :class="[this.class, 'form-control']"
        :style="this.style"
        v-model="value"
        :name="name"
        autocomplete="off"
        v-on:keyup="onKeyup($event.target.value)"
        :validateOnBlur="true"
        :validateOnChange="true"
        :validateOnInput="true"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :rules="rules"
        :type="type"
      />
      <div
        @click="disabled ? '' : toggleDropdown()"
        :class="[disabled ? 'disabled' : 'pointer']"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#667085"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ErrorMessage :name="name" v-slot="{ message }">
        <p class="message-error">
          {{
            this?.errorMessage || (message ? message : this.defaultMessageError)
          }}
        </p>
      </ErrorMessage>
      <div
        class="dropdown-content"
        :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'"
      >
        <div>
          <div
            class="dropdown-list firstSelect"
            v-show="firstSelect?.show"
            @click="select({ value: '', name: '' })"
          >
            {{ firstSelect?.name }}
          </div>
        </div>
        <div v-for="(item, index) in optionSelect" :key="index">
          <div class="line" v-show="index != 0 || firstSelect?.show"></div>
          <div class="dropdown-list" @click="select(item)">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-auto-complete",
  data() {
    return {
      dropdown: false,
      value: this.modelValue,
      oldValue: "",
    };
  },
  props: [
    "name",
    "placeholder",
    "modelValue",
    "type",
    "class",
    "style",
    "disabled",
    "maxlength",
    "rules",
    "optionSelect",
    "iconN",
    "firstSelect",
    "errorMessage",
  ],
  methods: {
    onKeyup(data) {
      this.$emit("keyupData", data);
      this.dropdown = true;
      if (!data) {
        this.dropdown = false;
        this.$emit("update:modelValue", "");
        this.$emit("changeValue", "");
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    focusoutBtn(e) {
      if (this.$refs.dropdownAutoComplete) {
        let target = e.target;
        if (
          this.$refs.dropdownAutoComplete !== target &&
          !this.$refs.dropdownAutoComplete.contains(target)
        ) {
          if (this.dropdown) {
            let check = true;
            this.optionSelect.filter((row) => {
              if (row.name == this.value && this.value) {
                check = false;
                this.$emit("update:modelValue", row.value);
                this.change(row.value);
              }
            });
            if (check) {
              this.$emit("update:modelValue", "");
              this.change();
              this.value = "";
              this.$emit("keyupData", "");
            }
          }
          this.dropdown = false;
        }
      }
    },
    select(data) {
      this.$emit("update:modelValue", data.value);
      this.change(data.value);

      this.dropdown = false;
    },
    change(data) {
      if (data != this.oldValue) {
        this.$emit("changeValue", data);
      } else {
        this.value =
          this.optionSelect.filter((row) => row.value == data)[0]?.name || "";
      }
      this.oldValue = data;
    },
  },
  mounted() {
    document.addEventListener("click", this.focusoutBtn);
    if (this.modelValue) {
      this.$emit("update:modelValue", this.modelValue.toString());
    }
  },
  beforeUnmount() {
    document.removeEventListener("click", this.focusoutBtn);
  },
  watch: {
    modelValue() {
      this.value =
        this.optionSelect.filter((row) => row.value == this.modelValue)[0]
          ?.name || "";
      this.oldValue = this.modelValue;
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

.component-auto-complete {
  width: 100%;

  .component-input {
    position: relative;
    width: 100%;

    .form-control {
      font-size: 16px;
      color: $color-text;
      border: 1px solid $color-border;
      border-radius: 8px;
      background-color: $color-background;
      width: 100%;
      height: 44px;
      padding: 11px 41px 10px 16px;
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

    .pointer,
    .disabled {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 198px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.16);
      text-align: left;
      z-index: 2;
      color: $color-text;
      font-size: 16px;
      font-weight: 400;
      border-radius: 8px;
      left: 0;
      right: 0;
      top: 50px;
      overflow: hidden;
      max-height: 420px;

      .firstSelect {
        opacity: 0.7;
      }

      .dropdown-list {
        padding: 12px 16px 10px 16px;
        min-height: 44px;
        width: 100%;
        cursor: pointer;
      }

      .line {
        border-bottom: 1px solid #d8d8d8;
        height: 0px !important;
        opacity: 1 !important;
        margin: 0px !important;
        padding: 0px !important;
      }
    }
  }
}
</style>
