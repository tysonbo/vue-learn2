<template>
    <div id="rightNav" style="width:160px">
      <router-link to="/">        
        <div class="nav-element standard-theme" data-description="Return to the starting point">
            <div class="nav-element-inner">
                <div class="title">Home</div>
                <div class="description">Home Page</div>
            </div>
        </div></router-link> |<br />
      <router-link to="/about">About</router-link> |<br/>
      <router-link 
        :to="{ name: 'userprofile', params: {id: userid } }">        
        <div class="nav-element standard-theme" data-description="Search by Claim or Quote">
            <div class="nav-element-inner">
                <div class="title">Clm</div>
                <div class="description">Claim Search</div>
            </div>
        </div></router-link> |<br/>
    </div>
</template>

<script>
export default {
    name: "rightnavbar"
}
</script>

<style scoped>
#rightNav {
  padding: 0px;
}

#rightNav a {
  font-weight: bold;
  color: #2c3e50;
}

#rightNav a.router-link-exact-active {
  color: #42b983;
}

.nav-element {
  padding: 4px;
  margin-left: 15px;
  width: 130px;
  position: relative;
  z-index: 1;
  cursor: default;
  transition: all 0.3s ease;
  border-radius: 6px;
}
.nav-element .nav-element-inner {
  background: #202e38;
  padding: 10px 15px;
  width: calc(100%-30px);
  height: calc(100%-20px);
  transition: inherit;
  border-radius: 6px;
}
.nav-element .title {
  font: 700 34px/1.3 "Poppins", sans-serif;
  margin: 0.3em 0 0;
  transition: 0.8s ease 600ms;
}
.nav-element .description {
  font: 500 12px "Poppins", sans-serif;
  margin-top: -0.2em;
}
.nav-element:after {
  z-index: 10;
  content: attr(data-description);
  background: #adecdf;
  color: #333;
  width: 180px;
  position: absolute;
  top: 80%;
  left: -75%;
  opacity: 0;
  transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  height: auto;
  font-size: 12px;
  line-height: 1.4;
  padding: 10px;
  margin: 0 0 0 -50px;
  border-radius: 6px;
  border-color: #012921;
  border-width: 1px;
  text-align: center;
}
.nav-element:hover {
  transform: scale(1.12);
  z-index: 10;
}
.nav-element:hover .nav-element-inner {
  background: transparent;
}
.nav-element:hover .title,
.nav-element:hover .description {
  -webkit-text-fill-color: #222;
}
.nav-element:hover:after {
  top: 50%;
  opacity: 1;
}

a.nav-element {
  cursor: pointer;
}

.standard-theme {
  background: linear-gradient(to bottom right, #84cf6a 0%, #16c0b0 100%);
}
.standard-theme .title,
.standard-theme .description {
  background: -webkit-linear-gradient(#84cf6a, #16c0b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>