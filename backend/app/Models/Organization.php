<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['name', 'email', 'phone', 'address', 'admin_id'])]
class Organization extends Model
{
    /**
     * Get the user that manages this organization.
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    /**
     * Get the students belonging to this organization.
     */
    public function students(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
