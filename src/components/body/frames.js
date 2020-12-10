import Frame from './frame';

const Frames = (props) => {

    let frames = props.frames;

    function framesCheckNull(frames) {
        if (frames == null) {
            return (
                <div className="container"></div>
            )
        } else {
            return (
                <div className="container">
                    <div className="frames">
                        <Frame frames={frames[0]} />
                        <Frame frames={frames[1]} />
                        <Frame frames={frames[2]} />
                        <Frame frames={frames[3]} />
                        <Frame frames={frames[4]} />
                    </div>
                </div>
            )
        }
    }
    return (
        framesCheckNull(frames)
    )
}

export default Frames