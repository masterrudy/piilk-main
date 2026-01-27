# PIILK Main Site

**Domain:** piilk.com (또는 www.piilk.com)

간단한 브랜드 랜딩 페이지. 로고 + 슬로건만 표시.

## 구조

```
piilk-main/
├── app/
│   ├── page.tsx        # 메인 페이지 (로고 + 슬로건)
│   ├── layout.tsx      # 공통 레이아웃
│   └── globals.css     # 글로벌 스타일
├── public/
│   ├── pillk-logo.png
│   ├── Piilk_icon.png
│   └── og-image.png
└── ...config files
```

## Vercel 배포

1. GitHub에 푸시 (별도 리포 또는 모노레포)
2. Vercel에서 Import
3. Domains에서 `piilk.com` 연결

## 로컬 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인

## 참고

- Shopify로 전환할 경우, 이 Vercel 프로젝트 대신 Shopify에 piilk.com 연결
- 현재는 "Coming Soon" 스타일의 심플 랜딩
