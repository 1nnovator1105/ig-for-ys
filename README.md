This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Cronjob 설정

이 프로젝트는 Vercel cronjob을 사용하여 정기적인 작업을 수행합니다.

### 설정 방법

1. **API 라우트**: `src/app/api/cron/route.ts`에 cronjob 로직이 구현되어 있습니다.
2. **스케줄 설정**: `vercel.json`에서 cronjob 스케줄을 설정할 수 있습니다.

### 현재 스케줄

- **경로**: `/api/cron`
- **스케줄**: 매일 자정 (`0 0 * * *`)

### 스케줄 형식

Cron 표현식을 사용하여 스케줄을 설정할 수 있습니다:

- `0 0 * * *` - 매일 자정
- `0 */6 * * *` - 6시간마다
- `0 0 * * 0` - 매주 일요일 자정
- `0 0 1 * *` - 매월 1일 자정

### 환경변수 설정

Supabase API 호출을 위해 다음 환경변수를 설정해야 합니다:

#### 로컬 개발 환경

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```bash
SUPABASE_URL=https://yjhurhapalrusumohedr.supabase.co
SUPABASE_CLIENT_ANON_KEY=your_supabase_anon_key_here
```

#### Vercel 배포 환경

Vercel 대시보드에서 프로젝트 설정 > Environment Variables에 다음을 추가하세요:

- `SUPABASE_URL`: `https://yjhurhapalrusumohedr.supabase.co`
- `SUPABASE_CLIENT_ANON_KEY`: 실제 Supabase anon key 값

### 보안

프로덕션 환경에서는 환경변수를 통해 API 키를 안전하게 관리합니다.

### 로컬 테스트

로컬에서 cronjob을 테스트하려면:

```bash
curl http://localhost:3000/api/cron
```
