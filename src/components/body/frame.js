const Frame = (props) => {
    console.log(props);

    return (
        < div className='frames-item' >
            <img src={props.frames} />
        </div >
    )
}

export default Frame