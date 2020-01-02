<template>
    <div id="content">
        <h2>Create New User Profile</h2>
        <hr />

        <div id="userDetails" class="container-fluid">

            <h3 class="h3 mb-2 text-gray-800">User Details</h3>

            <div class="card shadow mb-4">
                <div class="card-body">
                    <table style="width: 100%; margin-bottom: 15px;">
                        <tr>
                            <td width="150px">UserId:</td>
                            <td><label id="userIdLabel" class="text">{{ user.userid }}</label></td> 
                        </tr>
                        <tr>
                            <td width="150px">Environment:</td>
                            <td>
                                <select style="width:300px" name="environmentSelect" id="environmentSelect" 
                                class="form-control" v-model="user.environment"
                                :class="{ invalid: !user.environment }"
                                >
                                    <option disabled value>Select an Environment</option>
                                    <option value="dev">Development</option>
                                    <option value="qa">Testing</option>
                                    <option value="prod">Production</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td width="150px">Role:</td>
                            <td>
                                <select style="width:300px" name="roleSelect" id="roleSelect" 
                                class="form-control" v-model="user.role"
                                :class="{ invalid: !user.role }"
                                >
                                    <option disabled value>Select a Role</option>
                                    <option value="callTaker">Call Taker</option>
                                    <option value="processor">Processor</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td width="150px">Business Profile:</td>
                            <td>
                                <select style="width:300px" name="profileSelect" id="profileSelect" 
                                class="form-control" v-model="user.profile"
                                :class="{ invalid: !user.profile }"
                                >
                                    <option disabled value>Select a Profile</option>
                                    <option value="ca">Commercial Auto</option>
                                    <option value="csr">Customer Service</option>
                                    <option value="sales">Sales</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td width="150px">Mode:</td>
                            <td>
                                <select style="width:300px" name="modeSelect" id="modeSelect" 
                                class="form-control" v-model="user.mode" 
                                :class="{ invalid: !user.mode }"
                                >
                                    <option disabled value>Select a Mode</option>
                                    <option value="internal">Internal</option>
                                    <option value="external">External</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                    </table>
                    <a id="btnCreateUserProfile" href="#" 
                    class="btn btn-success btn-icon-split" 
                    :class="{ disabled: !this.isValid }"
                    >
                        <span class="icon text-white-50">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Save</span>
                    </a>
                    <div class="notification is-info">
                        <pre>{{ message }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>    
 </template>,

 <script>
 
 export default { 
    name: 'userprofile',
    data() {
        return {
        user: {
            userid: "",
            isActive: false,
            environment: "",
            role: "", 
            profile: "", 
            mode: "",
        },          message: "User object status...",
            isValid: false
        };
    },
    created() {
        this.user = this.$store.getters.getuserbyid(this.currentUser);
    },
    methods: {
        DisplayUserObjectStatus() {
            this.message = JSON.stringify(this.user, null, '\n');
        },
        ValidateForSave(){
            if (this.user.environment &&
                this.user.role &&
                this.user.profile &&
                this.user.mode) {
                this.isValid = true;
            }
            else {
                this.isValid = false;
            }
        },
    },
    watch: {
        user: {
            immediate: true,
            deep: true,
            handler() {
                this.DisplayUserObjectStatus();
                this.ValidateForSave();
            }
        },
        currentUser: {
            immediate: false,
            handler() {
                this.user = this.$store.getters.getuserbyid(this.currentUser);
            }
        }
    },
    computed: {
      currentUser() {
        return this.$store.state.currentUser;
      }
    },
 }

</script>,

<style scoped>
.notification pre {
  background-color: inherit;
  color: white;
  font-size: 16px;
  line-height: normal;
}

select.invalid {
    border-left: 4px solid red; 
}

.is-info {
    background: linear-gradient(-90deg, #84cf6a, #16c0b0);
    padding: 10px;
    margin-top: 10px;
}

</style>