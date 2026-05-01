import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  width?: number | string;
  link: string;
}

export default function AreaCard({
  name,
  image,
  width = "100%",
  link,
}: Props) {
  return (
    <Link
      href={link}
      style={{
        textDecoration: "none",
        display: 'flex',
        width,
        alignItems: 'center'
      }}
    >
      <Card
        elevation={3}
        sx={{
          border: "5px solid #fff",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          overflow: "hidden",
          transition: "0.25s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              height: 220,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={name}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), transparent 70%)",
              }}
            />
          </Box>

          <CardContent
            sx={{
              textAlign: "center",
              py: 2,
              bgcolor: "#fff",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{
                lineHeight: 1.2,
                color: "#000",
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}