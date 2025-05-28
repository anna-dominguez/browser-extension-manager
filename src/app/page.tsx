'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Filter from '@/components/Filter';
import Extension from '@/components/Extension';
import extensions from '@/data.json';

export default function Home() {
	const [filterType, setFilterType] = useState<'all' | 'active' | 'inactive'>(
		'all'
	);
	const [extensionsData, setExtensionsData] = useState(extensions);

	const toggleExtension = (extensionName: string) => {
		setExtensionsData((prev) =>
			prev.map((ext) =>
				ext.name === extensionName ? { ...ext, isActive: !ext.isActive } : ext
			)
		);
	};

	const removeExtension = (extensionName: string) => {
		setExtensionsData((prev) =>
			prev.filter((ext) => ext.name !== extensionName)
		);
	};

	const filteredExtensions = extensionsData.filter((item) => {
		if (filterType === 'all') return true;
		if (filterType === 'active') return item.isActive;
		if (filterType === 'inactive') return !item.isActive;
	});

	return (
		<div className="w-full min-h-screen flex items-center font-sans flex-col py-5 lg:py-10 px-4 gap-10 sm:gap-16 lg:max-w-[1170px] mx-auto">
			<Header />
			<main className="w-full flex flex-col gap-10 sm:gap-8">
				<Filter filterType={filterType} setFilterType={setFilterType} />
				<section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{filteredExtensions.map((extension) => (
						<Extension
							key={extension.name}
							extension={extension}
							toggleExtension={toggleExtension}
							removeExtension={removeExtension}
						/>
					))}
				</section>
			</main>
		</div>
	);
}
