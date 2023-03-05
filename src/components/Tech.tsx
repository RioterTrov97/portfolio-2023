import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { Avatar, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, slideIn } from '../utils/motion';

const Tech = () => {
	const isMobile = useBreakpointValue(
		{ base: true, lg: false },
		{ ssr: false }
	);
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I can work with</p>
				<h2 className={styles.sectionHeadText}>Tech Stack</h2>
			</motion.div>

			<motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
				<div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
					{technologies.map((tech) => (
						<div className="w-28 h-28" key={tech.name}>
							{isMobile ? (
								<Avatar
									bg="white"
									size="xl"
									p={4}
									name={tech.name}
									src={tech.icon}
								/>
							) : (
								<BallCanvas icon={tech.icon} />
							)}
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Tech, 'tech');
