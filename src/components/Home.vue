<template>
    <div id="home">
        <div class="wrapper">
            <h2 id="goal">Trade of view your portfolio</h2>

            <h4>You may save and load your data</h4>
            <h4>Click begin to begin another day</h4>

            <h2 id="funds">{{this.funds|fundFormat}}</h2>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        filters:{
            fundFormat(value){
                return value.toLocaleString() + "$"
            }
        },
        computed:{
             ...mapGetters([
               'funds',
           ]),
        }
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
        border:1px solid #ccc;
        height:300px;
    }

    .wrapper #goal{
        padding:20px;
    }

    .wrapper #funds{
        position:relative;
        top:100px;
        left:20px;
    }

    .wrapper h4{
        margin-left:30px;
        font-size: 1.1em;
        line-height:30px;
    }

</style>