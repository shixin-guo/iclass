<template>
  <div class="global-nav">
    <div class="navContainer">
    	<el-row type="flex" class="row-bg" justify="space-between">
			  <el-col :span="6"><a href="/" >OurClass! Rocker</a></el-col>
			  <el-col :span="6">
			  	<ul class="menu-list">
		    		<router-link to= "/news" >头条</router-link>
		    		<router-link to= "/questions" >问答</router-link>
		    		<router-link to= "/events" >活动</router-link>
            <router-link to= "/jobs" >求职</router-link>
		    	</ul>
			  </el-col>
        <el-col :span= "6"></el-col>
        <el-col :span= "6">
          <signUpOrLogIn></signUpOrLogIn>
        </el-col>
    	</el-row>      
    </div>
    
  </div>
</template>

<script>
import signUpOrLogIn from './signUpOrLogIn';
import iCnews from './iCnews';

export default {
  name: 'global-nav',
  components: {
    signUpOrLogIn,
    iCnews,
  },

} ;
</script>

<style>
  .global-nav{
    background-color: #1D8CE0;
  	box-sizing: border-box;
  	text-align: center;
  }
  .global-nav .navContainer{
  	height: 45px;
  }
  .global-nav {
    font-size: 16px;
    line-height:45px;
  }
  .global-nav ul{

  }
  .global-nav ul li{
  	display: inline-block;
    position: relative;
    margin: 0 10px 0 10px;

  }
  
</style>