<?php
    include 'cn.php'; 

    $vnome=$_POST['txtnome'];

	$vemail=$_POST['txtemail'];

	$vsexo=$_POST['txtsexo'];

    $vtelefone=$_POST['txttelefone'];

    $vexperiencia=$_POST['txtexperiencia'];

    $vformacao=$_POST['txtformacao'];

    $vnascimento=$_POST['txtnasc'];

    $vlinguas=$_POST['txtlinguas'];

    $vestado=$_POST['txtestado'];
	
	$cn->query("insert into curriculo(Nome,Email,Sexo,telefone,Experiencia,Formacao,DataDeNascimento,
    Linguas,Estado)values('$vnome','$vemail','$vsexo','$vtelefone','$vexperiencia','$vformacao','$vnascimento',
    '$vlinguas','$vestado')") or die(mysql_error());
	
    echo "<script language=javascript> window.alert('Cadastro efetuado com sucesso'); </script>";
	
	echo "<script language=javascript>window.history.back();</script>";


?>