// ── StarRating ───────────────────────────────────────────────────────────────
// Renders 1-5 stars (full, half, empty) with an optional review count.
// Props:
//   rating      : number  — e.g. 4.5
//   reviewCount : number  — optional, e.g. 128
// ────────────────────────────────────────────────────────────────────────────

const StarRating = ({ rating, reviewCount }) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    const StarIcon = ({ fill = "currentColor" }) => (
        <svg viewBox="0 0 24 24" fill={fill} className="w-5 h-5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    return (
        <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-0.5">

                {/* ── Full stars ── */}
                {Array.from({ length: fullStars }).map((_, i) => (
                    <span key={`full-${i}`} className="text-amber-400">
                        <StarIcon />
                    </span>
                ))}

                {/* ── Half star ── */}
                {hasHalf && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <defs>
                            <linearGradient id="halfGrad" x1="0" x2="1" y1="0" y2="0">
                                <stop offset="50%" stopColor="#FBBF24" />
                                <stop offset="50%" stopColor="#D1D5DB" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#halfGrad)"
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                    </svg>
                )}

                {/* ── Empty stars ── */}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300">
                        <StarIcon />
                    </span>
                ))}
            </div>

            <span className="text-sm font-semibold text-amber-500">
                {rating.toFixed(1)}
            </span>

            {reviewCount != null && (
                <span className="text-sm text-gray-400">
                    ({reviewCount.toLocaleString()} reviews)
                </span>
            )}
        </div>
    );
};

export default StarRating;
