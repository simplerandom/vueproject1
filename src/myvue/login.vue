<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name">
        <i slot="prefix" class="el-input__icon el-icon-date"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.name">
        <i slot="prefix" class="iconfont icon-laoshi1"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
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
      console.log("submit!");
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