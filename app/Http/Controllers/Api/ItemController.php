<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Items;

class ItemController extends Controller
{
    public function index() {
        $all_items = Items::limit(20)->get();

        return $all_items;
    }
}
