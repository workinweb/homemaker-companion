import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

import {Resend} from 'resend';
import {EmailTemplate} from "~/components/EmailTemplate/EmailTemplate";

const resend = new Resend("re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1");

export const mailRouter = createTRPCRouter({
    exampleQuery: publicProcedure
        .input(z.object({text: z.string()}))
        .query(({input}) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    sendEmail: publicProcedure
        .input(z.object({
            name: z.string().min(1),
            email: z.string().min(1),
            phone: z.string().min(1),
            message: z.any()
        }))

        .mutation(async ({input}) => {
            const {name, email, phone, message} = input;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const data = await resend.emails.send({
                from: 'Evan Home Care <evanhomecare@resend.dev>',
                to: ['kbueno1077@gmail.com', 'ezlomar62@gmail.com', 'vadiae@gmail.com'],
                subject: `New Contact Us Inquiry from ${name}`,
                react: EmailTemplate({name, email, message, phone}),
            });


            return {
                data,
            };

        }),
});
