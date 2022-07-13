import { Box } from "@mui/material"
import TextBoxUpdate from "./TextBoxUpdate"

const TextBoxes = (props) =>{

    const { name, setName } = props;
    const { url, setUrl } = props;
    const { defaultName, defaultUrl } = props
    const { submit } = props

    const nameTextBox_parameters = {
        label: 'اسم',
        defaultValue: defaultName,
        value: name,
        setValue: setName,
        submit: submit,
    }

    const urlTextBox_parameters = {
        label: 'آدرس',
        defaultValue: defaultUrl,
        value: url,
        setValue: setUrl,
        submit: submit,
    }

    return(
        <>  
            <Box mb={2}>
                <TextBoxUpdate {...nameTextBox_parameters}/>
            </Box>
            <Box mb={2}>
                <TextBoxUpdate {...urlTextBox_parameters}/>
            </Box>
        </>
    )
}

export default TextBoxes;