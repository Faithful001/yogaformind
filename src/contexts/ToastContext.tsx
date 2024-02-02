"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface ToastContextInterface {
	toast: string | undefined;
	setToast: Dispatch<SetStateAction<string>>;
}

export const ToastContext = createContext<Partial<ToastContextInterface>>({});

export const ToastContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [toast, setToast] = useState<string>("");
	return (
		<ToastContext.Provider value={{ toast, setToast }}>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	return useContext(ToastContext);
};
