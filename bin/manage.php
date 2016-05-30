<?php

require_once dirname(__FILE__)."/../app/bootstrap.php";

use Moulino\Framework\Console\Application;

$app = new Application();
$app->run();

?>