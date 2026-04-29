import DisplayImagesClient from "../Client/DisplayImagesClient";

export default function DisplayImages() {

    const images = [
        "/assets/display/piso.jpg",
        "/assets/display/piso2.jpg",
        "/assets/display/piso3.jpeg",
        "/assets/category/laminado.png",
        "/assets/category/vinilico.png",
        "/assets/category/acabamento.png",
    ];

    return <DisplayImagesClient images={images} />
}