interface propsType{
    icon: React.ReactNode,
    title: string
}

const FeatureCard :React.FC<propsType> = ({icon, title}) => {
  return (
    <div className="container w-full flex lg:flex-row justify-center items-center gap-4 hover:cursor-pointer ">
        <div className="bg-gray-300 w-[50px] h-[50px] text-accentDark grid place-items-center rounded-full hover:bg-slate-400">{icon}</div>
        <div>
          <h3 className="text-accent font-medium ">{title}</h3>
          <p className="text-gray-500 text-[14px]">Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default FeatureCard
