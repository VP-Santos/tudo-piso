'use client'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { useState } from "react";
import ModalImage from "./ModalImage";

interface Props {
    name?: string;
    image_path: string;
    width?: number | string;
    height?: number;
}

export default function AreaCard({
    name,
    image_path,
    width = '100%',
    height = 220,
}: Props) {

    const [open, setOpen] = useState<boolean>(false)



    return (
        <Card
            elevation={3}
            sx={{
                width,
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.25s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                },
            }}
        >
            <Box sx={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height={height}
                    image={image_path}
                    alt={name}
                    sx={{
                        objectFit: "cover",
                        transition: "0.3s ease",
                        "&:hover": {
                            transform: "scale(1.03)",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%)",
                    }}
                />
            </Box>

            <CardContent
                sx={{
                    textAlign: "center",
                    py: 2,
                }}
            >
            </CardContent>
            <ModalImage open={open} setOpen={setOpen} />
        </Card>
    );
}