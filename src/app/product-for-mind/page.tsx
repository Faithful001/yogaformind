import Image from "next/image";
import yoga_girl from ".././../../public/assets/images/yoga_girl.jpeg";
import { packageData } from "@/data/package.data";
import { packageDataInterface } from "@/interfaces/data.interfaces";

const ProductForMind = () => {
	return (
		<div className="product-for-mind p-10 md:flex md:flex-row flex-col items-start gap-10">
			<div className="md:max-w-[50%] max-w-full flex flex-col gap-4 mb-10">
				<p className="text-[#66757f] text-lg font-semibold">Yoga for Mind</p>
				<Image src={yoga_girl} alt="" className="rounded-xl w-full" />
				<div>
					<p className="text-[#66757f] text-lg font-semibold mb-1">
						What is Yoga for Mind?
					</p>
					<p className="text-[#66757f]">
						The Yoga for Mind sessions involve minimal physical movement and
						rely on techniques such as pranayama and meditation. Suited for
						women who cannot perform more physical forms of yoga and are looking
						for relief from concerns such as stress, anxiety, low mood, etc.
					</p>
				</div>
			</div>
			<div className="md:w-screen w-full flex flex-col gap-5 mt-1">
				<p>Choose your package</p>
				<div className="flex flex-col gap-5">
					{packageData.map((data: packageDataInterface, index: number) => (
						<div
							key={index}
							className="flex items-center justify-between rounded-md bg-white p-2 border border-black"
						>
							<div>
								<h1 className="text-[#5e6f7a] text-lg font-semibold">
									{data.months}
								</h1>
								<div className="flex gap-1">
									<p className="text-[#D0D1D0] line-through">
										{data.removedPrice}
									</p>
									<p className="text-[#66757f] text-bold">{data.price}</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-xs">{data.perMonth}/month</p>
								<button className="rounded-3xl text-xs bg-[#fb7978] p-2 px-4 text-white">
									BUY NOW
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-[#66757f] font-semibold">What you'll get</p>
					<div className="flex flex-col gap-4">
						<div>
							<p className="text-xs">
								A chat group on the Elda app where you can connect with your
								trainer and the rest of the Elda Yoga Community
							</p>
						</div>
						<div>
							<p className="text-xs">
								Ability to reschedule your class if you miss a session
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductForMind;
