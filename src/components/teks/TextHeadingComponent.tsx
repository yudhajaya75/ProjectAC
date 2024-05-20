const TextHeadingComponent = (props: any) => {
    return (
        <div className='font-sans p-5'>
            <p className=' text-center text-4xl sm:text-[50px] font-bold text-[#074288]'>
                {props.heading}
            </p>

        </div>
    )

}

export default TextHeadingComponent;