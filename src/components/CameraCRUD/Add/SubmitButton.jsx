import Button from "@mui/material/Button";
import {useSetStreamsMutation} from "../../store/dataApi";

const SubmitButton = (props) => {

    const [setStreams] = useSetStreamsMutation();
    const { submit } = props;
    const { setName, setUrl, setDetectors } = props;

    const handleClick = async () => {
        try {
            await setStreams(submit);
            setName('')
            setUrl('')
            setDetectors([])
        }catch (e) {
            console.log(e)
        }
    }

    return(
        <Button sx={{ m: 1 }}
                onClick={handleClick} variant={`contained`}>
            اضافه کردن
        </Button>
    );
}

export default SubmitButton;