<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ExamController;
use App\Http\Controllers\Api\UserAttemptController;
use App\Models\Category;
use App\Models\Product;
use App\Models\Exam;

// Nursing Platform API
Route::get('/exams', [ExamController::class, 'index']);
Route::get('/exams/{exam}', [ExamController::class, 'show']);

Route::get('/user/stats', function () {
    return [
        'exams_taken' => '12',
        'avg_score' => '84%',
        'questions_solved' => '1,240',
        'study_hours' => '45h'
    ];
})->middleware('auth:sanctum');

Route::get('/admin/stats', function () {
    return [
        'total_users' => 1250,
        'total_exams' => 45,
        'total_sales' => '14,250',
        'active_sessions' => 12
    ];
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);

// CRM Management (To be protected soon)
Route::apiResource('crm/categories', CategoryController::class)->except(['index']);
Route::apiResource('crm/products', ProductController::class)->except(['index', 'show']);

Route::get('/organizations', [\App\Http\Controllers\Api\OrganizationController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user/attempts', [UserAttemptController::class, 'index']);
    Route::post('/exams/{id}/submit', [UserAttemptController::class, 'store']);
});

require __DIR__.'/auth.php';
