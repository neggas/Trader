<template>
    <div id="home">
        <div class="wrapper">
            <Stock></Stock>
            <Stock></Stock>
            <Stock></Stock>
            <Stock></Stock>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock";
    export default{
        components:{Stock}
    }
</script>

<style scoped>
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    .wrapper{
        width:80%;
        margin:30px auto;
        height:300px;
        display:flex;
        flex-wrap:wrap;
    }

    .wrapper #goal{
        padding:20px;
    }

    .wrapper h4{
        padding:5px;
        margin-left:20px;
    }

     .wrapper #funds{
        position:relative;
        top:100px;
        left:20px;

         
     }
</style>