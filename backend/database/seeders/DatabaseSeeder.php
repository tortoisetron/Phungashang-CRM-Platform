<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@organisation.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        $org = \App\Models\Organization::create([
            'name' => 'Nursing Source HQ',
            'email' => 'admin@organisation.com',
            'admin_id' => $user->id,
        ]);

        $user->update(['organization_id' => $org->id]);

        $categories = [
            'nclex' => \App\Models\Category::create(['name' => 'NCLEX', 'slug' => 'nclex', 'description' => 'NCLEX Exam materials.']),
            'study-guide' => \App\Models\Category::create(['name' => 'Study Guide', 'slug' => 'study-guide', 'description' => 'General study guides.']),
            'med-surg' => \App\Models\Category::create(['name' => 'Med-Surg', 'slug' => 'med-surg', 'description' => 'Medical-Surgical Nursing.']),
            'pathology' => \App\Models\Category::create(['name' => 'Pathology', 'slug' => 'pathology', 'description' => 'Pathology Nursing.']),
        ];

        \App\Models\Product::create([
            'category_id' => $categories['pathology']->id,
            'name' => 'An Introduction to Human Disease',
            'description' => 'Comprehensive book covering human diseases and pathology.',
            'price' => 59.95,
            'tag' => 'Bestseller',
            'image_url' => null,
            'created_at' => now()->subMinutes(4),
        ]);

        \App\Models\Product::create([
            'category_id' => $categories['med-surg']->id,
            'name' => 'Advanced Medical Surgical Nursing',
            'description' => 'Advanced nursing principles and practices.',
            'price' => 64.95,
            'tag' => 'New Edition',
            'image_url' => null,
            'created_at' => now()->subMinutes(3),
        ]);

        \App\Models\Product::create([
            'category_id' => $categories['study-guide']->id,
            'name' => 'Human Disease Study Guide',
            'description' => 'Essential study guide for human disease.',
            'price' => 49.95,
            'tag' => 'Popular',
            'image_url' => null,
            'created_at' => now()->subMinutes(2),
        ]);

        \App\Models\Product::create([
            'category_id' => $categories['nclex']->id,
            'name' => 'NCLEX Comprehensive Review',
            'description' => 'The ultimate preparation package for NCLEX.',
            'price' => 79.95,
            'tag' => 'Essential',
            'image_url' => null,
            'created_at' => now()->subMinutes(1),
        ]);

        $exam = \App\Models\Exam::create([
            'category_id' => $categories['pathology']->id,
            'title' => 'Pathophysiology Practice Quiz',
            'description' => 'A sample quiz to test your knowledge of cellular regulation.',
            'time_limit' => 10,
        ]);

        $questions = [
            [
                'question_text' => 'Which of the following is a characteristic of apoptosis?',
                'options' => json_encode(['Cell swelling', 'Inflammatory response', 'Programmed cell death', 'Rupture of plasma membrane']),
                'correct_option' => 2,
                'rationale' => 'Apoptosis is a tidy, programmed process of cell death that does not trigger inflammation.',
            ],
            [
                'question_text' => 'What is the primary cause of edema in a patient with heart failure?',
                'options' => json_encode(['Increased capillary hydrostatic pressure', 'Decreased capillary oncotic pressure', 'Lymphatic obstruction', 'Increased capillary permeability']),
                'correct_option' => 0,
                'rationale' => 'In heart failure, venous congestion increases hydrostatic pressure, forcing fluid into the tissues.',
            ],
            [
                'question_text' => 'Which electrolyte imbalance is most commonly associated with T-wave peaking on an ECG?',
                'options' => json_encode(['Hyponatremia', 'Hypocalcemia', 'Hyperkalemia', 'Hypokalemia']),
                'correct_option' => 2,
                'rationale' => 'High potassium levels (hyperkalemia) lead to tall, peaked T-waves.',
            ],
        ];

        foreach ($questions as $q) {
            $exam->questions()->create($q);
        }
    }
}
