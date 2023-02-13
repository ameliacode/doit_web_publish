const PageTitle = ({title}) => {
    return(
        <h2 className="h-auto font-medium pt-[30px] pb-[12px] pl-[50px] text-black bg-white text-[28px] opacity-100 
            transition-all animation-delay-150 border-b-[8px] border-red">
           {title}
        </h2>
    );
}

export default PageTitle;