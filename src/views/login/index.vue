<script setup>
import { reactive, ref } from "vue";
import { loadFull } from "tsparticles";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store";


let userStore = useUserStore()
console.log(userStore)
let router = useRouter();

let particlesOptions = reactive({
  background: {
    color: {
      value: "#02dea1",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
});

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

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

const onSubmit = () => {
  console.log(ruleFormRef.value);
  ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
        router.push({
            path: '/'
        })
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesOptions"
  />
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
      <el-input v-model="form.password" width="80px" />
    </el-form-item>

    <el-form-item>
      <el-button class="login-btn" type="primary" @click="onSubmit"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.el-form {
  width: 420px;
}

.login-btn {
  width: 100%;
}
</style>