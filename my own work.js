<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #A{
        background-color: black;
        font-style: oblique;
        color:yellow;
        animation: a 5s reverse infinite;
    }
    #A:hover{
        background-color: white;
        font-style:inherit;
    }
    @keyframes a {
        0%{
            background-color: brown;
        }
        25%{
            background-color: aquamarine;
        }
        50%{
            background-color: blueviolet;
        }
        75%{
            background-color: aqua;
        }
        100%{
            background-color: blue;}
        }
    p{
        background-color: aqua;
        font-style: inherit;
        color:black;
        animation: a 5s reverse infinite;
    }
    #hi{
        background-color: bisque;
        color: blue;
    }
    #hi:hover{
        background-color:red ;
        color: aliceblue;
    }
    #HI{
        background-color: white;
        color: black;
    }
    #HI:hover{
        background-color: gold;
        color: black;
    }

<script>


</style>
<body>
<h1 id="A"> My Name is Mg Nyan Min Htet</h1>
<h1 id="hi">ID select</h1>
<p1 id="HI">live in Mawlamyine. I am 17 years old. My mother is Daw Kyu Kyu Khaning. My father is U aye Min.</p>
</body>
</html>