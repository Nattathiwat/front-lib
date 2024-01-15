<template>
  <div :style="this.style" :class="[this.class, 'component-date-range']">
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
      range
      calendarClassName="dp-custom-calendar"
      inputClassName="dp-custom-input"
      calendarCellClassName="dp-custom-cell"
      menuClassName="dp-custom-menu"
      monthNameFormat="long"
      :placeholder="placeholder ? placeholder : ''"
      locale="th"
      ref="dp"
      cancelText="Reset"
      selectText="Ok"
      :monthChangeOnScroll="false"
      :enableTimePicker="false"
      :disabled="disabled"
      :minDate="newMinDate"
      :maxDate="newMaxDate"
      :name="name + 'DateRange'"
      :format="format"
      @update:modelValue="setDate"
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
  name: "component-date-range",
  setup(props, context) {
    const data = ref();
    const date = ref();
    const newMinDate = ref();
    const newMaxDate = ref();
    let first = true;
    const format = (date) => {
      if (date) {
        if (date[0]) {
          const day = date[0].getDate();
          const month = date[0].getMonth() + 1;
          const year = (date[0].getFullYear() + 543).toString();
          var day2 = "";
          var month2 = "";
          var year2 = "";
          if (date[1]) {
            day2 = date[1].getDate();
            month2 = date[1].getMonth() + 1;
            year2 = (date[1].getFullYear() + 543).toString();
          }
          return `${day > 9 ? day : "0" + day}/${
            month > 9 ? month : "0" + month
          }/${year}${
            date[1]
              ? " - " +
                (day2 > 9 ? day2 : "0" + day2) +
                "/" +
                (month2 > 9 ? month2 : "0" + month2) +
                "/" +
                year2
              : ""
          }`;
        } else {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear() + 543;
          return `${day > 9 ? day : "0" + day}/${
            month > 9 ? month : "0" + month
          }/${year}`;
        }
      }
    };
    const setDate = (value) => {
      if (value) {
        date.value = [value[0], value[1]];
        context.emit("update:modelValue", [format(value[0]), format(value[1])]);
      } else {
        date.value = [];
        context.emit("update:modelValue", "");
      }

      if (!first) {
        data.value = value ? [format(value[0]), format(value[1])] : "";
      } else {
        first = false;
      }
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
      data,
      newMinDate,
      newMaxDate,
      format,
      setDate,
      minMaxDate,
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
    "range",
    "class",
    "style",
    "errorMessage",
  ],
  mounted() {
    if (this.modelValue) {
      if (this.modelValue[0]) {
        let dateSet = [
          new Date(
            +this.modelValue[0].split("/")[2] - 543,
            this.modelValue[0].split("/")[1] - 1,
            this.modelValue[0].split("/")[0]
          ),
          this.modelValue[1]
            ? new Date(
                +this.modelValue[1].split("/")[2] - 543,
                this.modelValue[1].split("/")[1] - 1,
                this.modelValue[1].split("/")[0]
              )
            : undefined,
        ];
        this.setDate(dateSet);
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
    } else {
      this.setDate();
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
    modelValue(newData, old) {
      if (!this.modelValue) {
        this.date = "";
      } else {
        if (this.modelValue[0]) {
          if (newData[0] != old[0]) {
            let dateSet = [
              new Date(
                +this.modelValue[0].split("/")[2] - 543,
                this.modelValue[0].split("/")[1] - 1,
                this.modelValue[0].split("/")[0]
              ),
              this.modelValue[1]
                ? new Date(
                    +this.modelValue[1].split("/")[2] - 543,
                    this.modelValue[1].split("/")[1] - 1,
                    this.modelValue[1].split("/")[0]
                  )
                : "",
            ];
            this.setDate(dateSet);
          }
        }
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

.component-date-range {
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
</style>
