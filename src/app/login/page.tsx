import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserCountry } from "@/utils/UserLocation/getUserCountry.util";
import LoginUi from "@/components/loginui/LoginUi";
// import { useRouter } from "next/navigation";

const Login = async () => {
	const getCountry = await getUserCountry();
	console.log("country response", getCountry);
	// const router = useRouter();

	return (
		<div className="login flex items-center justify-center flex-col gap-7 p-10">
			<div className="flex flex-col items-start justify-center gap-7">
				<h1 className="font-semibold text-5xl text-[#41515f]">
					Login to your account
				</h1>
				<LoginUi getCountry={getCountry} />
			</div>
		</div>
	);
};

export default Login;
