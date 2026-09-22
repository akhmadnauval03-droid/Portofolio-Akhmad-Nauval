interface SectionHeaderProps {
    badge?: string,
    title: string,
    higlight?: string,
    highlight?: string,
    description?: string
}

export default function SectionHeader({
    badge,
    title,
    higlight,
    highlight: highlightText,
    description,
}: SectionHeaderProps) {
    const emphasizedText = highlightText ?? higlight;

    return (
        <div className="max-w-2xl mx-auto text-center space-y-4">
            {badge && (
                <span className="text-sm text-primary inline-block bg-primary/10 px-4 py-1.5 rounded-full">
                    {badge}
                </span>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
                {title}{" "}
                {emphasizedText && <span className="text-primary">{emphasizedText}</span>}
            </h2>

            {description && (
                <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
            )}
        </div>
    )
}