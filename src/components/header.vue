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
                    <li><button>End-Day</button></li>
                    <li>
                        <select>
                            <option disable="true">Save&Load</option>
                            <option>Save</option>
                            <option>Load</option>
                        </select>
                    </li>
                    <h4>Funds:10.000$</h4>
                </ul>
           </div>
        </nav>
    </div>
</template>



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