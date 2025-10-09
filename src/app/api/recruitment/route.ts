import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

export async function POST(request:Request){

    try{
        const body=await request.json();

        const recruitment=await prisma.recruitment.create({
            data:{
                name:body.name,
                usn:body.usn,
                year:body.year,
                branch:body.branch,
                email:body.email,
                whatsapp:body.whatsapp,
                domains:body.domains,
                message:body.message,
            }
        })

        return NextResponse.json({
            success:true,
            data:recruitment
        },{status:201})
    }catch(error:any){
        return NextResponse.json({
            success:false,
            error:error
        },{status:500})
    }
}

export async function GET(){
    console.log("hello")
    try{
        //console.log("hello")
        const recruitments=await prisma.recruitment.findMany({
            orderBy:{createdAt:'desc'},
        })
        return NextResponse.json({success:true, data:recruitments})
    }catch(error:any){
        return NextResponse.json({
            success:false,
            error:error,
            
        },{status:500})
    }
}