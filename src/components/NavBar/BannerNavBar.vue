<template>
    <div id="nav-bar" class="nav-bar" >
      <span style="color:white; font-size:medium;float:right;margin:15px">UserID: {{ userid }}</span>
    </div>
</template>,
<script>

export default {
    name: 'bannernavbar',
    props: {
        userid: String,
    },

}

</script>