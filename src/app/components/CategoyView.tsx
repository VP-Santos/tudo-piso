import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import AreaCard from "./Cards";

interface Manufacturer {
  name: string;
  origin: string;
  description: string;
  image_path: string
}

interface ProductLine {
  id: number;
  name: string;
  image_path: string;
}

interface CategoryManufacturer {
  id: number;
  manufacturers: Manufacturer;
  product_lines: ProductLine[];
}

interface Props {
  url_path: string;
  categoryData: {
    name: string;
    category_manufacturer: CategoryManufacturer[];
  };
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export default function CategoryView({ url_path, categoryData }: Props) {
  console.log(categoryData);
  
  return (
    <>
      <Typography variant="h4" textAlign="center" mt={3}>
        {capitalize(categoryData.name)}
      </Typography>
      {categoryData?.category_manufacturer.map((item) => (
        <Box key={item.id}>
          <Paper sx={{ marginTop: 4, marginBottom: 4, padding: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img width={'auto'} height={100} src={item.manufacturers.image_path}>
              </img>
            </Box>
            <Box>
              fabricante: {item.manufacturers?.name} <br />
              origem: {item.manufacturers?.origin} <br />
              descrição: {item.manufacturers?.description}
            </Box>
          </Paper>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {item.product_lines.map((line) => {
              const slug = line.name?.replace(/\s+/g, "-").toLowerCase();

              return (
                <Link key={line.id} href={`/${url_path}/${slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
                >
                  <AreaCard
                    width={200}
                    height={100}
                    name={line.name}
                    image={line.image_path}
                  />
                </Link>
              );
            })}
          </Box>
        </Box>
      ))}
    </>
  );
}