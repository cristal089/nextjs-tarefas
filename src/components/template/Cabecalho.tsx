export default function Cabecalho(props){
    return ( 
        <div className="flex h-1/3 bg-img-tarefas bg-no-repeat bg-cover">
            <div className={`
                flex flex-1 h-full justify-center items-center
                bg-gradient-to-r from-purple-500 via-transparent to-blue-500
            `}>
                {props.children}
            </div>
        </div>
    )
}