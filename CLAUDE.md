# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

「one pixel」は、デザインの中で1pxずれている箇所を見つけるWebゲームアプリケーションです。

- **技術スタック**: Vue 3 + TypeScript + Vite + Pinia + Vue Router
- **デプロイ先**: Vercel/Netlify/GitHub Pages（無料プラン）

## Development Setup

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルド後のプレビュー
npm run preview

# TypeScriptの型チェック
npm run typecheck

# ESLintの実行
npm run lint
```

## Project Architecture

```
src/
├── components/        # Vueコンポーネント
│   ├── StartScreen.vue    # スタート画面
│   ├── GameScreen.vue     # ゲーム画面
│   ├── ResultScreen.vue   # 結果画面
│   └── ProblemDisplay.vue # 問題表示コンポーネント
├── stores/           # Piniaストア
│   └── game.ts          # ゲーム状態管理
├── router/           # Vue Router設定
│   └── index.ts
├── data/             # 問題データ
│   └── problems.ts      # 100問の問題定義
├── types/            # TypeScript型定義
│   └── index.ts
├── utils/            # ユーティリティ関数
│   ├── canvas.ts        # 称号画像生成
│   └── random.ts        # ランダム問題選択
└── App.vue           # ルートコンポーネント

```

## Key Features

1. **問題システム**: 10カテゴリー × 10問 = 100問からランダムに10問出題
2. **称号システム**: 正解数に応じて6段階の称号を付与
3. **画像生成**: Canvas APIで称号画像を生成
4. **SNS共有**: Web Share APIでの共有機能

## Important Notes

- **any型の使用禁止**: TypeScriptではany型を使わず、適切な型定義を行う
- **1px精度**: CSSは1px単位の精密な制御が必要
- **レスポンシブ対応**: PC/スマートフォン両方に対応
- **無料デプロイ**: Vercel/Netlifyの無料プランでのホスティングを前提に設計

## Problem Categories

1. grid-layout: グリッドレイアウト系
2. border: ボーダー・境界線系
3. spacing: 間隔・マージン系
4. text: テキスト系
5. icon-image: アイコン・画像系
6. button-interactive: ボタン・インタラクティブ要素系
7. background: 背景・装飾系
8. shadow-effect: シャドウ・エフェクト系
9. responsive: レスポンシブ要素系
10. animation: アニメーション系