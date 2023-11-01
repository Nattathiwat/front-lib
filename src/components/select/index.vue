<template>
  <div class="component-select" ref="dropdownSelect">
    <Field v-model="data" type="text" :name="name" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    
    <button @click="toggleDropdown()" 
            type="button" 
            :style="this.style"
            :class="[this.class, 'flex-right-dropdown', (data ? 'colorBlack' : '')]"
            :name="name+'Select'"
            :disabled="disabled"
            >
      <div class="name-dropdown">{{data ? data : placeholder}}</div>
    </button>
    <div @click="disabled ? '' : toggleDropdown()" :class="[disabled? 'disabled' : 'pointer']">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
    <div class="dropdown-content" :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'">
      <div>
        <div class="dropdown-List firstSelect" v-show="firstSelect?.show" @click="select({value: '', name: ''})">{{firstSelect?.name}}</div>
      </div>
      <div v-for="(item, index)  in optionSelect" :key="index">
        <div class="line" v-show="index != 0 || firstSelect?.show"></div>
        <div class="dropdown-List" @click="select(item)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component-select',
  data() {
    return {
      dropdown: false,
      data: ''
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'class', 'style', 'disabled', 'rules', 'optionSelect', 'firstSelect', 'errorMessage'],
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    focusoutBtn (e) {
      if (this.$refs.dropdownSelect) {
        let target = e.target
        if ((this.$refs.dropdownSelect !== target) && !this.$refs.dropdownSelect.contains(target)) {
          this.dropdown = false
        }
      }
    },
    select(data) {
      this.$emit('update:modelValue', data.value)
      this.dropdown = false
      this.data = data.name
    },
    setDataValue() {
      this.optionSelect.filter(row => {
        if (row.value == this.modelValue) {
          this.data = row.name
          this.$emit('update:modelValue', row.value)
          this.$emit('change', row.value)
        }
      })
    }
  },
  mounted () {
    document.addEventListener('click', this.focusoutBtn)
    if (this.modelValue) {
      this.setDataValue()
    }
  },
  watch: {
    'modelValue'() {
      if (!this.modelValue) {
        this.data = ''
        this.$emit('change', '')
      } else {
        this.setDataValue()
      }
    },
    'optionSelect'() {
      if (this.modelValue) {
        this.setDataValue()
      }
    }
  },
}
</script>
<style scoped lang="scss">
  $color-disabled: #F2F4F7;
  $color-text: #101828;
  $color-placeholder: #98A2B3;
  $color-border: #E4E7EC;
  $color-background: #ffffff;

.component-select {
  position: relative;
  display: inline-block;
  width: 100%;

  .flex-right-dropdown:disabled, .flex-right-dropdown[readonly] {
    background-color: $color-disabled;
    opacity: 0.7;
  }

  .flex-right-dropdown {
    color: $color-text ;
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

    .name-dropdown {
      font-size: 16px;
      color: $color-placeholder;
      opacity: 0.7;
      text-align: left;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .colorBlack .name-dropdown {
    color: $color-text;
    padding-right: 10px;
    opacity: 1;
  }
  
  .pointer, .disabled {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 16px;
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
    margin-top: 8px;
    overflow:hidden;
    max-height: 420px;
    
    .firstSelect {
      opacity: 0.7;
    }

    .dropdown-List {
      padding: 12px 16px 10px 16px;
      min-height: 44px;
      width: 100%;
      cursor: pointer;
    }

    .line {
      border-bottom: 1px solid #D8D8D8;
      height: 0px !important;
      opacity: 1 !important;
      margin: 0px !important;
      padding: 0px !important;
    }
  }
}
</style>