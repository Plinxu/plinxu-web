import { PersonalSchema } from "./personal.schema"
import { ActionError, action } from "../../../lib/safe-actions";
import { z } from "zod";
import snsWebSdk from '@sumsub/websdk';
import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { getLocation } from "@/lib/geolocation";
import { headers } from "next/headers";




export const onBoarding = async({input} : any) => {
    let personal;
    const ip = getIpAddress();
    const location = await getLocation(ip);
    if (input.id) {
        personal = await prisma.user.findUnique({
            where: {
                id: input.id,
            },
        })
        if (!personal) {
            throw new ActionError('No User Found')
        }
        personal = await prisma.user.update({
            where:{
                id: input.id,
            },
            data: {
                country: location.country_name ?? personal.country,
                nationality: input.natinality ?? personal.nationality,
                gender: input.gender ?? personal.gender,
                socialLink: input.socialLink ?? personal.socialLink,
                Address: input.Address ?? personal.Address,
                signature: input.signature ?? personal.signature,
                phoneNumber: input.phoneNumber ?? personal.phoneNumber,
                DOB: input.DOB ?? personal.DOB,
                accountNumber: input.accountNumber ?? personal.accountNumber,
            }
        })

    }else {
        personal = await prisma.user.create({
            data: {
                country: input.country,
                nationality: input.natinality ,
                gender: input.gender,
                socialLink: input.socialLink,
                Address: input.Address,
                signature: input.signature,
                phoneNumber: input.phoneNumber,
                DOB: input.DOB,
                accountNumber: input.accountNumber,
                email: input.email
            },
          });
    }
    return personal;
}


export const getIpAddress = () => {
    const headerList = headers();
    const ip = headerList.get("x-real-ip") || headerList.get("x-forwarded-for");
    return ip as string;
}


