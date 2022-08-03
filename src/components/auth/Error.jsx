import Typography from "@mui/material/Typography";

const Error = (props) => {
    return(
        <>
            {
                props.error === 'empty' &&
                <Typography sx={{ color: `red`, m: 1 }}>
                    فیلد های بالا نمیتواند خالی باشد.
                </Typography>
            }

            {
                props.error === 'wrong' &&
                <Typography sx={{ color: `red`, m: 1 }}>
                    نام کاربری یا رمز عبور اشتباه است.
                </Typography>
            }
        </>

    );
}

export default Error;