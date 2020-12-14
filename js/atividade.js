<html>
<head>
<title>JavaScript</title>
<script type="text/javascript">
    function aviao(){
document.form1.nome2[0].checked = true;
document.form1.nome2[1].checked = false;
document.form1.nome2[2].checked = false;
}
 
function carro(){
document.form1.nome2[0].checked = false;
document.form1.nome2[1].checked = true;
document.form1.nome2[2].checked = false;
}
 
function helicop(){
document.form1.nome2[0].checked = false;
document.form1.nome2[1].checked = false;
document.form1.nome2[2].checked = true;
}
</script>
</head>
<body>
 
<form name="form1">
Escolha sua compra:
</form>
Avião:<input type=radio name=nome value="a" onClick="aviao()">
Carro:<input type=radio name=nome value="b" onClick="carro()">
Helicóptero:<input type=radio name=nome value="c" onClick="helicop()"> </br>
Cor disponível:
</br>
Branco:<input type=checkbox name=nome2 value="a">
Preto:<input type=checkbox name=nome2 value="b">
Verde:<input type=checkbox name=nome2 value="c"> 
</form>
</body>
</html>


