<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Moulino\Framework\Model\ModelInterface;
use Moulino\Framework\Validation\ValidatorInterface;

class RemoveArticle extends Command
{	
	private $model;

	public function __construct(ModelInterface $model) {
		$this->model = $model;
		parent::__construct();
	}

	protected function configure() {
		$this->setName('app:article-remove')
			->setDescription('Remove an article.')
			->addArgument('label', InputArgument::REQUIRED, 'Title for the article');
	}

	protected function execute(InputInterface $input, OutputInterface $output){
		$label = $input->getArgument('label');
		$criteria = [
			'label' => $label
		];

		$rowAffected = $this->model->remove($criteria);

		if(!$rowAffected) {
			$output->writeln("<error>The article '$label' has not been found.");
		} else {
			$output->writeln("<info>The article '$label' has been removed.");
		}
	}
}

?>