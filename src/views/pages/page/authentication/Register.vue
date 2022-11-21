<template>
<!-- Main Wrapper -->
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="../../../../assets/img/logo-white.png" alt="Logo">
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<h1>Register</h1>
								<p class="account-subtitle">Access to our dashboard</p>
								
								<!-- Form -->
								<div class="form-group">
										<input class="form-control" type="text" placeholder="Name">
									</div>
								<Form class="register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="form-group">
                  <Field name="email" type="text" class="form-control" placeholder="Email" :class="{ 'is-invalid': errors.email }" />
                  <div class="invalid-feedback">{{errors.email}}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group password-icon2">
                  <Field name="password" type="password" class="form-control pass-input" placeholder="Password" :class="{ 'is-invalid': errors.password }" />
                  <div class="invalid-feedback">{{errors.password}}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="form-group password-icon2">
                  <Field name="confirmpassword" type="password" class="form-control pass-input" placeholder="Confirm Password" :class="{ 'is-invalid': errors.confirmpassword }" />
                  <div class="invalid-feedback">{{errors.confirmpassword}}</div>
                  <div class="emailshow text-danger" id="confirmpassword"></div>
                </div>
                
                <div class="form-group mb-0">
                  <button class="btn btn-primary btn-block" type="submit">Register</button>
                </div>
              </Form>
								<!-- /Form -->
								
								<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div>
								
								<!-- Social Login -->
								<div class="social-login">
									<span>Register with</span>
									<a href="javascript:void(0);" class="facebook"><i class="fab fa-facebook-f"></i></a><a href="javascript:void(0);" class="google"><i class="fab fa-google"></i></a>
								</div>
								<!-- /Social Login -->
								
								<div class="text-center dont-have">Already have an account? <router-link to="/">Login</router-link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Form, Field } from 'vee-validate';
import { router } from '../../../../router';
import VueRouter from 'vue-router'
import * as Yup from 'yup';
export default {
  components: {
        Form,
        Field,
    },
setup() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Confirm password is required'),
        });
      const onSubmit = (values) => {   
      if(values.password === values.confirmpassword) {
      let Rawdata = localStorage.getItem('storedData');
      let Pdata= [];
      Pdata = JSON.parse(Rawdata);    
       const Eresult = Pdata.find(({ email }) => email == values.email);  
       if(Eresult){ 
        document.getElementById("email").innerHTML = "This email are already exist"
       } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push('/index')
          localStorage.setItem('storedData', jsonData);
        } 
      }  else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching"
      }
    };
        return {
            schema,
            onSubmit
        };

    }


}
</script>