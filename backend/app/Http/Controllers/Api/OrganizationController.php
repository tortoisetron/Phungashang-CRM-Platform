<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Return a list of all organizations for the frontend dropdown.
     */
    public function index()
    {
        // For security, only return the id and name
        return response()->json(Organization::all(['id', 'name']));
    }
}
