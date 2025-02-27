"use client"
import { Loader } from "lucide-react";
import { useFormStatus } from 'react-dom';

const SubmitSearchButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {pending ?
                <Loader className="animate-spin" size="18" /> :
                (<svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>)
            }
            <span className="sr-only">Search</span>
        </button>
    )
}

export default SubmitSearchButton;