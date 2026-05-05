import { PrismaClient } from '@prisma/client'
import {
  categories_data,
  category_manufacturer_data,
  images_istallations_data,
  installations_performed_data,
  manufacturers_data,
  product_lines_data,
  products_data
} from './dataSeed'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Seed iniciando...')

  // =========================
  // 1. CATEGORIES
  // =========================
  for (const category of categories_data) {
    await prisma.categories.create({
      data: category,
    })
  }

  // =========================
  // 2. MANUFACTURERS
  // =========================
  for (const manufacturer of manufacturers_data) {
    await prisma.manufacturers.create({
      data: manufacturer,
    })
  }

  // =========================
  // 3. CATEGORY_MANUFACTURER
  // =========================
  for (const rel of category_manufacturer_data) {
    await prisma.category_manufacturer.create({
      data: rel,
    })
  }

  // =========================
  // 4. PRODUCT_LINES
  // =========================
  for (const line of product_lines_data) {
    await prisma.product_lines.create({
      data: {
        ...line,
      },
    })
  }

  // =========================
  // 5. PRODUCTS
  // =========================
  for (const product of products_data) {
    await prisma.products.create({
      data: product,
    })
  }

  // =========================
  // 6. INSTALLATIONS_PERFORMED
  // =========================
  for (const inst of installations_performed_data) {
    await prisma.installations_performed.create({
      data: inst,
    })
  }

  // =========================
  // 7. IMAGES INSTALLATIONS
  // =========================
  for (const img of images_istallations_data) {
    await prisma.images_istallations.create({
      data: img,
    })
  }

  console.log('✅ Seed finalizado com sucesso 🚀')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })