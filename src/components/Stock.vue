<template>
    <div class="stock">
        <div class="title">
            <h3>{{article.name}}</h3><small>(price:{{article.price}})</small>
        </div>
        <div class='submit-div'>
            <input type="number" placeholder="how many" v-model="nb_buy">
            <button 
                @click="buy(article)" 
                :disabled="disableActive" 
                :class="{wrong:disableActive}">buy</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex';
    export default{

        props:['article'],
        data(){
            return{
              nb_buy:'',
              active:false
            }
        },
        methods:{
            ...mapMutations([
                'buyArticle',
                'setTimes',
                'endDay'
            ]),
            buy(article){

                if(this.nb_buy*article.price <= this.funds && this.nb_buy > 0){

                    if(this.portfolioStock.length > 0){

                        if(this.portfolioStock.includes(article)){
                        article.time += parseInt(this.nb_buy);
                        }else{
                            article.time = parseInt(this.nb_buy);
                            this.portfolioStock.push(article);
                        }
                    }else{
                        article.time = parseInt(this.nb_buy);
                        this.portfolioStock.push(article);
                    }
                    this.buyArticle(this.nb_buy*article.price)
                    this.nb_buy = '';
                }else{
                    alert("invalide input");
                }
            }
        },
        computed:{
           
           ...mapGetters([
               'funds',
               'portfolioStock',
           ]),

           disableActive(){
              
              if(this.nb_buy <= 0 || this.nb_buy == ''){
                  return !this.active;
              }else{
                  return this.active;
              }
           }
          
        }
    }
</script>



<style scoped>
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
        background-color:#3e3e7e;
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
        background-color: #3e3e7e;
        color:white;
        padding:5px;
        padding-left:10px;
        padding-right:10px;
        box-shadow:1px 1px 1px black;
        cursor:pointer;
    }

     button.wrong{
        border:1px solid rgb(221, 12, 12);
        background-color: #e23f47;
    }

    .submit-div input[type="number"]{
        height:20px;
        margin-right:35px;
        width:200px;
        position:relative;
        right:15px;
    }

   
</style>