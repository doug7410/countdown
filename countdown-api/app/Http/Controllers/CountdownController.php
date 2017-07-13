<?php

namespace App\Http\Controllers;

use App\Countdown;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CountdownController extends Controller
{
    public function store(Request $request)
    {
        $userId = $request->user()->id;
        $countdown = Countdown::create(array_merge($request->input(), [
            'user_id' => $userId,
            'date' => Carbon::createFromFormat('m/d/Y', $request->input('date'))
        ]));

        return JsonResponse::create($countdown);
    }
}
