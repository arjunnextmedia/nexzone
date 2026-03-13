/**
 * ProductDescription
 *
 * WHAT CHANGED:
 * - Removed the `specs` prop (old array format [{label, value}])
 * - Now accepts `specifications` prop — a plain object from Mongoose Map
 *   e.g. { "Print Speed": "35 ppm", "Resolution": "1200 dpi" }
 * - `description` is raw HTML from React Quill — rendered via dangerouslySetInnerHTML
 * - h2 and h3 inside Quill HTML automatically get the blue left-bar decoration via CSS
 */

const SectionHeading = ({ children }) => (
    <h2 className="text-base font-bold text-[#113578] uppercase tracking-wider flex items-center gap-2">
        <span className="w-1 h-5 bg-[#048BFF] rounded-full inline-block" />
        {children}
    </h2>
);

const ProductDescription = ({ description, specifications }) => {
    // ── Convert Mongoose Map (plain object) to array of entries ─────────
    // Backend sends specifications as: { "Print Speed": "35 ppm", ... }
    const specEntries = specifications
        ? Object.entries(specifications).filter(([, v]) => v) // skip empty values
        : [];

    const hasDescription = Boolean(description);
    const hasSpecs = specEntries.length > 0;

    if (!hasDescription && !hasSpecs) return null;

    return (
        <div className="flex flex-col gap-6">

            {/* ── Scoped CSS for Quill HTML ─────────────────────────────── */}
            {hasDescription && (
                <>
                    <style>{`
                        /* Base prose */
                        .ql-render p  { margin-bottom: 0.85rem; line-height: 1.75; color: #4B5563; }
                        .ql-render ul { list-style: disc;    padding-left: 1.5rem; margin-bottom: 1rem; }
                        .ql-render ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
                        .ql-render li { margin-bottom: 0.3rem; color: #4B5563; line-height: 1.7; }
                        .ql-render li::marker { color: #048BFF; }
                        .ql-render strong { font-weight: 700; color: #113578; }
                        .ql-render em { font-style: italic; }
                        .ql-render a  { color: #048BFF; text-decoration: underline; }
                        .ql-render blockquote {
                            border-left: 4px solid #048BFF;
                            padding: 0.4rem 1rem;
                            margin: 0.75rem 0;
                            color: #6B7280;
                            font-style: italic;
                            background: #F0F7FF;
                            border-radius: 0 6px 6px 0;
                        }
                        .ql-render img { max-width: 100%; border-radius: 8px; margin: 0.75rem 0; }

                        /* ── Blue bar decoration on h2 and h3 ────────────── */
                        /* This is DYNAMIC — applies to any h2/h3 the user types in Quill */
                        .ql-render h2,
                        .ql-render h3 {
                            position: relative;
                            padding-left: 0.875rem;
                            margin-top: 1.5rem;
                            margin-bottom: 0.6rem;
                            font-weight: 700;
                            color: #0f2557;
                            line-height: 1.3;
                        }
                        /* The blue vertical bar — same as the hardcoded decorations */
                        .ql-render h2::before,
                        .ql-render h3::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 2px;
                            bottom: 2px;
                            width: 4px;
                            border-radius: 4px;
                            background: linear-gradient(180deg, #048BFF 0%, #113578 100%);
                        }
                        .ql-render h2 { font-size: 1.25rem; }
                        .ql-render h3 { font-size: 1.05rem; color: #1d3e80; }
                        .ql-render h4 { font-size: 0.95rem; font-weight: 700; color: #1d3e80; margin: 1rem 0 0.4rem; }

                        /* Quill alignment classes */
                        .ql-render .ql-align-center  { text-align: center; }
                        .ql-render .ql-align-right   { text-align: right; }
                        .ql-render .ql-align-justify { text-align: justify; }
                    `}</style>

                    <div className="flex flex-col gap-3">
                        <hr className="border-gray-100" />
                        <SectionHeading>Product Description</SectionHeading>

                        {/* dangerouslySetInnerHTML renders the Quill HTML correctly */}
                        <div
                            className="ql-render text-sm sm:text-base"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>
                </>
            )}

            {/* ── Specifications ────────────────────────────────────────── */}
            {hasSpecs && (
                <div className="flex flex-col gap-3">
                    <hr className="border-gray-100" />
                    <SectionHeading>Specifications</SectionHeading>
                    <div className="rounded-xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                {specEntries.map(([label, value], idx) => (
                                    <tr
                                        key={label}
                                        className={idx % 2 === 0 ? "bg-[#F8FAFF]" : "bg-white"}
                                    >
                                        <td className="px-4 py-3 font-semibold text-[#113578] w-2/5 border-r border-gray-100 align-top">
                                            {label}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600 align-top">
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDescription;