import { useBreakpointValue } from '@chakra-ui/react';
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from './components';

const App = () => {
	const isMobile = useBreakpointValue(
		{ base: true, lg: false },
		{ ssr: false }
	);

	return (
		<div className="relative z-0 bg-primary overflow-hidden max-w-full">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<div className="relative z-0">
				<Contact />
				{!isMobile && <StarsCanvas />}
			</div>
		</div>
	);
};

export default App;
