<template>
  <div id="popup">
    <div class="header">
      <!-- Render Networks component -->
      <Networks />
      <img src="../../assets/logo.png" />
    </div>

    <el-divider></el-divider>
    <div class="account">
      <h5>Account</h5>
      <!-- Render Account component -->
      <Account />
      <!-- Render CreateAccount component -->
      <CreateAccount />
    </div>

    <el-collapse>
      <el-collapse-item title="Transfer" name="1">
        <!-- Render Transfer component -->
        <Transfer />
      </el-collapse-item>
      <el-collapse-item title="Transactions" name="2">
        <!-- Render Transactions component -->
        <Transactions />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Networks from './Networks.vue';
import CreateAccount from './CreateAccount.vue';
import Account from './Account.vue';
import Transactions from './Transactions.vue';
import Transfer from './Transfer.vue';

export default {
  components: { Networks, CreateAccount, Account, Transactions, Transfer },
};
</script>

<style>
#popup {
  display: flex;
  flex-direction: column;
  width: 410px;
  margin: auto;
}
.header img {
  width: 200px;
  display: block;
  margin: auto;
}
button {
  width: 140px;
  margin: 4px 10px;
}
</style>
