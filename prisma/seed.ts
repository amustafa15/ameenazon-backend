// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { email: 'markdavidchapman@gmail.com' },
    update: {
      password: "password"
    },
    create: {
      email: 'markdavidchapman@gmail.com',
      name: 'Mark David Chapman',
      address:
        "1600 pennsylvania ave",
      phoneNumber: "911",
      password: "password"
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "tedbundy2@gmail.com" },
    update: {
      password: "password"
    },
    create: {
      email: "tedbundy2@gmail.com",
      name: 'tedward bundy',
      address:
        'adx florence',
      phoneNumber: "999",
      password: "password"
    },
  });

  const product1 = await prisma.product.upsert({
    where: { name: "brooklyn bridge"},
    update: {
      searchID: "brooklyn"
      // tag: "this is a top tier bridge"
    },
    create: {
        name: "brooklyn bridge",
        searchID: "brooklyn",
        cost: 100,
        count: 1,
        imgURL: "/Product Images/brooklyn-bridge.png",
        imgCarousel: [
          "/Details Images/brooklyn bridge 1375px.png",
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn bridge GONY 900px.png"
        ],
        desc: "this is a top tier bridge",
        tag: "this is a top tier bridge"
    },
  });

  const product2 = await prisma.product.upsert({
    where: { name: "london bridge"},
    update: {
      imgCarousel: [
        "/Details Images/Tower Bridge 900px.png",
        "/Details Images/london bridge sunset.png",
        "/Details Images/london bridge.png"
      ],
      searchID: "london"
      // tag: "this bridge will make you say, 'beans are a good breakfast'"
    },
    create: {
        name: "london bridge",
        searchID: "london",
        cost: 250,
        count: 1,
        imgURL: "/Product Images/london-bridge.png",
        imgCarousel: [
          "/Details Images/Tower Bridge 900px.png",
          "/Details Images/london bridge sunset.png",
          "/Details Images/london bridge.png"
        ],
        desc: "this bridge will make you say, 'beans are a good breakfast'",
        tag: "this bridge will make you say, 'beans are a good breakfast'"
    },
  });

  const product3 = await prisma.product.upsert({
    where: { name: "golden gate bridge"},
    update: {
      imgCarousel: [
        "/Details Images/golden-gate-bridge.png",
        "/Details Images/golden gate bridge.png",
        "/Details Images/golden bridge.png"
      ],
      searchID: "golden"
      // tag: "**not actually golden"
    },
    create: {
        name: "golden gate bridge",
        searchID: "golden",
        cost: 500,
        count: 1,
        imgURL: "/Product Images/golden-gate-bridge.png",
        imgCarousel: [
          "/Details Images/golden-gate-bridge.png",
          "/Details Images/golden gate bridge.png",
          "/Details Images/golden bridge.png"
        ],
        desc: "**not actually golden",
        tag: "**not actually golden"
    },
  });

  const product4 = await prisma.product.upsert({
    where: { name: "tapanzee bridge"},
    update: {
      imgURL: "/Product Images/brooklyn-bridge.png",
      searchID: "tapanzee"
      // tag: "this is a top tier bridge"
    },
    create: {
        name: "tapanzee bridge",
        searchID: "tapanzee",
        cost: 100,
        count: 1,
        imgURL: "/Product Images/brooklyn-bridge.png",
        imgCarousel: [
          "/Details Images/tapanzee-bridge.png",
          "/Details Images/tap-bridge.png",
          "/Details Images/tapanzee.png"
        ],
        desc: "this is a top tier bridge",
        tag: "this is a top tier bridge"
    },
  });

  const product5 = await prisma.product.upsert({
    where: { name: "gw bridge"},
    update: {
      name: "gw bridge",
      imgCarousel: [
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png"
      ],
      searchID: "gw"
      // tag: "this is a top tier bridge"
    },
    create: {
        name: "gw bridge",
        searchID: "gw",
        cost: 100,
        count: 1,
        imgURL: "/Product Images/brooklyn-bridge.png",
        imgCarousel: [
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png"
        ],
        desc: "this is a top tier bridge",
        tag: "this is a top tier bridge"
    },
  });

  const product6 = await prisma.product.upsert({
    where: { name: "woodrow wilson bridge"},
    update: {
      imgCarousel: [
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png"
      ],
      searchID: "woodrow"
      // tag: "this is a top tier bridge"
    },
    create: {
        name: "woodrow wilson bridge",
        searchID: "woodrow",
        cost: 100,
        count: 1,
        imgURL: "/Product Images/brooklyn-bridge.png",
        imgCarousel: [
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png"
        ],
        desc: "this is a top tier bridge",
        tag: "this is a top tier bridge"
    },
  });

  const product7 = await prisma.product.upsert({
    where: { name: "camden bridge"},
    update: {
      imgCarousel: [
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png",
        "/Details Images/brooklyn-bridge-900px.png"
      ],
      searchID: "camden"
      // tag: "this is a top tier bridge"
    },
    create: {
        name: "camden bridge",
        searchID: "camden",
        cost: 100,
        count: 1,
        imgURL: "/Product Images/brooklyn-bridge.png",
        imgCarousel: [
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png",
          "/Details Images/brooklyn-bridge-900px.png"
        ],
        desc: "this is a top tier bridge",
        tag: "this is a top tier bridge"
    },
  });

  console.log({ user1, user2, product1, product2, product3, product4, product5, product6, product7 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
