
type Props = {
    page: number,
    totalPages: number,
    onPageChange: (newPage: number) => void;
}

export const Pagination = ({ page, totalPages, onPageChange }: Props) => {
    return (
        <div className="flex justify-center my-5 space-x-2">
            <button
                disabled={page === 1}
                onClick={() => onPageChange(1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
                đầu
            </button>
            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
                Prev
            </button>
            <span className="text-white">{page}/{totalPages}</span>
            <button
                disabled={ page >= totalPages}
                onClick={() => onPageChange(page + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
                Next
            </button>
            <button
                disabled={page >= totalPages}
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
            >
                cuối
            </button>
        </div>
    )
}
