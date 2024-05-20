
const FounderCard = ({ name, title, imageUrl, position }: any) => {
    const getPositionClass = () => {
        return position === 'top' ? 'mt-[-0px]' : 'mt-20';
    };

    return (
        <div className={`w-[220px] text-[#002157] p-2 mx-10 ${getPositionClass()}`}>
            <img src={imageUrl} className='' alt={name} />
            <p className='font-bold'>{name}</p>
            <p className=''>{title}</p>
        </div>
    );
};

export default FounderCard;
