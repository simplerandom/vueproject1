<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name">
        <i slot="prefix" class="el-input__icon el-icon-date"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.passwd" :type="type">
        <i slot="prefix" class="iconfont icon-laoshi"></i>
        <i slot="suffix" class="iconfont icon-laoshi1" @click="change"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      type: "password",
      form: {
        passwd: "123",

        name: "lee",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      var form = this.$refs.form;
      console.log(form);
    },
    change() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    }
  }
};
</script>
<style lang="css">
.el-form {
  width: 600px;
  border: 1px red solid;
  margin: 100px auto;
  height: 500px;
  padding-top: 5px;
  padding-right: 20px;
}
.el-form-item {
  margin-top: 80px;
}
</style>