<template>
    <div class="container">
        <div class="container-bg"></div>
        <div class="login-container">
            <div class="title">Login</div>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
                label-width="auto" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input class="input-style" v-model="ruleForm.username" type="text" autocomplete="off"
                        placeholder="用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input class="input-style" v-model="ruleForm.password" type="password" autocomplete="off"
                        placeholder="密  码" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Login
                    </el-button>
                </el-form-item>
            </el-form>
            <div class="divider"></div>
            <div class="fast-login">
                <!-- <div class="fast-login-item red"></div> -->
                <div class="fast-login-item green">
                    <SvgIcon iconName="icon-weixin" :size='"32px"' :color="'#ffffff'"></SvgIcon>
                    
                </div>
                <div class="fast-login-item blue">
                    <SvgIcon iconName="icon-qq" :size='"32px"' :color="'#ffffff'"></SvgIcon>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { $Login, $RegUser } from '../api/admin'

//创建路由器对象
const router = useRouter()

const ruleFormRef = ref<FormInstance>()


const validateUserName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else {
        callback()
    }
}
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: 'admin',
    password: '123456',
})

const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ validator: validateUserName, trigger: 'blur' }],
    password: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            router.push('/index')
            // $Login(ruleForm).then(res => {
            //     console.log(res)
            //     if (res.code === 200) {
            //         sessionStorage.setItem('token', res.token);
            //         ElMessage({
            //             message: '登录成功',
            //             type: 'success',
            //         })
            //         router.push('/index')
            //     }else {
            //         ElMessage({
            //             message: res.msg,
            //             type: 'error',
            //         })
            //     }
            // }).catch(err => {
            //     ElMessage({
            //             message: JSON.stringify(err),
            //             type: 'error',
            //         })
            // })
        } else {
            console.log('提交失败')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped lang="scss">
::v-deep(.el-input__inner) {
    color: #FFFFFF;
}

::v-deep(.el-input__wrapper) {
    background-color: transparent !important;
    padding: 8px 30px !important;
    border-radius: 30px;
}

::v-deep(.el-form-item__content) {
    width: 320px;
}

::v-deep(.el-button) {
    width: 320px;
    padding: 12px 20px !important;
    border-radius: 30px;
    height: 100% !important;
    font-size: 24px !important;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100vw;
    height: 100vh;
    position: relative;


    .container-bg {
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background: linear-gradient(-45deg, #fd746c, #ff9068, #48c6ef, #6f86d6);
        background-size: 400% 400%;
        animation: gradient-animation 15s ease infinite;
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: inherit;
            width: inherit;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            opacity: 0.8;
        }
    }

    .login-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        background-color: rgba(14, 19, 43, 1);
        box-shadow: 10px 10px 5px #888888;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        padding: 40px 0;

        .title {
            font-family: df;
            letter-spacing: 5px;
            font-size: 32px;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 20px;
        }

        .divider {
            border: 1px solid #FFFFFF;
            width: 80%;
            margin: 10px 0 20px;
        }

        .fast-login {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .fast-login-item {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .red {
                background-color: red;
            }

            .green {
                background-color: #02cd5a;
            }

            .blue {
                background-color: #26a5f0;
            }
        }
    }
}

@keyframes gradient-animation {
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