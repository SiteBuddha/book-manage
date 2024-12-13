<template>
  <div class="w-[100vw] h-[100vh] flex justify-center items-center">
    <div
      class="w-[400px] h-[300px] border-2 border-black flex justify-center items-center"
    >
      <el-form
        ref="loginRef"
        label-position="right"
        label-width="auto"
        :model="loginForm"
        style="width: 300px"
        :rules="rules"
      >
        <el-form-item required label="用户名" prop="userName">
          <el-input v-model="loginForm.userName" />
        </el-form-item>
        <el-form-item required label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm(loginRef)">重置</el-button>
          <el-button type="primary" @click="submitForm(loginRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const loginForm = ref({ userName: '', password: '' })
const loginRef = ref(null)

const rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
  ],
})

const submitForm = async (formEle) => {
  if (!formEle) return
  await formEle.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = async (formEle) => {
  if (!formEle) return
  formEle.resetFields()
}
</script>

<style></style>
