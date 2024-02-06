import { NextResponse } from "next/server";
import puppeteer from "puppeteer";


export async function POST(req: Request) {

    try {

        const body = await req.json();
        const { url } = body;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url);

        const blogContent  = await page.$eval('.page__content',(element) => element.textContent);
        console.log(blogContent);
        await browser.close();

        return NextResponse.json({content : blogContent});

    } catch (error) {

        console.log("Error getting Blogs content", error);

        return new NextResponse("Internal Server Error");
    }
}