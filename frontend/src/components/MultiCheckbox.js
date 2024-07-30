export default function MultiCheckbox({name, options, selected, label }) {


    return (
        <>
            <label
                className="block mt-4 text-sm font-bold text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="w-[50%] border border-gray-200 p-4 rounded-md mt-2">
                {
                    options.map(option => (
                        <div key={option.id} className="flex items-center mb-2">
                            <input
                                defaultChecked={selected.includes(option.id)}
                                type="checkbox"
                                name={name}
                                defaultValue={option.id}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="checked-checkbox"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                               {option.name}
                            </label>
                        </div>
                        )
                    )
                }
            </div>
        </>
    )
}