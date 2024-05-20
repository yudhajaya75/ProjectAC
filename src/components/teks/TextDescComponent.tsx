const TextDescComponent = (props: any) => {
    return (
        <div className="p-5">
            <h5 className='font-bold sm:text-left text-4xl sm:text-3xl text-[#074288]'>
                {props.title}
            </h5>
            <div className='text-justify mt-10' dangerouslySetInnerHTML={{ __html: props.body }}>
            </div>
        </div>
    )
}

export default TextDescComponent;