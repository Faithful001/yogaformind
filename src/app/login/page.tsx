"use client";
import NigeriaFlag from "../../../public/assets/icons/naija.png";
import KenyaFlag from "../../../public/assets/icons/kenya.png";
import EgyptFlag from "../../../public/assets/icons/egypt.png";
import SouthAfricaFlag from "../../../public/assets/icons/south.png";
import EthiopiaFlag from "../../../public/assets/icons/ethopia.png";
import { Country } from "../../interfaces/data.interfaces";
import { useState } from "react";
import Image from "next/image";

export const countries: Country[] = [
	{
		value: "Nigeria",
		label: NigeriaFlag,
	},
	{
		value: "Kenya",
		label: KenyaFlag,
	},
	{
		value: "Egypt",
		label: EgyptFlag,
	},
	{
		value: "South Africa",
		label: SouthAfricaFlag,
	},
	{
		value: "Ethiopia",
		label: EthiopiaFlag,
	},
];

const Login = () => {
	const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
	console.log(selectedCountry);

	const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = countries.find(
			(country) => country.value === event.target.value
		);
		if (selectedOption) {
			setSelectedCountry(selectedOption);
		}
	};

	return (
		<div className="login flex items-center justify-center flex-col gap-7 p-10">
			<div className="flex flex-col items-start justify-center gap-7">
				<h1 className="font-semibold text-5xl text-[#41515f]">
					Login to your account
				</h1>
				<div className="flex items-center">
					<div className="flex items-center justify-center relative border-2 border-[#EDECEA] w-16 h-[70px] rounded-sm ">
						<select
							value={selectedCountry.value}
							onChange={handleCountryChange}
							className="appearance-none opacity-0 bg-transparent z-50 border border-gray-400 px-2 py-1"
						>
							{countries.map((country) => (
								<option
									key={country.value}
									value={country.value}
									// data-image={country.label.props.src}
								>
									{country.value}
								</option>
							))}
						</select>
						{selectedCountry.label && (
							<Image
								src={selectedCountry.label}
								alt=""
								width={16}
								height={16}
								className="top-6 absolute left-2"
							/>
						)}

						<span className="material-symbols-outlined absolute right-0 ">
							arrow_drop_down
						</span>
					</div>
					<input
						type="text"
						className="bg-transparent py-[21px] px-5 focus:outline-blue-500 -ml-[2px] z-50 border-2 border-[#EDECEA] rounded-sm"
					/>
				</div>
			</div>
			<div className="flex items-center justify-center gap-5">
				<input type="checkbox" className="bg-red-500" />
				<p>I agree with the Terms & Privacy Policy of Elda Health</p>
			</div>
			<button className="bg-[#EB7C7C] rounded-md p-2 px-4 text-white">
				Send OTP
			</button>
		</div>
	);
};

export default Login;
