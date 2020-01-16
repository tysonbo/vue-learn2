<template>
  <div id="app">
  
    <div id="outercontainer" class="app-container">
      <div class="outercontent">
        <header style="background-color: #356356"><bannernavbar/></header>
        <div class="content-fill">
          <table style="width:100%; height: 100%">
            <tr>
              <td class="side-nav-selector">
                <span @click="resizeLeftNav">&#8801;</span>
                </td>
              <td id="leftNavCell" class="nav-cell" style="width:160px;">
                <leftnavbar id="leftNavComp" style="display:inline-block" />
              </td>
              <td id="mainContentCell" class="scrollable" style="padding:10px;">
                <router-view/>
              </td>
              <td id="rightNavCell" class="nav-cell" style="width:160px;">
                <rightnavbar id="rightNavComp" class="side-nav-bar" style="display:inline-block" />
              </td>
              <td class="side-nav-selector">
                <span @click="resizeRightNav">&#8801;</span>
                </td>
            </tr>
          </table>
        </div>
        <footer style="background-color: #3b3b3b; height: 100px; color: white">This is the footer</footer>
      </div>
    </div>
    <!-- <table style="width:100%;height:100%">
      <tr class="banner-row">
        <td id="bannerCell" colspan=5>     
          <bannernavbar/>
        </td>
      </tr> 

      <tr>
        <td id="footerCell" class="footer-cell" colspan=5 >    
          
        </td>
      </tr> 
    </table>  -->
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
  created () {
       if (window.addEventListener) {
        window.addEventListener("message", this.onMessage, false)
      }
      else if (window.attachEvent) {
        window.attachEvent("onmessage", this.onMessage, false);
      }
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
      },
      onMessage(message) {
          // Check sender origin to be trusted
        
          alert("message.data " + message.data);
          
          alert("I reached the vue app with data: " + message.data);
          var infodiv = document.getElementById("info");
          infodiv.innerHTML = message.data;
      }
    }

    
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: blue;
}

.app-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.outercontent {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.innercontent {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
header {
  align-content: flex-start;
}

.content-fill {
  flex: 1;
}

.scrollable {
  overflow-y: scroll;
}

footer {
  align-content: flex-end;
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
