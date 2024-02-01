interface propsType{
    img : string,
    name: string,
    count: string,
    key: string
}
// 
const CategoryCart:React.FC<propsType> = ({img, name, count}) => {
  return (
    <div className="border border-gray-600 hover:border-gray-400 rounded-lg hover:scale-110 transition-transform">
      <div className="flex justify-between items-center p-8">
        <div className="text-md"> 
            <p className="font-bold">{name}</p>
            <p className="text-blue-600 font-mono">{count}</p>
        </div>
        <img className="w-16 h-16 rounded-full" src={img} alt={name} />
      </div>
    </div>
  )
}

export default CategoryCart; 
