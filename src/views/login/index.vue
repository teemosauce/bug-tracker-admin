<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store";
import { login, getInfo } from "@/api/user";
import { ElMessage } from "element-plus";

let userStore = useUserStore();
console.log(userStore);
let router = useRouter();

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const ruleFormRef = ref();

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const handleLogin = () => {
  console.log(ruleFormRef.value);
  ruleFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      let result;
      try {
        result = await login(form);
        console.log(result);
        router.push({
          path: "/",
        });
      } catch ({ message }) {
        ElMessage.error(message);
      }
    }
  });
};
</script>

<template>
  <div class="page-login">
    <!-- <h1>BUG追踪管理系统</h1> -->
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      label-width="120px"
      size="default"
      status-icon
      width="420px"
    >
      <el-form-item label="用户名" prop="username" width="80px">
        <el-input v-model="form.username" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" width="80px" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.el-form {
  width: 420px;
}

::v-deep .el-form-item__label {
  color: #fff;
}

.login-btn {
  width: 100%;
}

.page-login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    125deg,
    #069bb8,
    #00b4bb,
    #20cbb0,
    #6dde9a,
    #b1ee82
  );
  background-size: 400%;
  animation: bg-moveable 20s infinite;
}

@keyframes bg-moveable {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>