<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Moulino\Framework\Model\ModelInterface;

class RemoveUser extends Command
{	
	private $model;

	public function __construct(ModelInterface $model) {
		$this->model = $model;
		parent::__construct();
	}

	protected function configure(){
		$this->setName('app:user-remove')
			->setDescription('Remove an user.')
			->addArgument('user_id', InputArgument::REQUIRED, 'User identifiant');
	}

	protected function execute(InputInterface $input, OutputInterface $output) {
		$user_id = $input->getArgument('user_id');

		$rowAffected = $this->model->remove(['user_id' => $user_id]);

		if(!$rowAffected) {
			$output->writeln("<error>The user '$user_id' has not been found.</error>");
		} else {
			$output->writeln("<info>The user '$user_id' has been removed.");
		}
	}
}

?>