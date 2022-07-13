import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import {useDeleteEventMutation} from "../store/dataApi";


const MyDeleteDialog = (props) => {
    const { deleteDialogOpen, setDeleteDialogOpen } = props;
    const { id } = props;
    const { mode } = props;
    const { selectedIds, setSelectedIds } = props;

    const [deleteEvent] = useDeleteEventMutation();

    const handleDeleteClick = async () => {
        await deleteEvent(id)
        if (selectedIds.length){
            setSelectedIds(
                selectedIds.filter((selectedId) => selectedId !== id)
            )
        }
        setDeleteDialogOpen(false);
    }

    const handleDeleteClickMultiple = async () => {
        if (selectedIds.length){
            selectedIds.map(async (selectedId) => await deleteEvent(selectedId))
            setSelectedIds([])
        }
        setDeleteDialogOpen(false);
    }

    const handleClose = () => {
        setDeleteDialogOpen(false);
    }


    return(
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            dir={`rtl`}
            open={deleteDialogOpen}
            onClose={handleClose}
        >
            <DialogTitle>اخطار</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    آیا مطمعن هستید؟
                    {
                        mode === 'multiple' ? ` ${selectedIds.length} ` + 'عدد': null
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{ m: 1, bgcolor: `error.main`,
                    '&:hover': { backgroundColor: `error.dark` } }}
                        onClick={ mode === 'multiple' ? handleDeleteClickMultiple : handleDeleteClick}
                        variant={`contained`}>حذف</Button>
                <Button sx={{ m: 1 }} onClick={handleClose}
                        variant={`contained`}>انصراف</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MyDeleteDialog;