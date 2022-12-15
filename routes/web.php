<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/notallowed', function () {
    return view('allowed')->name('notallowed');
});


Route::get('/map', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('welcome');
});

Route::get('/main', function () {
    return view('welcome');
});

Route::get('/home/outcomebudget', function () {
    return view('welcome');
});

Route::get('/home/agriculture', function () {
    return view('welcome');
});

Route::get('/home/water', function () {
    return view('welcome');
});

Route::get('/home/food', function () {
    return view('welcome');
});

Route::get('/home/forest', function () {
    return view('welcome');
});

Route::get('/home/health', function () {
    return view('welcome');
});

Route::get('/home/education', function () {
    return view('welcome');
});

Route::get('/home/panchayati', function () {
    return view('welcome');
});

Route::get('/home/ruraldevelopment', function () {
    return view('welcome');
});

Route::get('/home/ruralworks', function () {
    return view('welcome');
});

Route::get('/home/schedule', function () {
    return view('welcome');
});


Route::get('/home/schooleducation', function () {
    return view('welcome');
});


Route::get('/home/urbandevelopment', function () {
    return view('welcome');
});

Route::get('/home/socialsecurity', function () {
    return view('welcome');
});

Route::get('/home/contactdetails', function () {
    return view('welcome');
});

Route::get('/home/about', function () {
    return view('welcome');
});


Route::get('/home/helpdesk', function () {
    return view('welcome');
});

Route::get('/home/sdgfront', function () {
    return view('welcome');
});

Route::get('/home/publicdashboard', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('welcome');
})->name('login');

Route::get('/dashboard/department/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/departmentdata/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/departmentdataentry/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/admindataentry/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/outcomebudget/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/divisionreportdownload', function () {
    return view('allowed');
});

Route::get('/dashboard/division/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/divisionentry/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/scheme/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/schemeentry/{id}', function () {
    return view('allowed');
});

Route::get('/dashboard/subscheme/{id}', function () {
    return view('allowed');
});


Route::get('/dashboard/createscheme', function () {
    return view('allowed');
});


Route::get('/dashboard/createsubscheme', function () {
    return view('allowed');
});


Route::get('/dashboard/createoutput', function () {
    return view('allowed');
});


Route::get('/dashboard/createoutcome', function () {
    return view('allowed');
});


Route::get('/dashboard/createoutputtarget', function () {
    return view('allowed');
});


Route::get('/dashboard/createoutcometarget', function () {
    return view('allowed');
});

Route::get('/dashboard/createoutputindicator', function () {
    return view('allowed');
});

Route::get('/dashboard/createoutcomeindicator', function () {
    return view('allowed');
});

Route::get('/dashboard/sdgfront', function () {
    return view('allowed');
});

Route::get('/dashboard/divisionreport', function () {
    return view('allowed');
});

Route::get('/dashboard', function () {
        return view('allowed');
    });

    Route::get('/dashboarddeptuser', function () {
        return view('allowed');
    });

    
    

    Route::get('/dashboarddeptuser/outcomebudget/subscheme/{id}', function () {
        return view('allowed');
    });
    Route::get('/dashboarddeptuser/achievemententry/{id}', function () {
        return view('allowed');
    });
    
        Route::get('/dashboarddeptuser/entryformdeptusersubscheme/{id}', function () {
            return view('allowed');
    });

    Route::get('/dashboarddeptuser/entryformdeptuser/{id}', function () {
        return view('allowed');
});



Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return $request->user();
    })->middleware(['can:isAdmin']);

    Route::post('/signout', [AuthController::class, 'signout']);
    
    Route::get('/dashboard/departments', function () {
        return view('welcome');
    });

    Route::get('/dashboard/main', function () {
        return view('welcome');
    });
    

    Route::get('/dashboard/register', function () {
        return view('welcome');
    });

    Route::get('/dashboard/departmentsentry', function () {
        return view('welcome');
    });

    Route::get('/dashboarddeptuser/main', function () {
        return view('welcome');
    });

    Route::get('/dashboarddeptuser/outcomebudget', function () {
        return view('welcome');
    });

    Route::get('/dashboarddeptuser/entryformdeptuserscheme', function () {
        return view('welcome');
    });

});

