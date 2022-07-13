import Description from "./Description";
import ActivateButton from "./ActivateButton";


const VideoComponentsNotActive = (props) => {

    const {activate, description, name, url, id, data} = props

    const description_parameters = {
        render: description,
        name: name,
        url: url,
        id: id,
    }

    return(
        <>
            <Description {...description_parameters}/>
            <ActivateButton render={activate} data={data}/>
        </>
    )
}

export default VideoComponentsNotActive;