<template>
    <div class="stock">
        <div class="title">
            <h3>{{port.name}}</h3><small>(price:{{port.price}}-{{port.time}})</small>
        </div>
        <div class='submit-div'>
            <input type="number" v-model="nb_buy">
            <button @click="sell(port)">Sell</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex';
    export default {
        props:['port'],
        data(){
            return{
                nb_buy:'',
            }
        },
        computed:{
             ...mapGetters([
               'funds',
               'portfolioStock',
           ]),
        },
        methods:{
            ...mapMutations([
               'sellArticle'
            ]),
              sell(article){

                if(this.nb_buy > 0 && this.nb_buy <= article.time){
                    const nombRest = article.time-this.nb_buy
                    this.sellArticle(this.nb_buy*article.price)
                    this.nb_buy = '';

                    if(nombRest === 0){
                        this.portfolioStock.splice(this.portfolioStock.indexOf(article),1);
                    }else{
                        return article.time = nombRest
                    }
                    
                }else{
                    alert("invalide input");
                }
            }
        }
    }
</script>

<style scope scoped>
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    .stock{
        margin-left:80px;
        margin-top:25px;
        border: 1px solid blue;
        width:420px;
        height:100px;
        background-color:#e0e0ec;
        border-radius:5px 5px 0px 0px;
        padding:5px;
    }

    .stock .title{
        display:flex;
        background-color:#0e2405;
        width:418px;
        position:relative;
        right:5px; 
        font-weight:600px;
        bottom:5px;
        border-radius:5px 5px 0px 0px;
        color:white;
    }

    .stock .title small{
        line-height:30px;
        font-weight:600px;
    }

    .submit-div{
        padding:15px;
    }

    .stock button{
        position: relative;
        left:100px;
        border:1px solid black;
        background-color: #0e2405;;
        color:white;
        padding:5px;
        padding-left:10px;
        padding-right:10px;
        box-shadow:1px 1px 1px black;
        cursor:pointer;
    }

    .submit-div input[type="number"]{
        height:20px;
        margin-right:35px;
        width:200px;
        position:relative;
        right:15px;
    }

   
</style>