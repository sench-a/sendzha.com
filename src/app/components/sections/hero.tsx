import { Particles } from '../particles';
import ReactWrapBalancer from 'react-wrap-balancer';

export const Hero: React.FC = () => {
	return (
		<section className="h-screen flex flex-col w-screen items-center justify-center">
			<div className="container mx-auto text-center">
				<Particles
					className="absolute inset-0 -z-10"
					quantity={100}
				/>
				<h1 className="pb-4 font-extrabold tracking-tight text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-300">
					<ReactWrapBalancer>Naughty Rabbit</ReactWrapBalancer>
				</h1>
			</div>
		</section>
	);
};
