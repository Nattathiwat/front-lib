<template>
  <div class="component-file">
    <Field
      v-model="data"
      type="text"
      :name="name"
      v-slot="{ field }"
      :rules="rules"
    >
      <input v-bind="field" v-show="false" />
    </Field>

    <button
      @click="selectFile(name)"
      type="button"
      :style="this.style"
      :class="[this.class, 'form-button', data ? 'colorBlack' : '']"
      :disabled="disabled"
      :name="name + 'File'"
    >
      <div class="name-file">
        {{ data ? data : placeholder }}
      </div>
    </button>

    <div class="icon-close" :class="{ disabled: disabled }" v-show="data && !disabled">
      <svg
        @click="delFile"
        :class="[disabled ? 'none-pointer' : 'pointer']"
        version="1.1"
        fill="#959595"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        data-test="clear-icon"
      >
        <path
          d="M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
        ></path>
        <path
          d="M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
        ></path>
      </svg>
    </div>

    <button
      :disabled="disabled"
      @click="selectFile(name)"
      class="button-add-file"
      type="button"
    >
      แนบไฟล์
    </button>

    <div class="warning-message" v-show="remark">
      {{ remark }}
    </div>
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="message-error">
        {{
          this?.errorMessage || (message ? message : this.defaultMessageError)
        }}
      </p>
    </ErrorMessage>
    <input
      type="file"
      @change="pickFile(name)"
      :name="name + '_file'"
      style="display: none"
      :accept="accept"
    />
  </div>
</template>
<script>
export default {
  name: "component-file",
  data() {
    return {
      data: "",
    };
  },
  props: [
    "maxsize",
    "accept",
    "remark",
    "name",
    "placeholder",
    "modelValue",
    "class",
    "style",
    "disabled",
    "rules",
    "errorMessage",
  ],
  methods: {
    selectFile(data) {
      document.querySelector(`[name="${data}_file"]`).click();
    },
    pickFile(data) {
      for (
        var i = 0;
        i < document.querySelector(`[name="${data}_file"]`).files.length;
        i++
      ) {
        let file = document.querySelector(`[name="${data}_file"]`).files[i];
        console.log("file.size", file.size);
        if (this.checkRules(file)) {
          this.modelValue.preview = URL.createObjectURL(file);
          this.modelValue.file = file;
          this.modelValue.name = file.name;
          document.querySelector(`[name="${data}_file"]`).value = null;
        } else {
          this.$swal({
            title: "แจ้งเตือน",
            text: this.remark,
            icon: "error",
            showCancelButton: true,
          });
        }
      }
    },
    checkRules(file) {
      if (this.accept.indexOf(file.type) != -1) {
        if (file.size < parseInt(this.maxsize ? this.maxsize : 99999999999)) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    delFile() {
      this.modelValue.preview = "";
      this.modelValue.file = "";
      this.modelValue.name = "";
    },
  },
  computed: {},
  mounted() {
    if (this.modelValue) {
      this.data = this.modelValue.name;
    }
  },
  watch: {
    "modelValue.name"() {
      if (!this.modelValue.name) {
        this.data = "";
      } else {
        this.data = this.modelValue.name;
      }
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

.component-file {
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;

  .form-button:disabled,
  .form-button[readonly] {
    background-color: $color-disabled;
    opacity: 0.7;
  }

  .form-button {
    color: $color-text;
    border: 1px solid $color-border;
    border-radius: 8px;
    background-color: $color-background;
    width: 100%;
    height: 44px;
    padding: 14px 16px 10px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

    .name-file {
      font-size: 16px;
      color: $color-placeholder;
      opacity: 0.7;
      text-align: left;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: center;
    }
  }

  .colorBlack .name-file {
    color: $color-text;
    padding-right: 10px;
    opacity: 1;
  }
  .warning-message {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #9fa1a3;
  }

  .button-add-file {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #3b85de;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    min-width: 80px;
    max-width: 80px;
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

  .button-add-file:disabled {
    opacity: 0.7;
  }

  .icon-close {
    background: #ffffff;
    width: 32px;
    height: 40px;
    z-index: 1;
    right: 80px;
    top: 2px;
    position: absolute;
    padding: 12px 0 0px 5px;

    svg {
      width: 20px;
      height: 20px;
    }

    &.disabled {
      background-color: $color-disabled;
      opacity: 0.7;
    }
  }
}
</style>
