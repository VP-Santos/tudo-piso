import { prisma } from "@/lib/prisma";
import DisplayImagesClient from "../Client/DisplayImagesClient";

export default async function DisplayImages() {

    const images_istallations = await prisma.images_istallations.findMany({
        select: {
            image_path: true,
        },
        take: 5,
    });

    const images = images_istallations.map((item) => item.image_path);

    return <DisplayImagesClient images={images} />
}