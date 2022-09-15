import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.player.findMany();
  // if(true) return;

  await seedPlayers();

  const players = await prisma.player.findMany();
  console.log(players);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedPlayers() {
  const createManyPosts = getPlayers().map(player =>
    prisma.player.create({
      data: player,
    })
  );

  // Clear table
  await prisma.player.deleteMany();

  // Seed players
  await Promise.all(createManyPosts);
}

function getPlayers() {
  return [
    { name: 'Michael', email: 'mschilling@move4mobile.com' },
    { name: 'Cas', email: 'cvandinter@move4mobile.com' },
    { name: 'Arwin', email: 'astrating@move4mobile.com' },
    { name: 'Jesper', email: 'jstrating@move4mobile.com', active: false },
  ];
}
