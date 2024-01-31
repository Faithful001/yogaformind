export class ApiUrl {
	private liveUrl = "http://localhost:4000";

	public param: string | undefined;
	constructor(param?: string) {
		this.param = param;
	}

	//authentication routes
	public login = `${this.liveUrl}/login`;
	public signup = `${this.liveUrl}/login`;
}
