import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//assetsUtils
import assetsUtils from './assets/assetsUtils.js'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Validate
import {setupValidate} from './assets/setupValidate.js'

//Datepicker
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//loading
import loading from "@/components/loading/index.vue";

//modal
import modal from "@/components/modal/index.vue";
import modal2 from "@/components/modal/index2.vue";

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

//sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//routes
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';
const router = createRouter({
  history: createWebHistory(),
  routes: routes.routes
});

const app = createApp(App)

setupValidate(app) // Validate
app.provide('assetsUtils', assetsUtils); //assetsUtils
app.component('Datepicker', Datepicker); //Datepicker
app.component('cpnLoading', loading); //loading
app.component('cpnModal', modal); //modal
app.component('cpnModal2', modal2); //modal
app.component('cpnTable', table); //table
app.component('cpnPagination', pagination); //pagination
app.component('cpnInput', input); //input
app.component('cpnSelect', select); //select
app.component('cpnAutoComplete', autoComplete); //autoComplete
app.component('cpnTextArea', textArea); //textArea
app.component('cpnCheckbox', checkbox); //checkbox
app.component('cpnRadio', radio); //radio
app.component('cpnDatepicker', date); //date
app.component('cpnDatepickerRange', dateRange); //dateRange
app.component('cpnTime', time); //time
app.component('cpnToggleSwitch', toggleSwitch); //toggleSwitch
app.component('cpnInputTags', inputTags); //inputTags

app.use(router) //router
app.use(VueSweetalert2); //VueSweetalert2

app.mount('#app')