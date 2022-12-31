export default function Home(props) {
    return (
        <div className="text-center">
            <h1 className="mb-5">Escola</h1>
            <img src={props.image} alt={'escola'} className= 'img-fluid' />
        </div>
    )
}
