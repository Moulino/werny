<?php

namespace App\Command;

class CommandLoader
{
	private $container;

	public function __construct($container) {
		$this->container = $container;
	}

	public function load() {
		return [
			new AddUser(
				$this->container->get('user_model'), 
				$this->container->get('validator'),
				$this->container->get('password_encoder')
			),
			new RemoveUser(
				$this->container->get('user_model')
			),
			new ListUser(
				$this->container->get('user_model')
			),
			new SetUserPassword(
				$this->container->get('user_model'),
				$this->container->get('password_encoder')
			),
			new AddArticle(
				$this->container->get('article_model'),
				$this->container->get('validator')
			),
			new RemoveArticle(
				$this->container->get('article_model')
			),
		];
	}
}

?>