<template>
  <div class="component-time">
    <Field
      v-slot="{ field }"
      v-model="data"
      type="text"
      :name="name"
      :rules="rules"
    >
      <input v-show="false" v-bind="field" />
    </Field>
    <Datepicker
      :model-value="time"
      input-class-name="dp-custom-input"
      menu-class-name="dp-custom-menu"
      cancel-text="Reset"
      :name="name + 'Time'"
      select-text="Ok"
      locale="th"
      time-picker
      :disabled="disabled"
      :enable-seconds="false"
      :placeholder="placeholder ? placeholder : ''"
      @closed="closedTime"
      @update:modelValue="setDate"
      :autoApply="true"
      :closeOnAutoApply="true"
    >
      <template #action-preview=""></template>
      <template #input-icon>
        <div class="group-image" :class="[disabled ? 'none-pointer' : '']">
          <svg class="bi bi-clock" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
          </svg>
        </div>
      </template>
    </Datepicker>
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
import { ref, getCurrentInstance } from "vue";

export default {
  name: "ComponentTime",
  props: [
    "name",
    "modelValue",
    "disabled",
    "class",
    "style",
    "placeholder",
    "rules",
    "val",
    "errorMessage",
  ],
  emits: ["update:modelValue", "changeValue"],
  setup(props, context) {
    const assetsUtils =
      getCurrentInstance().appContext.config.globalProperties.assetsUtils;
    const data = ref();
    const time = ref({
      hours: "", // new Date().getHours(),
      minutes: "", // new Date().getMinutes()
    });
    let first = true;
    const setDate = (value) => {
      time.value = value;
      if (value == null) {
        context.emit("update:modelValue", "");
        data.value = "";
      } else {
        context.emit(
          "update:modelValue",
          (value.hours > 9 ? value.hours : "0" + value.hours) +
            ":" +
            (value.minutes > 9 ? value.minutes : "0" + value.minutes) +
            ":" +
            (value.seconds > 0 ? value.seconds : "0" + value.seconds)
        );
        data.value =
          (value.hours > 9 ? value.hours : "0" + value.hours) +
          ":" +
          (value.minutes > 9 ? value.minutes : "0" + value.minutes) +
          ":" +
          (value.seconds > 0 ? value.seconds : "0" + value.seconds);
      }
    };
    const closedTime = () => {
      if (!data.value) {
        const Time = assetsUtils.currentTime();
        context.emit("update:modelValue", Time);
        data.value = Time;
      }
    };
    return {
      time,
      setDate,
      data,
      first,
      closedTime,
    };
  },
  watch: {
    modelValue(newVal, oldVal) {
      if (!this.modelValue) {
        this.time = "";
        this.$emit("changeValue", "");
      } else {
        let newData =
          parseInt(newVal.split(":")[0]) + parseInt(newVal.split(":")[1]);
        let oldData =
          parseInt(oldVal.split(":")[0]) + parseInt(oldVal.split(":")[1]);
        if (newData != oldData) {
          let array = this.modelValue.split(":");
          let data = {
            hours: parseInt(array[0]),
            minutes: parseInt(array[1]),
            seconds: "0",
          };
          this.setDate(data);
          this.$emit(
            "changeValue",
            (data.hours > 9 ? data.hours : "0" + data.hours) +
              ":" +
              (data.minutes > 9 ? data.minutes : "0" + data.minutes)
          );
        }
      }
    },
  },
  mounted() {
    if (!this.modelValue) {
      this.time = "";
    } else {
      let array = this.modelValue.split(":");
      let data = {
        hours: parseInt(array[0]),
        minutes: parseInt(array[1]),
        seconds: "0",
      };
      this.setDate(data);
    }
  },
};
</script>
<style lang="scss" scoped>
$color-disabled: #f2f4f7;
$color-text: #101828;
$color-placeholder: #98a2b3;
$color-border: #e4e7ec;
$color-background: #ffffff;
.component-time {
  width: 100%;

  .group-image {
    display: flex;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-right: 10px;
    background-color: white;
    cursor: pointer;
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
  
  .none-pointer {
    background-color: $color-disabled;
    opacity: 0.7;
  }
}
</style>
