"use client";
import { useEffect, useState } from "react";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import "../../app/login/style.css";
import Link from "next/link";
import apiCall from "@/utils/Api/apiCall";
import { ApiUrl } from "@/utils/Api/apiURL";
import { useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/ToastContext";
import { localStorageClass } from "@/utils/LocalStorage/localstorage.util";

const LoginUi = ({ getCountry }: { getCountry: any }) => {
	const { setToast } = useToast();
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	const [value, setValue] = useState<any>();
	const [phoneNumber, setPhoneNumber] = useState<number>();
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<any>();
	// const [loading, setLoading] = useState<boolean>(false);
	console.log(`+${phoneNumber?.toString()}`);
	console.log(value);
	const queryClient = useQueryClient();
	const router = useRouter();

	// console.log("phone number", phoneNumber);

	//class instantiations
	const apiUrl = new ApiUrl();

	async function sendOtp() {
		if (value == undefined) {
			return setError("All fields are required");
		} else {
			try {
				const response = await apiCall.postRequest(apiUrl.login, {
					mobile_number: `+${phoneNumber?.toString()}`,
				});
				setMessage(response.data.message);
				setError("");
				localStorageClass.addToStorage("user_id", response.data.data.user._id);
				console.log(response.data);
				console.log(response.data.data.stringifiedOtp);
				setToast &&
					setToast(`Your otp is ${response.data.data.stringifiedOtp}`);
				toast(`Your otp is ${response.data.data.stringifiedOtp}`);
				setTimeout(() => {
					router.push("verify-otp");
				}, 2000);
				return response.data;
			} catch (error: any) {
				setError(error?.response?.data.error);
				console.error(error?.response?.data.error);
				throw error;
			}
		}
	}

	const { isLoading, mutate } = useMutation(sendOtp, {
		onSuccess: () => {
			queryClient.invalidateQueries("login");
		},
		onError: (error) => {
			console.error(error);
		},
	});

	const handleSendOtp: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		if (isCheckboxChecked) {
			mutate();
		}
	};

	useEffect(() => {
		setPhoneNumber(parseInt(value));
	}, [value]);
	return (
		<form className="login-input flex flex-col justify-center gap-3">
			<ToastContainer />
			<div className="flex flex-col items-start justify-start gap-3">
				<PhoneInput
					placeholder="Enter phone number"
					value={value}
					defaultCountry={getCountry?.country}
					onChange={(newValue) => setValue(newValue)}
					className="flex items-start"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-5">
				<div className="flex items-center justify-center gap-10">
					<input
						type="checkbox"
						className="bg-red-500"
						checked={isCheckboxChecked}
						onChange={() => {
							setIsCheckboxChecked(!isCheckboxChecked);
						}}
					/>
					<p>
						I agree with the
						<Link href={"#"} className="text-[#EB7C7C] mx-1">
							Terms
						</Link>
						&
						<Link href={"#"} className="text-[#EB7C7C] mx-1">
							Privacy Policy of Elda Health
						</Link>
					</p>
				</div>
				{isCheckboxChecked ? (
					<button
						className="bg-[#EB7C7C] rounded-md p-2 px-4 text-white"
						onClick={handleSendOtp}
					>
						{!isLoading ? "Send OTP" : "Sending..."}
					</button>
				) : (
					<button
						className="bg-[#e49999] rounded-md p-2 px-4 text-white"
						disabled
						// onClick={handleSendOtp}
					>
						Send OTP
					</button>
				)}
				{message && <p className="text-green-600 text-sm">{message}</p>}
				{error && <p className="text-red-600 text-sm">{error}</p>}
			</div>
		</form>
	);
};

export default LoginUi;
