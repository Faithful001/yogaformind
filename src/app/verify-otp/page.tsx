"use client";
import { useToast } from "@/contexts/ToastContext";
import apiCall from "@/utils/Api/apiCall";
import { ApiUrl } from "@/utils/Api/apiURL";
import { localStorageClass } from "@/utils/LocalStorage/localstorage.util";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const VerifyOtp = () => {
	const { toast: toastContext } = useToast();
	const queryClient = useQueryClient();
	const [otp, setOtp] = useState<string>("");
	const router = useRouter();

	console.log(otp);

	const user_id = localStorageClass.getFromStorage("user_id");

	//class instantiations
	const apiUrl = new ApiUrl();

	const verifyOtp = async () => {
		try {
			const response = await apiCall.postRequest(apiUrl.verifyOtp, {
				otp,
				user_id,
			});
			console.log(response.data);
			if (response.status == 200) {
				setOtp("");
			}
		} catch (error: any) {
			console.error(error);
		}
	};

	const { isLoading, mutate } = useMutation(verifyOtp, {
		onSuccess: () => {
			queryClient.invalidateQueries("verify-otp");
		},
		onError: (error: any) => {
			console.error(error);
		},
	});

	const handleVerifyOtp: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		mutate();
	};

	useEffect(() => {
		toast(toastContext);
	}, [toastContext]);
	return (
		<div className="verify-otp flex items-center justify-center flex-col gap-7 p-10">
			{/* <div className="flex flex-col items-center justify-center gap-7"> */}
			<ToastContainer />
			<h1 className="font-semibold text-5xl text-[#41515f]">Verify Otp</h1>
			<input
				type="text"
				className="px-10 py-5 border-2 border-[#8f8f8f] rounded-md"
				onChange={(e) => setOtp(e.target.value)}
			/>
			<button
				className="bg-[#EB7C7C] rounded-md p-2 px-4 text-white"
				onClick={handleVerifyOtp}
			>
				{!isLoading ? "Verify" : "Verifying..."}
			</button>
			{/* </div> */}
		</div>
	);
};

export default VerifyOtp;
