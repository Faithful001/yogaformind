import axios, { AxiosRequestConfig } from "axios";

class ApiCall {
	//properties
	private defaultHeaders: object = {
		Accept: "application/vnd.api+json",
		"Content-Type": "application/vnd.api+json",
	};

	//methods
	public async postRequest(
		url: string,
		body: object,
		headers?: AxiosRequestConfig["headers"]
	) {
		try {
			const response = await axios.post(url, body, {
				...this.defaultHeaders,
				headers,
			});
			// console.log(response);
			return response;
		} catch (error: any) {
			console.error(error?.response);
			throw error;
		}
	}

	public async getRequest(
		url: string,
		headers?: AxiosRequestConfig["headers"]
	) {
		try {
			const response = await axios.get(url, {
				...this.defaultHeaders,
				headers,
			});
			// console.log(response);
			return response;
		} catch (error: any) {
			console.error(error?.response);
			throw error;
		}
	}
}

export default new ApiCall();
