import {
  Field,
  Form,
  ErrorMessage,
  defineRule,
  FieldArray,
} from "vee-validate"; /* eslint-disable */
import { min, max } from "@vee-validate/rules"; /* eslint-disable */

export function setupValidate(app) {
  app.component("Field", Field);
  app.component("Form", Form);
  app.component("FieldArray", FieldArray);
  app.component("ErrorMessage", ErrorMessage);

  let messageError = "*กรุณากรอกข้อมูล";
  // defineRule('confirmed', confirmed);
  defineRule("max_value", (value, [other]) => {
    if (+value > +other) {
      return `น้อยกว่าเท่ากับ ${other}`;
    }
    return true;
  });

  defineRule("min_value", (value, [other]) => {
    if (+value < +other) {
      return `มากกว่าเท่ากับ ${other}`;
    }
    return true;
  });

  defineRule("max", (value, [other]) => {
    if (value.length != other) {
      return `กรุณากรอกข้อมูล ${other} หลัก`;
    }
    return true;
  });

  defineRule("confirmed", (value, [other]) => {
    if (value !== other) {
      return `กรุณากรอกรหัสผ่านให้ตรงกัน`;
    }
    return true;
  });

  defineRule("required", (value) => {
    if (!value || !value.length) {
      return messageError;
    }
    return true;
  });

  defineRule("email", (value) => {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      return "*กรุณากรอกอีเมลที่ถูกต้อง";
    }
    return true;
  });

  defineRule("password", (value) => {
    if (!value.match("^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$")) {
      return "*กรุณากรอก a-z, 0-9 รวม8ตัว";
    }
    return true;
  });

  defineRule("notDuplicateTable", (value, other) => {
    let { table, key, data } = JSON.parse(other);
    let all_row_data = [];
    let duplicate = 0;
    table.filter((item) => {
      let data_dash = "";
      let dash = "";
      key.filter((item_key) => {
        data_dash += dash + item[item_key];
        dash = "-";
      });
      all_row_data.push(data_dash);
    });
    all_row_data.filter((item) => {
      if (item == data) {
        duplicate += 1;
      }
    });
    if (duplicate > 1) {
      return `ข้อมูลซ้ำกัน`;
    }
    return true;
  });

  app.config.globalProperties.defaultMessageError = messageError;
  app.config.globalProperties.onInvalidSubmit = ({ errors }) => {
    const firstError = Object.keys(errors)[0];
    document.querySelector(`[name="${firstError}"]`).focus();

    if (document.querySelector(`[name="${firstError + "Select"}"]`)) {
      document.querySelector(`[name="${firstError + "Select"}"]`).focus();
    }
    if (document.querySelector(`[name="${firstError + "File"}"]`)) {
      document.querySelector(`[name="${firstError + "File"}"]`).focus();
    }
    if (document.querySelector(`[name="${firstError + "InputTags"}"]`)) {
      document.querySelector(`[name="${firstError + "InputTags"}"]`).focus();
    }
    if (document.querySelector(`[name="${firstError + "Date"}"]`)) {
      document
        .querySelector(`[name="${firstError + "Date"}"]`)
        .scrollIntoView({ block: "center" });
    }
    if (document.querySelector(`[name="${firstError + "DateRange"}"]`)) {
      document
        .querySelector(`[name="${firstError + "DateRange"}"]`)
        .scrollIntoView({ block: "center" });
    }
    if (document.querySelector(`[name="${firstError + "Time"}"]`)) {
      document
        .querySelector(`[name="${firstError + "Time"}"]`)
        .scrollIntoView({ block: "center" });
    }
  };
}
