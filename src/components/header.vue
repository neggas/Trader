<template>
    <div id="navbar">
        <nav id="nav">
           <div id="left">
                <ul id="navbar-nav nav-left">
                    <router-link 
                        tag="li" 
                        id="home" 
                        to="/"
                        ><a>Stock Trader</a></router-link>
                    <router-link 
                        tag="li" 
                        to="/portfolio"
                        ><a>Portfolio</a></router-link>
                    <router-link 
                    tag="li" 
                    to="/stocks"
                    ><a>Stocks</a></router-link>
                </ul>
           </div>
           <div id="right">
                <ul id="navbar-nav nav-right">
                    <li><button @click="endDay">End-Day</button></li>
                    <li>
                        <select v-model="selected">
                            <option disable value="">Save&Load</option>
                            <option value="Save" @click="saveAndLoad"><button>Save</button></option>
                            <option value="Load" @click="saveAndLoad"><button>Load</button></option>
                        </select>
                    </li>
                    <h4>{{funds|fundFormat}}</h4>
                </ul>
           </div>
        </nav>
    </div>
</template>

<script>

    import {mapGetters,mapMutations} from 'vuex';
    export default {
        data(){
            return{
                selected:'',
                saveArticle:[],
            }
        },
        
        computed:{
            ...mapGetters([
                'funds',
                'articles',
                'savedArticle'
            ])
        },
        filters:{
            fundFormat(value){
                return value.toLocaleString() + "$"
            }
        },
        methods:{
            ...mapMutations([
                'endDay',
                'setArticle'
            ]),

            endDay(){
                //on change le prix des article en ajoutant ou en retirant un pourcentage
                let chances = [1,0];
                this.articles.map((article)=>{
                    let chanceIndex = Math.floor(Math.random()*chances.length);
                    let chance = chances[chanceIndex];
                    if(chance == 0){
                        let pourcentage = Math.floor(Math.random()*50)
                        return article.price -= Math.floor(article.price*(pourcentage/100));
                    }else{
                        let pourcentage = Math.floor(Math.random()*50)
                        return article.price += Math.floor(article.price*(pourcentage/100));
                    }
                   
               })
            },
            saveAndLoad(){
                //ici on charge ou enregistre les donnes  en fonction de selected

                if(this.selected === 'Save'){
                  
                  return localStorage.setItem('data',JSON.stringify(this.articles));
                 
                }else{ 
                    this.saveArticle = JSON.parse(localStorage.getItem('data'));
                    this.setArticle(this.saveArticle);
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

    ul{
        list-style:none;
        line-height:40px;
        display:flex;
    }

    #navbar{
        width:100%;
    }

    nav{
        width:100%;
        background-color:#3e3e7e;
        height:50px;
        display:flex;
    }

    li{
        color:white;
        cursor:pointer;
    }

    #left{
        height:100%;
        width:40%;
    }
    #left li{
        margin-left:20px;
        font-size:1.1em;
    }

    #left li a{
      color:white;
      text-decoration:none;
      outline:none;
    }

    #left #home{
        font-size:1.3em;
    }
    #right{
        height:100%;
        width:30%;
        margin-left:30%;
        color:white;
    }

    #right li{
        font-size:1.1em;
        color:white;
        margin-left:40px;
    }

    #right button{
        border:none;
        background-color:green;
        border:none;
        color:white;
        background-color:#3e3e7e;
        cursor:pointer;

    }

    #right button:hover{
        background-color:none;
    }

    #right select{
        border:none;
        outline:none;
        padding-left:10px;
        margin-right:30px;
        background-color:#3e3e7e;
        color:white;

    }
</style>