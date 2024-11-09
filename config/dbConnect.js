import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Veritabanına başarıyla bağlandı.');
  } catch (error) {
    console.error('Veritabanına bağlanırken hata oluştu:', error);
  } finally {
    await prisma.$disconnect();
  }
};

