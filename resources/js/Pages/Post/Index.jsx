export default function Post(props) {
    console.log(props)
    return (
        <>
        <div>
            <h1 className="font-righteous font-bold">Post</h1>
            <h1 className="font-righteous font-bold">{props.title}</h1>
            <h1 className="font-righteous font-bold">{props.description}</h1>
            <h1 className="font-righteous font-bold">{props.author}</h1>
            {props.posts ? props.posts.map((data, i) => {
                return (
                    <div key={i}>
                        <p className="bg-red-600">{data.id}</p>
                        <p className="bg-sky-600">{data.title}</p>
                        <p className="bg-green-700">{data.description}</p>
                        <p className="bg-yellow-400">{data.category}</p>
                        <p className="bg-neutral-700">{data.author}</p>
                    </div>
                )
            }) : <p className="bg-main-red">Gada Postingan Coy</p>}
        </div>
        </>
    )

}