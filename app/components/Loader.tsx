interface LoaderProps {
    secondary?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ secondary }) => {
    return (
        <div className={`h-5 w-5 animate-spin rounded-full border-2 border-t-transparent
            ${secondary ? 'border-gray-900' : 'border-white'}`}
        />
    );
}

export default Loader;
