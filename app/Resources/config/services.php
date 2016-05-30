<?php 

return array(

	'article_handler' => array(
		'class' => 'App\\Service\\ArticleHandler',
		'arguments' => array("@article_model", "@translator")
	),
	
	'password_generator' => array(
		'class' => 'App\\Service\\PasswordGenerator'
	)
);

?>