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
                            <td><label id="userIdLabel" class="text">{{ clonedUser.userid }}</label></td> 
                        </tr>
                        <tr>
                            <td width="150px">Environment:</td>
                            <td>
                                <select style="width:300px" name="environmentSelect" id="environmentSelect" 
                                class="form-control" v-model="clonedUser.environment"
                                :class="{ invalid: !clonedUser.environment }"
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
                                class="form-control" v-model="clonedUser.role"
                                :class="{ invalid: !clonedUser.role }"
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
                                class="form-control" v-model="clonedUser.profile"
                                :class="{ invalid: !clonedUser.profile }"
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
                                class="form-control" v-model="clonedUser.mode" 
                                :class="{ invalid: !clonedUser.mode }"
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
    props: {
        userid: String,
        user: {
            userid: String,
            isActive: false,
            environment: String,
            role: String, 
            profile: String, 
            mode: String,
        }
    },
    data() {
        return {
            clonedUser: { ...this.user },
            message: "User object status...",
            isValid: false
        };
    },
    created() {
        alert('UserProfile object created ' + this.userid);
    },
    methods: {
        DisplayUserObjectStatus() {
            this.message = JSON.stringify(this.clonedUser, null, '\n');
        },
        ValidateForSave(){
            if (this.clonedUser.environment &&
                this.clonedUser.role &&
                this.clonedUser.profile &&
                this.clonedUser.mode) {
                this.isValid = true;
            }
            else {
                this.isValid = false;
            }
        },

    },
    watch: {
        clonedUser: {
            immediate: true,
            deep: true,
            handler() {
                this.DisplayUserObjectStatus();
                this.ValidateForSave();
            }
        },
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