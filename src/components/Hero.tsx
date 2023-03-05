import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { desktop } from '../assets';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
	const isMobile = useBreakpointValue(
		{ base: true, lg: false },
		{ ssr: false }
	);

	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915EFF]">Suman</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop user interfaces, server-side functions,
						<br className="sm:block hidden" />
						3D visuals, and native applications.
					</p>
				</div>
			</div>

			{isMobile ? (
				<Box
					position={'absolute'}
					zIndex={99}
					top="45vh"
					left={0}
					w="90vw"
					ml="5vw"
					maxW="90vw">
					<Image src={desktop} alt="Desktop" rounded={20} w="100%" />
				</Box>
			) : (
				<ComputersCanvas />
			)}

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
