import { createApp } from "vue";
import App from "./App.vue";

//assetsUtils
import assetsUtils from "@/assets/assetsUtils.js";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// Validate
import { setupValidate } from "./assets/setupValidate.js";

//Datepicker
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

//loading
import loading from "@/components/loading/index.vue";

//modal
import modal from "@/components/modal/index.vue";

//table
import table from "@/components/table/index.vue";

//pagination
import pagination from "@/components/table/pagination.vue";

//input
import input from "@/components/input/index.vue";

//select
import select from "@/components/select/index.vue";

//autoComplete
import autoComplete from "@/components/autoComplete/index.vue";

//textArea
import textArea from "@/components/textArea/index.vue";

//checkbox
import checkbox from "@/components/checkbox/index.vue";

//radio
import radio from "@/components/radio/index.vue";

//date
import date from "@/components/date/index.vue";

//dateRange
import dateRange from "@/components/date/dateRange.vue";

//time
import time from "@/components/time/index.vue";

//toggleSwitch
import toggleSwitch from "@/components/toggleSwitch/index.vue";

//inputTags
import inputTags from "@/components/inputTags/index.vue";

//selectTags
import selectTags from "@/components/selectTags/index.vue";

//inputFile
import inputFile from "@/components/inputFile/index.vue";

//example
import example from "@/view/example/index.vue";

//sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//routes
import router from "./routes.js";

//axios
import axios from "axios";

//pdf
import html2pdf from "html2pdf.js";

//excel
import * as XLSX from "xlsx";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
const axiosInstance = axios.create({
  withCredentials: true,
});

const app = createApp(App);

setupValidate(app); // Validate
app.component("Datepicker", Datepicker); //Datepicker
app.component("cpnLoading", loading); //loading
app.component("cpnModal", modal); //modal
app.component("cpnTable", table); //table
app.component("cpnPagination", pagination); //pagination
app.component("cpnInput", input); //input
app.component("cpnSelect", select); //select
app.component("cpnAutoComplete", autoComplete); //autoComplete
app.component("cpnTextArea", textArea); //textArea
app.component("cpnCheckbox", checkbox); //checkbox
app.component("cpnRadio", radio); //radio
app.component("cpnDatepicker", date); //date
app.component("cpnDatepickerRange", dateRange); //dateRange
app.component("cpnTime", time); //time
app.component("cpnToggleSwitch", toggleSwitch); //toggleSwitch
app.component("cpnInputTags", inputTags); //inputTags
app.component("cpnSelectTags", selectTags); //selectTags
app.component("cpnInputFile", inputFile); //inputFile
app.component("cpnExample", example); //example

app.use(router); //router
const options = {
  confirmButtonText: "ยืนยัน",
  confirmButtonColor: "#007bff",
  cancelButtonText: "ปิด",
  cancelButtonColor: "#dc3545",
  denyButtonText: "ตกลง",
  denyButtonColor: "#28a745",
  showConfirmButton: false,
};

app.use(VueSweetalert2, options); //VueSweetalert2

app.config.globalProperties.showLoading = (flag) => {
  document.querySelector(`.loadingPublic`).style.display = flag
    ? "block"
    : "none";
};
app.config.globalProperties.errorMessage = (error) => {
  Swal.fire({
    title: error,
    icon: "error",
    showCancelButton: true,
    cancelButtonText: "ปิด",
    cancelButtonColor: "#dc3545",
    showConfirmButton: false,
  }).then((result) => {
    if (!result.isConfirmed && error == "invalid or expired token") {
      router.push({ name: "login" });
    }
  });
};
app.config.globalProperties.assetsUtils = assetsUtils; //assetsUtils
app.config.globalProperties.html2pdf = html2pdf; //pdf
app.config.globalProperties.XLSX = XLSX; //excel
app.config.globalProperties.axios = { ...axiosInstance }; //axios
app.config.globalProperties.permission = {};

const globals = app.config.globalProperties;
export { globals };

app.mount("#app");
