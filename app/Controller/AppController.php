<?php

namespace App\Controller;
	
use Moulino\Framework\Controller\AbstractController as BaseController;
use Moulino\Framework\Config\Config;
	
class AppController extends BaseController
{
	public function indexAction() {
		return $this->render('App:index', array());
	}
}

?>