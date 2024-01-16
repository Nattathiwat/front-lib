<template>
  <div class="content-form">
    <h1 class="mb-4 mt-2">Form Controls</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <h2 class="name mb-4">Input</h2>
            <div class="group-input">
              <label class="name">Text Value: {{ input1 }}</label>
              <cpn-input
                v-model="input1"
                name="input1"
                class=""
                style=""
                type="text"
                :disabled="input11"
                :phoneFormatDash="true"
                @keyup="keyup"
                @keypress="keypress"
                @keydown="keydown"
                @focusin="focusin"
                @focusout="focusout"
                @enterValue="enterValue"
                placeholder="Text"
              />
            </div>
            <div class="group-input">
              <label class="name">Search Value: {{ input12 }}</label>
              <cpn-input
                v-model="input12"
                name="input12"
                class=""
                style=""
                type="text"
                :searchFlag="true"
                :disabled="input11"
                @keyup="keyup"
                @keypress="keypress"
                @keydown="keydown"
                @focusin="focusin"
                @focusout="focusout"
                @searchClick="search"
                placeholder="Search"
              />
            </div>
            <div class="group-input">
              <label class="name">Select Value: {{ input2 }}</label>
              <cpn-select
                v-model="input2"
                name="input2"
                class=""
                style=""
                :disabled="input11"
                :firstSelect="firstSelect"
                @changeValue="change"
                :optionSelect="optionSelect"
                placeholder="Select"
              />
            </div>
            <div class="group-input">
              <label class="name">Auto complete Value: {{ input3 }}</label>
              <cpn-autoComplete
                v-model="input3"
                name="input3"
                class=""
                style=""
                type="text"
                :disabled="input11"
                :firstSelect="firstSelect"
                :optionSelect="optionSelect2"
                @changeValue="change"
                @keyupData="keyupData"
                @keypress="keypress"
                @keydown="keydown"
                @focusin="focusin"
                @focusout="focusout"
                placeholder="Auto complete"
              />
            </div>
            <div class="group-input">
              <label class="name">Text Area Value: {{ input4 }}</label>
              <cpn-textArea
                v-model="input4"
                name="input4"
                class=""
                style=""
                rows="4"
                :disabled="input11"
                @keyup="keyup"
                @keypress="keypress"
                @keydown="keydown"
                @focusin="focusin"
                @focusout="focusout"
                @enterValue="enterValue"
                placeholder="Text Area "
              />
            </div>
            <div class="group-input">
              <label class="name">Checkbox Value: {{ input5 }}</label>
              <cpn-checkbox
                v-model="input5"
                name="input5"
                class=""
                style=""
                label="checbox click!!!"
                :disabled="input11"
                @changeValue="change"
              />
            </div>
            <div class="group-input">
              <label class="name">Radio Value: {{ input6 }}</label>
              <cpn-radio
                v-model="input6"
                name="input6"
                class=""
                style=""
                value="1"
                label="one"
                :disabled="input11"
                @changeValue="change"
              />

              <cpn-radio
                v-model="input6"
                name="input6"
                class="mt-2"
                style=""
                value="2"
                label="two"
                :disabled="input11"
                @changeValue="change"
              />
            </div>
            <a href="https://vue3datepicker.com/" target="_blank">Vue datepicker</a>
            <div class="group-input">
              <label class="name">
                Datepicker Value: {{ input7 }} {{ input7 && input8 ? "-" : "" }}
                {{ input8 }}
              </label>
              <div class="d-flex w-100">
                <cpn-datepicker
                  v-model="input7"
                  name="input7"
                  class=""
                  style=""
                  :maxDate="input8"
                  @changeValue="change"
                  :disabled="input11"
                  placeholder="date start"
                />

                <cpn-datepicker
                  v-model="input8"
                  name="input8"
                  class="ms-2"
                  style=""
                  :minDate="input7"
                  @changeValue="change"
                  :disabled="input11"
                  placeholder="date end"
                />
              </div>
            </div>
            <div class="group-input">
              <label class="name">Datepicker Range Value: {{ input9 }}</label>
              <cpn-datepickerRange
                v-model="input9"
                name="input9"
                class=""
                style=""
                @changeValue="change"
                :disabled="input11"
                placeholder="date range"
              />
            </div>
            <div class="group-input">
              <label class="name">Time Value: {{ input10 }}</label>
              <cpn-time
                v-model="input10"
                name="input10"
                class=""
                style=""
                @changeValue="change"
                :disabled="input11"
                placeholder="time"
              />
            </div>
            <div class="group-input">
              <label class="name">ToggleSwitch Value: {{ input11 }}</label>
              <cpn-toggleSwitch
                v-model="input11"
                name="input11"
                class=""
                style=""
                :disabled="false"
                @changeValue="change"
              />
            </div>
            <div class="group-input">
              <label class="name">Input Tag Value: {{ input13 }}</label>
              <cpn-input-tags
                v-model="input13"
                name="input-tag"
                :flagSearch="true"
                :optionSelect="optionSelect13"
                @keyup="inputTag"
                @changeValue="change"
                :disabled="input11"
              />
            </div>
            <div class="group-input">
              <label class="name">Select Tag Value: {{ input14 }}</label>
              <cpn-select-tags
                v-model="input14"
                name="select-tag"
                :optionSelect="optionSelect13"
                @keyup="inputTag"
                @changeValue="change"
                :disabled="input11"
              />
            </div>
            <div class="group-input">
              <label class="name">File Value: {{ input15 }}</label>
              <cpn-inputFile
                          v-model="input15"
                          :name="'file-image'"
                          placeholder=""
                          accept="image/png, image/jpg, image/jpeg"
                          :disabled="input11"
                        />
            </div>
            <img :src="input15.preview" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "content-form",
  data() {
    return {
      input1: "",
      input2: "",
      firstSelect: { show: true, name: "none" },
      optionSelect: [
        { name: "select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1", value: "1" },
        { name: "select2", value: "2" },
        { name: "select3", value: "3" },
      ],
      input3: "",
      optionSelect2: [
        { name: "select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1select1", value: "1" },
        { name: "select2", value: "2" },
        { name: "select3", value: "3" },
      ],
      input4: "",
      input5: true,
      input6: "1",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: false,
      input12: "",
      input13: [],
      input14: [],
      input15: {
          name: "",
          file: "",
          preview: "",
        },
      optionSelect13: [
        { name: "select1", value: "1" },
        { name: "select2", value: "2" },
        { name: "select3", value: "3" },
      ],
    };
  },
  methods: {
    enterValue(data) {
      console.log("enter", data);
    },
    inputTag(e) {
      this.optionSelect13 = [
        { name: "select1", value: "1" },
        { name: "select2", value: "2" },
        { name: "select3", value: "3" },
      ];
      this.optionSelect13 = this.optionSelect13.filter((row) => {
        return (
          row.name
            .toString()
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) > -1
        );
      });
    },
    keyupData(data) {
      this.optionSelect2 = [
        { name: "select1", value: "1" },
        { name: "select2", value: "2" },
        { name: "select3", value: "3" },
      ];
      this.optionSelect2 = this.optionSelect2.filter((row) => {
        return (
          row.name.toString().toLowerCase().indexOf(data.toLowerCase()) > -1
        );
      });
    },
    change(data) {
      console.log("change", data);
    },
    keyup(data) {
      console.log("keyup", data.key);
    },
    keydown(data) {
      console.log("keydown", data.key);
    },
    keypress(data) {
      console.log("keypress", data.key);
    },
    focusin(data) {
      console.log("focusin", data);
    },
    focusout(data) {
      console.log("focusout", data);
    },
    search(data) {
      console.log("search", data);
    },
  },
};
</script>
<style lang="scss">
.content-form {
  .card {
    width: 100%;
    height: auto;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    background-color: #fff;
    border: 0px;
    padding: 22px 29px;

    .group-input {
      margin-bottom: 22px;

      .name {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
