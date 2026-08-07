const Card = ({ name, image  }: {name: string, image: string}) => {
    return (
        <div className="flex gap-3 my-5 hover:bg-[#0e3da7] hover:cursor-pointer p-2 rounded">
            <img
                src={`../../../public/${image}`}
                alt={`${name} image`} 
                className="w-15 h-15 rounded border border-white shadow-lg"
            />
            <h2>{name}</h2>
        </div>
    );
}
 
export default Card;