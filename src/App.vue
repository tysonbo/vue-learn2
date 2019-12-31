<template>
  <div id="app">

    
        <table style="width:100%;height:100%">
      <tr class="banner-row">
        <td id="bannerCell" colspan=5>    
          <bannernavbar :userid=defaultid />
        </td>
      </tr> 
      <tr>
        <td class="side-nav-selector">
          <span @click="resizeLeftNav">&#8801;</span>
          </td>
        <td id="leftNavCell" class="nav-cell" style="width:160px;">
          <leftnavbar id="leftNavComp" style="display:inline-block" />
        </td>
        <td id="mainContentCell" style="padding:10px;">
          <router-view/>
        </td>
        <td id="rightNavCell" class="nav-cell" style="width:160px;">
          <rightnavbar id="rightNavComp" class="side-nav-bar" style="display:inline-block" />
        </td>
        <td class="side-nav-selector">
          <span @click="resizeRightNav">&#8801;</span>
          </td>
      </tr>
      <tr>
        <td id="footerCell" class="footer-cell" colspan=5 >    
          
        </td>
      </tr> 
    </table> 
  </div>
</template>

<script>
import bannernavbar from './components/NavBar/BannerNavBar'
import leftnavbar from './components/NavBar/LeftNavBar'
import rightnavbar from './components/NavBar/RightNavBar'

var defaultuserid = "A999999"

export default {
  name: 'app',
  data() {
    return {
      defaultid: defaultuserid,
      defaultUser: { 
        userid: defaultuserid, 
        isActive:false, 
        environment: '',
        role: '', 
        profile: '', 
        mode: '',
      },
      currentLeftNavWidth: 150,
      currentRightNavWidth: 150,
    }
  },
  components: {
    bannernavbar,
    leftnavbar,
    rightnavbar
  },
  methods: {
    resizeLeftNav() {
            this.currentLeftNavWidth = this.currentLeftNavWidth == 2 ? 150 : 2; 
            var leftdisplay = this.currentLeftNavWidth < 150 ? "none;" : "inline-block";
            var leftnavcell = document.getElementById('leftNavCell');
            var leftnavcomp = document.getElementById('leftNavComp');
            if (leftnavcell && leftnavcomp){
                leftnavcell.setAttribute("style", "width:" + this.currentLeftNavWidth.toString() + "px;");
                leftnavcomp.setAttribute("style", "display:" + leftdisplay);
            }
      },
    resizeRightNav() {
            this.currentRightNavWidth = this.currentRightNavWidth == 2 ? 150 : 2; 
            var rightdisplay = this.currentRightNavWidth < 150 ? "none;" : "inline-block";
            var rightnavcell = document.getElementById('rightNavCell');
            var rightnavcomp = document.getElementById('rightNavComp');
            if (rightnavcell && rightnavcomp){
                rightnavcell.setAttribute("style", "width:" + this.currentRightNavWidth.toString() + "px;");
                rightnavcomp.setAttribute("style", "display:" + rightdisplay);
            }
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.banner-row {
  background-color:black; 
  height:62px; 
  padding:0px;
  margin:0px;
}

.side-nav-selector {
  width:20px;
  background:black;
  color: white; 
  font-size: x-large;
}

.nav-cell {
  background-color:#111111; 
  position: relative;
  /* transition:ease-in-out 0.5s; */
}

.side-nav-bar {
  /* transition:ease-in-out 1s; */
}

.footer-cell {
  background-color:#dddddd;
  height:65px;
}  

</style>
