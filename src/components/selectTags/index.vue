<template>
  <div class="component-input-tags" ref="dropdownInputTags">
    <Field v-model="dataLength" type="text" :name="name" v-slot="{ field }" :rules="rules">
      <input v-bind="field"  v-show="false">
    </Field>
    <div class="group-input-tags pointer" :class="{'disabled':disabled}" @click="toggleDropdown()" >
      <div class="tags-box" v-for="(item, index) in data" :key="index">{{item.name}} <i class="bi bi-x-lg icon-close pointer" @click="disabled ? '' : $event.stopPropagation(); data.splice(index,1)"></i></div>
      <div @click="disabled ? '' : toggleDropdown()" class="chevron" :class="[disabled? 'disabled' : 'pointer']">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <ErrorMessage :name="name" v-slot="{ message }">
      <p class="message-error">{{this?.errorMessage || (message ? message : this.defaultMessageError)}}</p>
    </ErrorMessage>
    <div class="dropdown-content" :style="dropdown ? 'display: block; overflow: auto;' : 'display: none;'">
      <div v-for="(item, index) in optionSelect" :key="index">
        <div class="line" v-show="index != 0"></div>
        <div class="dropdown-list" @click="select(item)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component-input-tags',
  data() {
    return {
      dropdown: false,
      data: [],
      value: ''
    }
  },
  props: ['name', 'placeholder', 'modelValue', 'class', 'style', 'disabled', 'rules', 'errorMessage', 'optionSelect', 'flagSearch'],
  computed: {
    dataLength() {
      return this.data.length > 0 ? this.data.length.toString() : ''
    }
  },
  methods: {
    handleFocusout(e) {
      if (this.flagSearch) {
        this.value = ''
      } else {
        if (e.target.value) {
          if (!this.data.some(el => el.name === e.target.value)) {
            this.data.push({name: e.target.value, value: ''})
            this.$emit('update:modelValue', this.data)
          }
          this.value = ''
        }
        e.stopPropagation();
        e.preventDefault();  
        e.returnValue = false;
        e.cancelBubble = true;
        return false
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    focusoutBtn (e) {
      if (this.$refs.dropdownInputTags) {
        let target = e.target
        if ((this.$refs.dropdownInputTags !== target) && !this.$refs.dropdownInputTags.contains(target)) {
          if (this.dropdown) {
            let check = true
            this.optionSelect.filter(row => {
              if (row.name == this.value && this.value) {
                check = false
                this.value = ''
                if (!this.data.some(el => el.name === row.name)) {
                  this.data.push(row)
                  this.$emit('update:modelValue', this.data)
                }
              }
            })
            if (check) {
              this.value = ''
            }
          }
          this.dropdown = false
        }
      }
    },
    select(data) {
      if (!this.data.some(el => el.name === data.name)) {
        this.data.push(data)
        this.$emit('update:modelValue', this.data)
      }
      this.value = ''
      this.dropdown = false
    }
  },
  mounted () {
    document.addEventListener('click', this.focusoutBtn)
    if (this.modelValue) {
      this.data = this.modelValue
    }
  },
  watch: {
    'modelValue'() {
      if (!this.modelValue) {
        this.data = []
      } else {
        this.data = this.modelValue
      }
    },
  },
}
</script>
<style scoped lang="scss">
  $color-disabled: #F2F4F7;
  $color-text: #101828;
  $color-placeholder: #98A2B3;
  $color-border: #E4E7EC;
  $color-background: #ffffff;
  $color-tag-box: #E4EDFF;
  .component-input-tags {
    position: relative;
    display: inline-block;
    width: 100%;

    .group-input-tags {
      display: flex;
      // flex-wrap: wrap;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 44px;
      width: 100%;
      border: 1px solid $color-border;
      border-radius: 8px;
      background-color: $color-background;
      position: relative;
      align-items: center;
      padding: 0px 16px;

      .tags-box {
        background: $color-tag-box;
        padding: 2px 12px 2px 16px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        height: 26px;
        margin-right: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;

        
        .icon-close {
          margin-top: 2px;
          margin-left: 5px;
          font-size: 14px;
        }
      }

      .chevron {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }

    input:focus {
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
      border-radius: 10px;
      left: 0;
      right: 0;
      margin-top: 8px;
      overflow:hidden;
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
        border-bottom: 1px solid #D8D8D8;
        height: 0px !important;
        opacity: 1 !important;
        margin: 0px !important;
        padding: 0px !important;
      }
    }
  }
</style>