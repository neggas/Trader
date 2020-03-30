<template>
    <div id="app">
       <AppHeader></AppHeader>
       <hr>
       <keep-alive>
            <router-view></router-view>
       </keep-alive>
        
    </div>
</template>
 
<script>
    import AppHeader from './components/header';
   
    export default{
        data(){
            return{

            }
        },
        components:{
            AppHeader,
        }
    }
</script>

<style scoped>
    hr{
        color: aliceblue;
       margin:30px;
    }
</style>