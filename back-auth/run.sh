#!/bin/sh

echo "Starting db push..."

npx prisma migrate deploy
npx prisma generate
npx prisma db seed
npm run dev
