<template>
  <div :style="this.style" :class="[this.class, 'component-date']">
    <Field v-model="data" type="text" :name="name" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    <Datepicker :modelValue="date"
                @update:modelValue="setDate"
                ref="dp" 
                cancelText="Reset" 
                selectText="Ok"  
                :monthChangeOnScroll="false" 
                :enableTimePicker="false" 
                :format="format"
                locale="th" 
                :name="name+'Date'"
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
      <template #year-overlay-value="{ text }">{{ (+text + +543) }}</template>
      <template #input-icon>
        <div class="group-image" :class="[disabled? 'none-pointer' : '']">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_84_793" fill="white">
              <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V7H4.5V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM4.5 8.5H19.5V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V13.125V8.5Z"/>
            </mask>
            <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V7H4.5V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM4.5 8.5H19.5V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V13.125V8.5Z" fill="#98A2B3"/>
            <path d="M19.5 7V9H21.5V7H19.5ZM4.5 7H2.5V9H4.5V7ZM4.5 8.5V6.5H2.5V8.5H4.5ZM19.5 8.5H21.5V6.5H19.5V8.5ZM6.25 1C3.35946 1 1 3.35946 1 6.25H5C5 5.5686 5.5686 5 6.25 5V1ZM1 6.25V17.75H5V6.25H1ZM1 17.75C1 20.6405 3.35946 23 6.25 23V19C5.5686 19 5 18.4314 5 17.75H1ZM6.25 23H17.75V19H6.25V23ZM17.75 23C20.6405 23 23 20.6405 23 17.75H19C19 18.4314 18.4314 19 17.75 19V23ZM23 17.75V6.25H19V17.75H23ZM23 6.25C23 3.35946 20.6405 1 17.75 1V5C18.4314 5 19 5.5686 19 6.25H23ZM17.75 1H6.25V5H17.75V1ZM6.25 6.5H17.75V2.5H6.25V6.5ZM17.75 6.5C17.6954 6.5 17.6275 6.4747 17.5764 6.42358C17.5253 6.37246 17.5 6.30458 17.5 6.25H21.5C21.5 4.1704 19.8296 2.5 17.75 2.5V6.5ZM17.5 6.25V7H21.5V6.25H17.5ZM19.5 5H4.5V9H19.5V5ZM6.5 7V6.25H2.5V7H6.5ZM6.5 6.25C6.5 6.30458 6.4747 6.37246 6.42358 6.42358C6.37246 6.4747 6.30458 6.5 6.25 6.5V2.5C4.1704 2.5 2.5 4.1704 2.5 6.25H6.5ZM4.5 10.5H19.5V6.5H4.5V10.5ZM17.5 8.5V17.75H21.5V8.5H17.5ZM17.5 17.75C17.5 17.6954 17.5253 17.6275 17.5764 17.5764C17.6275 17.5253 17.6954 17.5 17.75 17.5V21.5C19.8296 21.5 21.5 19.8296 21.5 17.75H17.5ZM17.75 17.5H6.25V21.5H17.75V17.5ZM6.25 17.5C6.30458 17.5 6.37246 17.5253 6.42358 17.5764C6.4747 17.6275 6.5 17.6954 6.5 17.75H2.5C2.5 19.8296 4.1704 21.5 6.25 21.5V17.5ZM6.5 17.75V13.125H2.5V17.75H6.5ZM6.5 13.125V8.5H2.5V13.125H6.5Z" fill="#667085" mask="url(#path-1-inside-1_84_793)"/>
          </svg>
        </div>
      </template>
    </Datepicker>
    <ErrorMessage :name="name" v-slot="{ message }"> 
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'component-date',
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
      return `${day > 9 ? day : '0' + day}/${month > 9 ? month : '0' + month}/${year}`;
    }
    const setDate = (value) => {
      date.value = value;
      context.emit('update:modelValue', value ? format(value) : '')
      data.value = value ? format(value) : ''
    }
    const minMaxDate = (status, value) => {
      if (status == 'minDate') {
        newMinDate.value = value ? new Date(+value.split("/")[2] - 543, value.split("/")[1] - 1, value.split("/")[0]) : '';
      }
      if (status == 'maxDate') {
        newMaxDate.value = value ? new Date(+value.split("/")[2] - 543, value.split("/")[1] - 1, value.split("/")[0]) : ''
      }
    }
    return {
      date,
      dp,
      format,
      setDate,
      data,
      minMaxDate,
      newMinDate,
      newMaxDate,
      first
    };
  },
  props: ['name', 'placeholder', 'modelValue', 'disabled', 'rules', 'minDate', 'maxDate', 'class', 'style', 'errorMessage'],
  mounted() {
    if (this.modelValue) {
      this.setDate(this.modelValue ? (new Date(+this.modelValue.split("/")[2] - 543, this.modelValue.split("/")[1] - 1, this.modelValue.split("/")[0])) : '')
    }
    if (this.minDate) {
      this.minMaxDate('minDate', this.minDate)
    }

    if (this.maxDate) {
      this.minMaxDate('maxDate', this.maxDate)
    }
  },
  watch: {
    'minDate'() {
      this.minMaxDate('minDate', this.minDate)
    },
    'maxDate'() {
      this.minMaxDate('maxDate', this.maxDate)
    },
    'data'(newData, oldData) {
      if (newData || oldData) {
        this.$emit('change', newData)
      }
    },
    'modelValue'() {
      if (!this.modelValue) {
        this.date = ''
        this.data = ''
      } else {
        this.setDate(this.modelValue ? (new Date(+this.modelValue.split("/")[2] - 543, this.modelValue.split("/")[1] - 1, this.modelValue.split("/")[0])) : '')
      }
    }
  }
}
</script>

<style lang="scss">
  $color-disabled: #F2F4F7;
  $color-text: #101828;
  $color-placeholder: #98A2B3;
  $color-border: #E4E7EC;
  $color-background: #ffffff;

  .component-date {
    width: 100%;

    .group-image {
      display: flex;
      align-items: center;
      width: 24px;
      height: 24px;
      margin-right: 16px;
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
    background: #FFFFFF;
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

  .dp-custom-input {
    font-size: 16px;
    font-weight: 400;
    color: $color-text;
    border: 1px solid $color-border;
    border-radius: 8px;
    background-color: $color-background;
    width: 100%;
    height: 44px;
    padding: 11px 16px 10px;
  }

  .dp__input_icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    left: auto;
  }

  .dp__clear_icon {
    background-color: #ffffff;
    padding: 3px;
    right: 45px;
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
