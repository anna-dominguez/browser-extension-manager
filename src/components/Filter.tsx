import React from 'react';

const Filter = ({
	filterType,
	setFilterType,
}: {
	filterType: 'all' | 'active' | 'inactive';
	setFilterType: (filterType: 'all' | 'active' | 'inactive') => void;
}) => {
	return (
		<section className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-6">
			<h1 className="font-bold tracking-[-1px] text-[34px] dark:text-neutral-0 text-neutral-900">
				Extensions List
			</h1>
			<article className="text-neutral-900 dark:text-neutral-0 flex gap-3">
				<button
					type="button"
					onClick={() => setFilterType('all')}
					className={`${
						filterType === 'all'
							? 'bg-red-700 dark:bg-red-400 text-neutral-0 font-medium'
							: 'bg-neutral-0 dark:bg-neutral-700'
					} rounded-full tracking-[-0.3px] leading-[140%] border border-neutral-200 dark:border-neutral-700 px-5 pt-2 pb-2.5 cursor-pointer focus:outline-2 dark:outline-red-400 outline-red-700 outline-offset-2`}
				>
					All
				</button>
				<button
					type="button"
					onClick={() => setFilterType('active')}
					className={`${
						filterType === 'active'
							? 'bg-red-700 dark:bg-red-400 text-neutral-0 font-medium'
							: 'bg-neutral-0 dark:bg-neutral-700'
					} rounded-full tracking-[-0.3px] leading-[140%] border border-neutral-200 dark:border-neutral-700 px-5 pt-2 pb-2.5 cursor-pointer focus:outline-2 dark:outline-red-400 outline-red-700 outline-offset-2`}
				>
					Active
				</button>
				<button
					type="button"
					onClick={() => setFilterType('inactive')}
					className={`${
						filterType === 'inactive'
							? 'bg-red-700 dark:bg-red-400 text-neutral-0 font-medium'
							: 'bg-neutral-0 dark:bg-neutral-700'
					} rounded-full tracking-[-0.3px] leading-[140%] border border-neutral-200 dark:border-neutral-700 px-5 pt-2 pb-2.5 cursor-pointer focus:outline-2 dark:outline-red-400 outline-red-700 outline-offset-2`}
				>
					Inactive
				</button>
			</article>
		</section>
	);
};

export default Filter;
