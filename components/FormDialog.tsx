import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'

const APIInput = z.object({
    apiKey: z.string(),
})

const FormDialog = () => {

    const form = useForm<z.infer<typeof APIInput>>({
        resolver: zodResolver(APIInput),
        defaultValues: {
            apiKey: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof APIInput>) => {

        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='apiKey'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                OpenAI Key
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Set Your OpenAI API Key' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default FormDialog