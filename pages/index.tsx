import { GetServerSideProps } from "next"
import { useState } from "react"

const Index = ({ data }) => {
	const [loading, setLoading] = useState(true)
	return (
		<div className="grid grid-flow-rows grid-cols-4 gap-2 mx-auto">
			{data.map((r) => (
				<div>
					<img
						className="rounded-lg"
						src={r.preview_url}
						alt={r.id}
						width="300px"
					/>
				</div>
			))}
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	// mockup data
	const res = await fetch("https://konachan.com/post.json?page=1")
	const data = await res.json()
	return {
		props: { data },
	}
}
export default Index
