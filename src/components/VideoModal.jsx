import React from 'react'

import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

export default function VideoModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>
            <Button onClick={handleOpen} className='hover:bg-blue-900'>
                Presentation video
            </Button>
            <Dialog open={open} handler={handleOpen} style={{width: 'auto', minWidth: 'none', maxWidth: 'none'}} className='min-w-[0px] max-w-[0] w-auto'>
                <DialogHeader className='flex justify-center'>Who we are</DialogHeader>
                <DialogBody divider className="h-[40rem] overflow-scroll">
                    <video className="h-full w-full rounded-lg" controls autoPlay>
                        <source src="/coral-video.mp4" type="video/mp4" />
                    </video>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button color="red" onClick={handleOpen}>
                        close
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}