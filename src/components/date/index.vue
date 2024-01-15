<template>
  <div :style="this.style" :class="[this.class, 'component-date']">
    <Field
      v-model="data"
      type="text"
      :name="name"
      v-slot="{ field }"
      :rules="rules"
    >
      <input v-bind="field" v-show="false" />
    </Field>
    <Datepicker
      :modelValue="date"
      @update:modelValue="setDate"
      ref="dp"
      cancelText="Reset"
      selectText="Ok"
      :monthChangeOnScroll="false"
      :enableTimePicker="false"
      :format="format"
      locale="th"
      :name="name + 'Date'"
      monthNameFormat="long"
      :placeholder="placeholder ? placeholder : ''"
      inputClassName="dp-custom-input"
      calendarCellClassName="dp-custom-cell"
      menuClassName="dp-custom-menu"
      :disabled="disabled"
      :minDate="newMinDate"
      :maxDate="newMaxDate"
      calendarClassName="dp-custom-calendar"
      :autoApply="true"
      :closeOnAutoApply="true"
    >
      <template #action-preview=""></template>
      <template #year="{ year }">{{ year + 543 }}</template>
      <template #year-overlay-value="{ text }">{{ +text + +543 }}</template>
      <template #input-icon>
        <div class="group-image" :class="[disabled ? 'none-pointer' : '']">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-calendar4"
            viewBox="0 0 16 16"
          >
            <path
              fill="#667085"
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
            />
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
import { ref } from "vue";
export default {
  name: "component-date",
  setup(props, context) {
    const data = ref();
    const date = ref();
    const dp = ref();
    const newMinDate = ref();
    const newMaxDate = ref();
    let first = true;
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 543;
      return `${day > 9 ? day : "0" + day}/${
        month > 9 ? month : "0" + month
      }/${year}`;
    };
    const setDate = (value) => {
      date.value = value;
      context.emit("update:modelValue", value ? format(value) : "");
      data.value = value ? format(value) : "";
    };
    const minMaxDate = (status, value) => {
      if (status == "minDate") {
        newMinDate.value = value
          ? new Date(
              +value.split("/")[2] - 543,
              value.split("/")[1] - 1,
              value.split("/")[0]
            )
          : "";
      }
      if (status == "maxDate") {
        newMaxDate.value = value
          ? new Date(
              +value.split("/")[2] - 543,
              value.split("/")[1] - 1,
              value.split("/")[0]
            )
          : "";
      }
    };
    return {
      date,
      dp,
      format,
      setDate,
      data,
      minMaxDate,
      newMinDate,
      newMaxDate,
      first,
    };
  },
  props: [
    "name",
    "placeholder",
    "modelValue",
    "disabled",
    "rules",
    "minDate",
    "maxDate",
    "class",
    "style",
    "errorMessage",
  ],
  mounted() {
    if (this.modelValue) {
      this.setDate(
        this.modelValue
          ? new Date(
              +this.modelValue.split("/")[2] - 543,
              this.modelValue.split("/")[1] - 1,
              this.modelValue.split("/")[0]
            )
          : ""
      );
    }
    if (this.minDate) {
      this.minMaxDate("minDate", this.minDate);
    }

    if (this.maxDate) {
      this.minMaxDate("maxDate", this.maxDate);
    }
  },
  watch: {
    minDate() {
      this.minMaxDate("minDate", this.minDate);
    },
    maxDate() {
      this.minMaxDate("maxDate", this.maxDate);
    },
    data(newData, oldData) {
      if (newData || oldData) {
        this.$emit("changeValue", newData);
      }
    },
    modelValue() {
      if (!this.modelValue) {
        this.date = "";
        this.data = "";
      } else {
        this.setDate(
          this.modelValue
            ? new Date(
                +this.modelValue.split("/")[2] - 543,
                this.modelValue.split("/")[1] - 1,
                this.modelValue.split("/")[0]
              )
            : ""
        );
      }
    },
  },
};
</script>

<style lang="scss">
$color-disabled: #f2f4f7;
$color-text: #101828;
$color-placeholder: #98a2b3;
$color-border: #e4e7ec;
$color-background: #ffffff;

.component-date {
  width: 100%;

  .group-image {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    background-color: white;
    cursor: pointer;
  }

  .none-pointer {
    background-color: $color-disabled;
    opacity: 0.7;
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
}

.dp-custom-input:disabled {
  background-color: $color-disabled;
  opacity: 0.7;
}

.dp-custom-menu {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
}

.dp__month_year_row {
  margin-top: 10px;
}

.dp__calendar_wrapper {
  padding-right: 10px;
  padding-left: 10px;
}

.dp__instance_calendar {
  font-size: 16px;
}

.dp-custom-input {
  font-size: 16px;
  font-weight: 400;
  color: $color-text;
  border: 1px solid $color-border;
  border-radius: 8px;
  background-color: $color-background;
  width: 100%;
  height: 44px;
  padding: 11px 41px 10px 16px;
}

.dp__input_icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: auto;
  cursor: default;
}

.dp__clear_icon {
  width: 15px;
  height: 15px;
  background-color: #ffffff;
  padding: 0px 6px;
  right: 33px;
}

.dp__input:focus {
  outline: none;
  box-shadow: 0px 0px;
}

.dp__input:hover {
  outline: none;
  box-shadow: 0px 0px;
  border: 1px solid $color-border;
}
</style>
