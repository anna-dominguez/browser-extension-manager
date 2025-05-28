'use client';

import Logo from '@/components/Logo';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Header = () => {
	const { theme, setTheme } = useTheme();

	return (
		<header className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 dark:bg-neutral-800 bg-neutral-0 rounded-[10px] sm:rounded-[20px] ">
			<div className="dark:text-white text-[#091540]">
				<Logo />
			</div>
			<button
				type="button"
				className="focus:outline-2 outline-offset-2 outline-red-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-200 transition-colors duration-300 bg-neutral-100 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				<Image
					src="/images/icon-moon.svg"
					width={20}
					height={20}
					alt="moon"
					className="dark:hidden"
				/>
				<Image
					src="/images/icon-sun.svg"
					width={20}
					height={20}
					alt="sun"
					className="hidden dark:block"
				/>
			</button>
		</header>
	);
};

export default Header;
