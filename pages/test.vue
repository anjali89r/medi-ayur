<template>
    <div id="app">
        <ul id="menu">
            <li data-menuanchor="page1" class="active"><a href="#page1">Section 1</a></li>
            <li data-menuanchor="page2"><a href="#page2">Section 2</a></li>
            <li data-menuanchor="page3"><a href="#page3">Section 3</a></li>

        </ul>


        <full-page :options="options" id="fullpage">
            <div class="section">
                <h3>Section 1</h3>
            </div>
            <div class="section">
                <div class="slide">
                    <h3>Slide 2.1</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div class="section">
                <h3>Section 3</h3>
            </div>
        </full-page>
    </div>
</template>

<script>
import 'fullpage.js/dist/fullpage.min.css'
  export default {
    name: 'app',
    data () {
      return {
        options: {


          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    }

  }
</script>

<style>
ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }
    #menu-line{
       position:absolute;
       bottom:-4px;
       left:0;
       width:159px;
       height:2px;
       background:#fff;
       }
    #menu{
       position:fixed;
       top:200px;
       /* right:20px; */
       z-index:70;
       -webkit-font-smoothing:antialiased;
       -moz-font-smoothing:antialiased;
       letter-spacing:1px;
       font-size:1.1em;
       }
    #menu li{
       display:inline-block;
       margin:10px 0;
       position:relative;
       }
    #menu a{
       color:#fff;
       padding:0 1.1em 1.1em 1.1em;
       text-decoration: none;
       }
    #menu li.active a:after{
       content:'';
       margin:0 1.1em 0 1.1em;
       height:2px;
       background:#fff;
       display:block;
       position:absolute;
       bottom:-6px;
       left:0;
       right:0;
       display:block;
       }
</style>
