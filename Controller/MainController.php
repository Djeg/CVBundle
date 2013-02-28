<?php
/**
 * This file is a part of CVBundle. Please read the LICENSE
 * or README.md file for more informations about this software.
 *
 * @author david jegat <david.jegat@gmail.com>
 */

namespace Belton\CVBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Main controller for the CVBundle. This bundle have just one
 * controller for the entire structure. We don't more controller
 * stuff, it's just one page ;)
 *
 * @author david jegat <david.jegat@gmail.com>
 */
class MainController extends Controller
{

	/**
	 * Index action. Display the CV
	 * 
	 * @Route(
	 * 		"/{_locale}.{_format}",
	 * 		defaults={"_locale"="fr", "_format"="html"},
	 * 		requirements={"_locale"="fr|en", "_format"="html|json|xml"},
	 * 		name="cvbundle_index"
	 * )
	 * @Method({"GET"})
	 * @Template()
	 */
	public function indexAction()
	{
		return array();
	}

}