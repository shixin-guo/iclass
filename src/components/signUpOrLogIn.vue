<template>
    <div class="signUpOrLogIn">
      <el-button type = "text" @click = "signUpOrLogIn">登录/注册</el-button>    
      <el-form class= "formSignUpOrLogIn" v-if= 'ruleForm.hasClick' :rules = "rule" :model = "ruleForm" ref= "ruleForm" label-width="100px" label-position= 'left'>
        <el-form-item label="学号" prop= "user">
          <el-input v-model= "ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label= "密码" prop= "pass">
          <el-input type= "password" v-model= "ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label= "确认密码" prop= "checkPass" v-if = "checkPassIfSignUp">
          <el-input type= "password" v-model= "ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form> 
    </div>
</template>
<script>
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default {
  name: 'signUpOrLogIn',
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入学号'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
          // 验证密码
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一样'));
      } else {
        // 注册
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        pass: '',
        checkPass: '',
        hasClick: 0,
        checkPassIfSignUp: '',
      },
      // element-ui 的 自定义验证表单规则
      rule: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        user: [
          { validator: validateUser, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    signUpOrLogIn() {
      this.ruleForm.hasClick = (this.ruleForm.hasClick + 1) % 2;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 简单验证, 然后查询数据库
          // 查询成功，关闭注册框，并弹出消息
          this.signUpOrLogIn();
          this.$message({
            message: ' 我们一起玩耍吧 ！！！',
            type: 'success',
          });
        } else {
          return false;
        }
        return true;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
  .formSignUpOrLogIn{
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -10em;
    margin-left: -10em;
    width: 20em;
    min-height: 21em;
    z-index: 99;
    padding: 1.5em;
  }
</style>