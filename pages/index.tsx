import { GetServerSideProps, InferGetStaticPropsType } from "next"

interface KData {
	id: Int16Array
}

const Index = ({ data }) => {
	return (
		<div>
			{data.map((r) => (
				<li>{r.id}</li>
			))}
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch("https://konachan.com/post.json?page=1")
	const data = await res.json()
	return {
		props: { data },
	}
}
export default Index
