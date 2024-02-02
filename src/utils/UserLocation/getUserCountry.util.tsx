import { ApiUrl } from "../Api/apiURL";
import apiCall from "../Api/apiCall";

const apiUrl = new ApiUrl(process.env.IPINFO_TOKEN);
export async function getUserCountry() {
	try {
		const response = await apiCall.postRequest(apiUrl.getIpinfo(), {});
		// console.log("country response", response.data);
		return response.data;
	} catch (error: any) {
		console.error(error ?? error.message);
		throw error;
	}
}
