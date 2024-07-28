import React, {useState} from "react"
import Button from "./Button";

const Modal = ({children,title,onCloseModal}) => {


	return (
			<div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}} className="fixed overflow-auto z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
			<div className="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
				<div className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
					>
					<svg onClick={onCloseModal} className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
					</svg>
				</div>

				<div className="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
					
					<h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">{title}</h2>
				 
					{children}
	
					
				</div>
			</div>
		</div>
		)
}

export default Modal;