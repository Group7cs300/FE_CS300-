import { useState } from 'react'

export default function PopularCategories() {
	const [categories, setCategories] = useState([
		'Math',
		'IT',
		'Writing',
		'Office Skill',
		'Bussiness',
	])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				width: '70%',
			}}
		>
			{categories.map((category) => (
				<div
					key={category}
					style={{
						
					}}
				>
					{category}
				</div>
			))}
		</div>
	)
}