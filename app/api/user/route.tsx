
import { NextRequest, NextResponse } from "next/server";

import client from '@/db'


export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
export async function POST(req:NextRequest){
    const body = await req.json();
    console.log(body);
    
    // should add zod validation here
    try{const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return NextResponse.json({
        body
    })}catch(e){
        return NextResponse.json({
            error:'Erro while signing up'
        },{
            status:411
        })
    }
}