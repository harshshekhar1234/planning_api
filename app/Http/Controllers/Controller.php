<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public $api_fin_year = "2324";
    //public $api_user = 'ZypYy7SsrPwss54wDOdGWQ==';
    public $api_password = 'N7B/otKdaXcJh1oWwrTIxA==';
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
