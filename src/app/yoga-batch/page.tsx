import { monthData } from "@/data/month.data";
import yoga_girl from "../../../public/assets/images/yoga_girl.jpeg";
import Image from "next/image";
import { dayData } from "@/data/day.data";

const YogaBatch = () => {
	let date = new Date().getDate();
	let month = new Date().getMonth();
	let day = new Date().getDay();
	let monthName: string = "";
	let dayName: string = "";

	let dateArr: number[] = [];
	let dayArr: string[] = [];

	monthData.forEach((name, index) => {
		if (month === index) {
			monthName += name;
			return;
		}
	});

	console.log(dayName);

	for (let index = 0; index < 14; index++) {
		dateArr.push(date++);

		dayData.forEach((name, index) => {
			if (day === index) {
				dayArr.push(dayName); // Push dayName to dayArr
				day++; // Increment day after pushing
				dayName = name; // Set dayName to the new day
				return;
			}
		});
	}

	console.log(dayArr);

	return (
		<div className="yoga-batch">
			<p className="text-[#66757f]">Yoga For Mind</p>
			<div className="h-20 relative">
				<Image
					src={yoga_girl}
					alt=""
					className="w-full h-full object-cover rounded-md"
				/>
			</div>

			<div>
				<p>What is Yoga For Mind?</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
					error saepe, fugit ipsam voluptatem nulla sapiente exercitationem
					cumque quis aspernatur quos accusantium placeat quisquam ad aliquam
					dolorum obcaecati dolore. Voluptatibus.
				</p>
			</div>
			<p className="text-xs">Page . Yoga For Mind . Package</p>
			<div>
				<h1>1 month Yoga For Mind</h1>
				<p>
					5 days at most. <span className="text-[#EB7C7C]">Change plan</span>
				</p>
			</div>
			<div>
				<p>Pick a start date</p>
				<p>Dates are available for the next 2 weeks</p>
			</div>
		</div>
	);
};

export default YogaBatch;
