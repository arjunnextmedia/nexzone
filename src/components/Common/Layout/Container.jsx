export default function Container({ children, className = '' }) {
    return (
        <div className={`mx-auto w-full max-w-full  2xl:max-w-[1980px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[160px] ${className}`}>
            {children}
        </div>
    );
}
