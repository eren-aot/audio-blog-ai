"use client"
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import DialogBlog from '@/components/DialogBlog'
import axios from "axios";

const URLInput = z.object({
    url: z.string().min(2, "URL is required.")
});

const FormBlog = () => {

    const form = useForm<z.infer<typeof URLInput>>({
        resolver: zodResolver(URLInput),
        defaultValues: {
            url: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof URLInput>) => {

        console.log(values);

        const response = await axios.post("/api/get-blogs",values);

        console.log(response.data);
    }

    return (
        <div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                    <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Website Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder='URL' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button type='submit'>Listen</Button>
                </form>
            </Form>
        </div>
    )
}

export default FormBlog