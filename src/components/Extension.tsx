import Image from 'next/image';
import React from 'react';

interface Extension {
	name: string;
	logo: string;
	description: string;
	isActive: boolean;
}

const Extension = ({
	extension,
	toggleExtension,
	removeExtension,
}: {
	extension: Extension;
	toggleExtension: (extensionName: string) => void;
	removeExtension: (extensionName: string) => void;
}) => {
	return (
		<article
			key={extension.name}
			className="w-full min-h-[200px] border border-neutral-200 dark:border-neutral-700 flex flex-col p-5 justify-between bg-neutral-0 dark:bg-neutral-800 rounded-[20px]"
		>
			<div className="w-full flex gap-4 items-start">
				<Image
					src={extension.logo}
					alt={extension.name}
					width={60}
					height={60}
				/>
				<div className="flex flex-col gap-2">
					<h2 className="font-bold text-[20px] leading-[120%] tracking-[-0.2px]">
						{extension.name}
					</h2>
					<p className="text-neutral-600 dark:text-neutral-300">
						{extension.description}
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="button"
					onClick={() => removeExtension(extension.name)}
					className="border border-neutral-300 dark:border-neutral-700 cursor-pointer focus:outline-2 dark:outline-red-400 outline-red-700 outline-offset-2 rounded-full px-4 py-2"
				>
					Remove
				</button>
				<button
					type="button"
					onClick={() => toggleExtension(extension.name)}
					className={`relative w-10 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
						extension.isActive
							? 'bg-red-700 dark:bg-red-400 focus:ring-red-700 dark:focus:ring-red-400'
							: 'bg-neutral-300 dark:bg-gray-600 focus:ring-red-700 dark:focus:ring-red-400'
					}`}
					aria-label="Toggle Extension Active Status"
				>
					<span
						className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
							extension.isActive ? 'translate-x-4' : 'translate-x-0'
						}`}
					/>
				</button>
			</div>
		</article>
	);
};

export default Extension;
