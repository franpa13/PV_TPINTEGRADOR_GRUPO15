import React from 'react';

export const Error = ({ message = "Ocurrió un error", onRetry }) => {
    return (
        <div className="max-w-md mx-auto my-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded text-center">
            <p>{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Reintentar
                </button>
            )}
        </div>
    );
};
