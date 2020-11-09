<?php
$obIterator = new FilesystemIterator("img");
$rxIterator = new RegexIterator($obIterator,'/\.(jpg|jpeg)$/');

class File {
    var $name;
    var $time;
}

$fileObj = array();
foreach($rxIterator as $obFile):
    $fileList = new File;
    $fileList->name = $obFile->getFilename();
    $fileList->time = date ("Y-m-d H:i:s", filemtime($obFile));
    $fileObj[] = $fileList;

endforeach;


//Выводим результат
// var_dump($fileObj); 
// echo($fileObj);


$json = json_encode($fileObj);
$file = fopen('data.json','w+');
fwrite($file, $json);
fclose($file);  
?>