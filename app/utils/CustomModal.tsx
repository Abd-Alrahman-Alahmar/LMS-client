import React, { FC } from 'react'
import { Modal, Box } from "@mui/material";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeltem: any;
    component: any;
    setRoute?: (route: string) => void;
    refetch?:any;
}

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component, refetch }) => {
    return (
        <Modal open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[450px] bg-white dark:bg-slate-900 rounded-lg shadow p-4 sm:p-4 outline-none"
            >
                <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
            </Box>
        </Modal>
    )
}

export default CustomModal