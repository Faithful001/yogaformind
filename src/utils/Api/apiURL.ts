export class ApiUrl {
	private liveUrl = "http://localhost:4000";
	private ipinfoUrl = "https://ipinfo.io";

	public param: string | undefined;
	constructor(param?: string) {
		this.param = param;
	}

	//authentication routes
	public login = `${this.liveUrl}/api/auth/login`;
	public signup = `${this.liveUrl}/api/auth/signup`;
	public verifyOtp = `${this.liveUrl}/api/auth/verify-otp`;

	//ipinfo routes
	public getIpinfo = () => `${this.ipinfoUrl}?token=${this.param}`;
}
