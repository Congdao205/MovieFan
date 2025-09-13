type Props = {
    loading?: boolean,
    empty?: boolean,
    items?: number,
    aspect?: string;
    emptyMessage?: string;
}

export const LoadingSkeleton = ({
    loading = false,
    empty = false,
    items = 4,
    aspect = "16/9",
    emptyMessage = "Không có dữ liệu" }: Props) => {
    if (loading) {
        return (
            <>
                {Array.from({ length: items }).map((_, i) => (
                    <div key={i} className="p-2">
                        <div className={`w-full h-full aspect-[${aspect}] animate-pulse rounded-lg bg-gray-700`} />
                    </div>
                ))}
            </>
        )
    }
    if (empty) {
        return (
            <p className="text-gray-400 ml-2 text-center py-6">{emptyMessage}</p>
        );
    }
    return null;
}
