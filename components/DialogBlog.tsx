import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from '@/components/ui/button'
import FormDialog from '@/components/FormDialog'



const DialogBlog = () => {
    return (
        <Dialog>
            <DialogTrigger >
                <div className={buttonVariants({ size: "default", variant: "ghost" })}>
                    Open
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Set your OpenAI API Key</DialogTitle>
                    <DialogDescription>
                        <FormDialog />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DialogBlog