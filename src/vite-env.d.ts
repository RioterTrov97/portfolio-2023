/// <reference types="vite/client" />

declare module 'react-tilt';
declare module 'react-vertical-timeline-component';
declare module 'maath/random/dist/maath-random.esm';
declare global {
	declare module '@types/react' {
		interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
			options?: Record<string, any>;
		}
	}
}
