<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Feed;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function index()
    {
        return Inertia::render('Components/Feed', [
            'title' => 'Feed Page',
            'description' => 'sssssssssss',
            'author' => 'sgsg',
        ]);
    }
}
