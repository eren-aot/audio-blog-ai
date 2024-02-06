"use client"
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { Button } from './ui/button'

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
    }

    return (
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
               
                <div className='flex flex-row gap-2'>
                    <Button type='submit'>Listen</Button>
                    <Button type='button' variant="secondary">Set Your OpenAI ApiKey</Button>
                </div>
            </form>
        </Form>
    )
}

export default FormBlog