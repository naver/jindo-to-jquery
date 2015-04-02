<?PHP
$bin = $_GET['bin'];

$options = array(
    'http' => array(
        'method'  => 'GET'
    ),
);

header("Content-type: text/html");


$context  = stream_context_create($options);
$result = file_get_contents("http://jindo.nhncorp.com:3000/".$bin."/embed", false, $context);

echo $result;
?>