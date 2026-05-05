import { Box } from "@mui/material";

interface Props {
    path: string
    name : string
    height ?: number | string
}

export default function Image({ path, name, height = 300 }: Props) {
    return (
        <Box
            component="img"
            src={path}
            alt={name}
            sx={{
                width: '100%',
                height: height,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 8,
            }} />
    )
}