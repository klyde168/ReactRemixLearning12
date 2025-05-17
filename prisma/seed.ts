import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 清除現有的使用者資料
  await prisma.user.deleteMany();

  // 新增範例使用者資料
  await prisma.user.createMany({
    data: [
      { name: '張三', email: 'zhang.san@example.com' },
      { name: '李四', email: 'li.si@example.com' },
      { name: '王五', email: 'wang.wu@example.com' },
    ],
  });

  console.log('資料庫已成功初始化並新增範例使用者資料。');
}

main()
  .catch((e) => {
    console.error('初始化資料庫時發生錯誤:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
