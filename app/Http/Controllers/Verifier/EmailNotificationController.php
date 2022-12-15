<?php

namespace App\Http\Controllers\Verifier;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\QueueEmailJob;
use Exception;

class EmailNotificationController extends Controller
{
    public function submitNotification(Request $request)
    {
        $details = $request->details;
            try {
                dispatch(new QueueEmailJob($details));
            } catch (Exception $ex) {
                return response()->json([
                    'status' => 200,
                    // 'request' => $details,
                    'message' => 'Email not sent.' . $ex
                ]);
            }

            return response()->json([
                'status' => 200,
                // 'request' => $details,
                'message' => 'E-mail notification sent successfully',
            ]);
    }
}
