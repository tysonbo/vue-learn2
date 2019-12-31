<template>
    <div id="mainLNContainer" >
        <div class="nav-table">
        <div class="nav-element standard-theme" data-description="Search by Phone Number">
            <div class="nav-element-inner">
                <div class="title">Phn</div>
                <div class="description">Phone Search</div>
            </div>
        </div>
        <div class="nav-element standard-theme" data-description="Search by Policy Number">
            <div class="nav-element-inner">
                <div class="title">Pol</div>
                <div class="description">Policy Search</div>
            </div>
        </div>
        <div class="nav-element standard-theme" data-description="Search by Claim or Quote">
            <div class="nav-element-inner">
                <div class="title">Clm</div>
                <div class="description">Claim Search</div>
            </div>
        </div>    
        </div> 
    </div>
</template>

<script>
export default {
    name: "leftnavbar"
}

</script>

<style scoped>
.nav-table {
  display: grid;
  grid-template-columns: repeat(1, 120px);
  grid-template-rows: repeat(3, 95px);
  grid-gap: 10px;
  margin: 10px;
  max-width: 150px;
  justify-content:center;
  background-color: white;
}

.nav-element {
  padding: 4px;
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
  left: 125%;
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