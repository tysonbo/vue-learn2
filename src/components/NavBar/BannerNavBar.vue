<template>
    <div id="nav-bar" class="nav-bar" >
    <select v-model="selecteduser">
      <option v-for="(item, key) in userids" :value="item" :key="key">
        {{item}}
      </option>
    </select> 
      <span style="color:white; font-size:medium;float:right;margin:15px">UserID: {{ currentUser }}</span>
    </div>
</template>,
<script>

export default {
    name: 'bannernavbar',
    created() {
        //this.loadUsers();
    }, 
    methods: {
        loadUsers() {
            this.$store.dispatch('getusersaction');
        },
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        userids() {
            return this.$store.state.users.map(a => a.userid);
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
        selecteduser: {
            get: function() {
                return this.userid;
            }, 
            set: function(value) {
                this.$store.dispatch('setcurrentuseraction', value);
            }
        }
    }
}

</script>