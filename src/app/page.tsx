import yoga_icon from "../../public/assets/icons/yoga_icon.png";
import heart_rate from "../../public/assets/icons/heart_pulse.png";
import jogging from "../../public/assets/icons/jogging.png";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<div className="md:flex md:flex-row flex-col items-start justify-center gap-10 mb-5">
				<div className="md:flex md:flex-row flex-col items-start justify-center gap-10 mb-5">
					<div>
						<h1 className="font-semibold text-lg mb-3">Yoga for mind</h1>
						<p className="">
							Watch Our Lead Yoga Therapist,{" "}
							<span className="underline">Ms Uma Subrammaniam </span> explain{" "}
							<br />
							Yoga for Mind
						</p>
					</div>
				</div>
				<div className="w-auto h-[250px]">
					<iframe
						width="500px"
						height="281px"
						src="https://www.youtube.com/embed/COp7BR_Dvps?si=1XsM4pX6w7VWaNTT"
						title="YouTube video player"
						// frameBorder="0"
						className="max-w-full h-[250px]"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			</div>
			<div className="flex flex-col items-start ">
				<div className="px-10">
					<h1 className="text-[#75b2b2]">Is this for you?</h1>
				</div>
				<div className="md:flex md:flex-row flex-col items-center justify-between w-screen px-10">
					<div className="flex flex-col items-center justify-center mb-10">
						<Image
							width={60}
							height={60}
							src={yoga_icon}
							alt=""
							className="bg-[#d6d6d7] p-4 rounded-full"
						/>
						<p className="max-w-60 text-center">
							Hard to feel calm because of stress?
						</p>
						<button className="transparent md:px-14 px-5 py-1 rounded-2xl border-[1px] border-[#EB7C7C] text-[#EB7C7C] text-sm">
							Book trial @ 99
						</button>
					</div>
					<div className="flex flex-col items-center justify-center mb-10">
						<Image
							width={60}
							height={60}
							src={heart_rate}
							alt=""
							className="bg-[#d6d6d7] p-4 rounded-full"
						/>
						<p className="max-w-60 text-center">
							Hard to feel calm because of stress?
						</p>
						<button className="md:px-14 px-5 py-1 rounded-2xl bg-[#EB7C7C] text-white text-sm">
							I want to buy
						</button>
					</div>
					<div className="flex flex-col items-center justify-center mb-10">
						<Image
							width={60}
							height={60}
							src={jogging}
							alt=""
							className="bg-[#d6d6d7] p-4 rounded-full"
						/>
						<p className="max-w-60 text-center">
							Hard to feel calm because of stress?
						</p>
						<a href="#" className="underline px-14 py-1 text-sm">
							I have a question
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
