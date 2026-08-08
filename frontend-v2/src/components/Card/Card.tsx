const Card = ({ name, image  }: {name: string, image: string}) => {
    return (
        <div className="flex bg-[#0e3da7]/40 md:bg-transparent gap-3 my-5 hover:bg-[#0e3da7] hover:cursor-pointer p-2 rounded">
            <img
                src={`../../../public/${image}`}
                alt={`${name} image`} 
                className="w-25 h-25 md:w-20 md:h-20 lg:w-18 lg:h-18 rounded border border-white shadow-lg"
            />
            <h2 className="text-[18px] md:text-[16px] text-shadow-lg">{name}</h2>
        </div>
    );
}
 
export default Card;