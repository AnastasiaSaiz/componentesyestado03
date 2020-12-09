const Coche = (props) => {
return(
    <div>
        <p>{props.altura}</p>
        <p>{props.longitud}</p>
        <p>{props.ruedas}</p>
        <p>{props.color}</p>

    </div>
)
};

export default Coche;