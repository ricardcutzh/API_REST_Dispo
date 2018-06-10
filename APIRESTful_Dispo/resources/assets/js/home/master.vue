<template> 
    <!-- App Root Element -->
    <div id="app">
      <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar></f7-statusbar>
      <!-- Your main view, should have "main" prop -->
      <f7-view main>
        <!-- Initial Page -->
        <f7-page>
          <!-- Top Navbar-->
          <f7-navbar title="Awesome App"></f7-navbar>
          <!-- Toolbar-->
          <f7-toolbar>
            <f7-link>Link 1</f7-link>
            <f7-link>Link 2</f7-link>
          </f7-toolbar>
          <!-- Page Content -->
          <p>Page content goes here</p>
          <f7-button fill>Filled-Color Button</f7-button>
          <f7-link href="/about/">About App</f7-link>
        </f7-page>
      </f7-view>
    </div>

</template>

<script>
//import {f7View,f7Page,f7Navbar, f7Toolbar,f7Link,f7Statusbar, f7List, f7ListItem } from 'framework7-vue-2.2.5';
 
export default {
    /* components: {
         f7View,
        f7Page,
        f7Navbar,
        f7Toolbar,
        f7Link,
        f7Statusbar,   
      f7List,
      f7ListItem,
      f7Navbar,
    },
 */
  data () {
    return {
    }
  },
  methods: {

  },
  created () {
    //this.$log.info("hla "); 
   // this.$router.push({ name: "reporte" });
    // this.$http.get('/users').then(({data}) => console.log(data))
  }
}
</script>

