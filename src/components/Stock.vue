<template>
    <div class="stock">
        <div class="title">
            <h3>BMW</h3><small>(price:300)</small>
        </div>
        <div class='submit-div'>
            <input type="number">
            <button>Buy</button>
        </div>
    </div>
</template>

<style scope>
     *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    .stock{
        margin:20px;
        border: 1px solid blue;
        width:320px;
        height:100px;
        background-color:#e0e0ec;
        border-radius:5px 5px 0px 0px;
        padding:5px;
    }

    .stock .title{
        display:flex;
        background-color:#3e3e7e;
        width:318px;
        position:relative;
        right:5px; 
        font-weight:600px;
        bottom:5px;
        border-radius:5px 5px 0px 0px;
        color:white;
    }

    .stock .title small{
        line-height:30px;
        font-weigth:600px;
    }

    .submit-div{
        padding:15px;
    }

    .submit-div input[type="number"]{
        height:20px;
        margin-right:35px;
        width:200px;
        position:relative;
        right:15px;
    }

    .submit-div button{
        position:relative;
        left:235px;
        bottom:30px;
    }
</style>