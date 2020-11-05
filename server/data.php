<?php
$obIterator = new FilesystemIterator("img");
$rxIterator = new RegexIterator($obIterator,'/\.(jpg|jpeg)$/');
$arFileList = array();
foreach($rxIterator as $obFile):
    $arFileList[] = $obFile->getFilename();
endforeach;
//Выводим результат
// var_dump($arFileList); 

$json = json_encode($arFileList);
$file = fopen('data.json','w+');
fwrite($file, $json);
fclose($file);  
?>